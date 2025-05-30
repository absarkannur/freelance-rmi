
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var worldMap = [
    [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1],
    [1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1],
    [1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1],
    [1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1],
    [1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1],
    [1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1],
    [1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1],
    [1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1],
    [1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1],
    [1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1],
    [1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1],
    [1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1],
    [1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1],
    [1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1],
    [1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1]
]

var cols = 17
var size = parseInt(canvas.width / cols)

var world = []

worldMap.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
    world.push({
        type: col === 1 ? 'BLOCK' : 'FLOOR',
        x: colIndex * size,
        y: rowIndex * size,
        width: size,
        height: size
    })
    })
});

var floors = world.filter(elm => elm.type === 'FLOOOR');
var blocks = world.filter(elm => elm.type === 'BLOCK');

var player = {
    x: size,
    y: 0,
    width: size,
    height: size,
    fill: '#00f6ff',
    moveUp: function() {
        var self = this
        var hit = false
    
        blocks.forEach(elm => {
            if (self.y - size === elm.y && self.x === elm.x) {
                hit = true
            }
        })
        
        if (!hit) this.y -= size
    },
    moveDown: function() {
        var self = this
        var hit = false
    
        blocks.forEach(elm => {
        if (self.y + size === elm.y && self.x === elm.x) {
            hit = true
        }
        })
        
        if (!hit) this.y += size
        
        if (self.y >= cols * size) {
            // Won //
            $('.page1').hide();
            $('.page2').show();
        }
    },
    moveLeft: function() {
        var self = this
        var hit = false
        
        blocks.forEach(elm => {
            if (self.x - size === elm.x && self.y === elm.y) {
            hit = true
            }
        })
        
        if (!hit) this.x -= size
    },
    moveRight: function() {
        var self = this
        var hit = false
    
        blocks.forEach(elm => {
        if (self.x + size === elm.x && self.y === elm.y) {
            hit = true
        }
        })
        
        if (!hit) this.x += size
    }
}

function render(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    blocks.forEach(elm => {
        ctx.fillStyle = '#ecc423'
        ctx.fillRect(elm.x, elm.y, elm.width, elm.height);
    })

    floors.forEach(elm => {
        ctx.rect(elm.x, elm.y, elm.width, elm.height)
    });

    ctx.save();
    ctx.fillStyle = player.fill;
    ctx.strokeStyle = "#f00";
    ctx.fill();
    ctx.fillRect( player.x, player.y, player.width, player.height );
    ctx.restore();

}

render()

window.onkeydown = function(e) {
    var key = e.keyCode
    
    switch(key) {
        case 38: player.moveUp(); break
        case 40: player.moveDown(); break
        case 37: player.moveLeft(); break
        case 39: player.moveRight(); break
    }
    
    render()
}


var  swipe_games  = document.getElementById('game_events');
var hammer = new Hammer.Manager( swipe_games );
var swipe = new Hammer.Swipe();

hammer.add(swipe);

hammer.on('swipeup', function(){
    player.moveUp();
    player.moveUp();
    player.moveUp();
    player.moveUp();
    player.moveUp();
    player.moveUp();
    player.moveUp();
    player.moveUp();
    player.moveUp();
    player.moveUp();
    player.moveUp();
    render();
});

hammer.on('swipeleft', function(){
    player.moveLeft();
    player.moveLeft();
    player.moveLeft();
    player.moveLeft();
    player.moveLeft();
    player.moveLeft();
    render()
});

hammer.on('swiperight', function(){
    player.moveRight();
    player.moveRight();
    player.moveRight();
    player.moveRight();
    player.moveRight();
    player.moveRight();
    render()
});

hammer.on('swipedown', function(){
    player.moveDown();
    player.moveDown();
    player.moveDown();
    render()
});



$(function(){

    $('.skip').click(function(){
        $('.page1').hide();
        $('.page2').show();
    });
    // 
    setTimeout(function(){
        $('.layer_guide').show();
    },900);

    setTimeout(function(){
        $('.layer_guide').hide();
        $('.line').show();
    }, 2000);

    setTimeout(function(){
        $('.line').hide();
    }, 3000);

    $('.layer_guide').click(function(){
        $('.layer_guide').hide();
    });

    


});