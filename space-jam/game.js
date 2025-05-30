// NOTE: Originally 640x1000. Other possible sizes: 512x800, 400x625
var game = new Phaser.Game( 320, 480, Phaser.CANVAS, '', { preload: preload, create: create, update: update });

window.score = 0;

function preload() {

    game.load.image('ball', './ball.png');
    game.load.image('hoop', './hoop.png');
    game.load.image('win0', './win0.png');
    game.load.image('win1', './win1.png');
    game.load.image('lose0', './lose0.png');
    game.load.image('lose1', './lose1.png');
	game.load.image("background", "./bg2.png" );
	
	game.load.image('side rim', './trans.png');
    game.load.image('front rim', './trans.png');

}

var hoop,
    left_rim,
    right_rim,
    ball,
    front_rim,
    current_score = 0,
    current_score_text,
    high_score = 0,
    high_score_text,
    current_best_text;

var score_sound,
    backboard,
    whoosh,
    fail,
    spawn;

var moveInTween,
    fadeInTween,
    moveOutTween,
    fadeOutTween,
    emoji,
    emojiName;

var collisionGroup;

function create() {

    game.add.tileSprite(0, 0, 320, 480, 'background');

	game.physics.startSystem(Phaser.Physics.P2JS);

	game.physics.p2.setImpactEvents(true);

    game.physics.p2.restitution = 0.63;
    game.physics.p2.gravity.y = 0;

	collisionGroup = game.physics.p2.createCollisionGroup();

	score_sound = game.add.audio('score');
	backboard = game.add.audio('backboard');
	backboard.volume = 0.5;
	whoosh = game.add.audio('whoosh');
	fail = game.add.audio('fail');
	fail.volume = 0.1;
	spawn = game.add.audio('spawn');

    // game.stage.backgroundColor = "#fff";
    

	// high_score_text = game.add.text(450, 25, 'High Score\n' + high_score, { font: 'Arial', fontSize: '32px', fill: '#000', align: 'center' });
	current_score_text = game.add.text( 120, 8, '', { font: 'Arial', fontSize: '20px', fill: '#e4ff00', align: 'center' }); // 300, 500
	current_best_text = game.add.text( 10, 10, '', { font: 'Arial', fontSize: '18px', fill: '#fff', align: 'center' });// 230, 450
	current_best_score_text = game.add.text( 120, 8, '', { font: 'Arial', fontSize: '20px', fill: '#00e6e6', align: 'center' }); // 300, 500

	hoop = game.add.sprite(50, 62, 'hoop'); // 141, 100
	left_rim = game.add.sprite(75, 154, 'side rim'); // 241, 296
	right_rim = game.add.sprite(250, 154, 'side rim'); // 398, 296

	game.physics.p2.enable([ left_rim, right_rim], false);

	left_rim.body.setCircle(2.5);
	left_rim.body.static = true;
	left_rim.body.setCollisionGroup(collisionGroup);
	left_rim.body.collides([collisionGroup]);

	right_rim.body.setCircle(2.5);
	right_rim.body.static = true;
	right_rim.body.setCollisionGroup(collisionGroup);
	right_rim.body.collides([collisionGroup]);

	createBall();

	cursors = game.input.keyboard.createCursorKeys();

	game.input.onDown.add(click, this);
	game.input.onUp.add(release, this);

}

function update() {

    
    if (ball && ball.body.velocity.y > 0) {
        front_rim = game.add.sprite(113, 154, 'front rim');
		ball.body.collides([collisionGroup], hitRim, this);
	}
    
	if (ball && ball.body.velocity.y > 0 && ball.body.y > 180 && !ball.isBelowHoop) {

        ball.isBelowHoop = true;
        ball.body.collideWorldBounds = false;
        var rand = Math.floor(Math.random() * 2);
        
		if ( ball.body.x > 115 && ball.body.x < 215 ) {

            emojiName = "win" + rand;
            current_score += 1;
            current_score_text.text = "Score " + current_score;
            score_sound.play();

            landing_page();
            
		} else {

			emojiName = "lose" + rand;
			fail.play();
			if (current_score > high_score) {
				high_score = current_score;
			// 	high_score_text.text = 'High Score\n' + high_score;
            }
            
			current_score_text.text = '';
			current_best_text.text = 'Current Best';
            current_best_score_text.text = high_score;
            
        }
        
		emoji = game.add.sprite(143, 100, emojiName);
		emoji.scale.setTo(0.25, 0.25);
		moveInTween = game.add.tween(emoji).from( { y: 150 }, 500, Phaser.Easing.Elastic.Out, true);
		fadeInTween = game.add.tween(emoji).from( { alpha: 0 }, 200, Phaser.Easing.Linear.None, true, 0, 0, false);
        moveInTween.onComplete.add(tweenOut, this);
        
	}

	if (ball && ball.body.y > 1200) {
		game.physics.p2.gravity.y = 0;
		ball.kill();
		createBall();
	}

}

function tweenOut() {
	moveOutTween = game.add.tween(emoji).to( { y: 50 }, 600, Phaser.Easing.Elastic.In, true);
	moveOutTween.onComplete.add(function() { emoji.kill(); }, this);
	setTimeout(function () {
		fadeOutTween = game.add.tween(emoji).to( { alpha: 0 }, 300, Phaser.Easing.Linear.None, true, 0, 0, false);
	}, 450);
}

function hitRim() {

	backboard.play();

}

function createBall() {

	var xpos;
	if (current_score === 0) {
		xpos = 160;
	} else {
		xpos = 160; //60 + Math.random() * 100;
	}
	spawn.play();
	ball = game.add.sprite(xpos, 405, 'ball');
	game.add.tween(ball.scale).from({x : 0.7, y : 0.7}, 200, Phaser.Easing.Linear.None, true, 0, 0, false);
	game.physics.p2.enable(ball, false);
	ball.body.setCircle(60); // NOTE: Goes from 60 to 36
	ball.launched = false;
	ball.isBelowHoop = false;

}

var location_interval;
var isDown = false;
var start_location;
var end_location;

function click(pointer) {

	var bodies = game.physics.p2.hitTest(pointer.position, [ ball.body ]);
	if (bodies.length) {
		start_location = [pointer.x, pointer.y];
		isDown = true;
		location_interval = setInterval(function () {
			start_location = [pointer.x, pointer.y];
		}.bind(this), 200);
	}

}

function release(pointer) {

	if (isDown) {
		window.clearInterval(location_interval);
		isDown = false;
		end_location = [pointer.x, pointer.y];

		if (end_location[1] < start_location[1]) {
			var slope = [end_location[0] - start_location[0], end_location[1] - start_location[1]];
			var x_traj = -2300 * slope[0] / slope[1];
			launch(x_traj);
		}
	}

}

function launch(x_traj) {

	if (ball.launched === false) {
		ball.body.setCircle(36);
		ball.body.setCollisionGroup(collisionGroup);
		current_best_text.text = '';
		current_best_score_text.text = '';
		ball.launched = true;
		game.physics.p2.gravity.y = 3000;
		game.add.tween(ball.scale).to({x : 0.6, y : 0.6}, 500, Phaser.Easing.Linear.None, true, 0, 0, false);
		ball.body.velocity.x = x_traj;
		ball.body.velocity.y = -1750;
		ball.body.rotateRight(x_traj / 3);
		whoosh.play();
	}

}

function landing_page(){
	setTimeout(function(){
		$('canvas').hide();
		$('.page3').show();
	}, 800);
}