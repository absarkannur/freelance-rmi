$(function(){ 

    // Hammer JS
    var swipeup      = document.getElementById('swipe');
    var hammer    = new Hammer.Manager(swipeup);
    var swipe     = new Hammer.Swipe();

    hammer.add(swipe);

    hammer.on('swipeup', function(){
        $('.page0').fadeOut(3000);
        setTimeout(function(){
            $('.page1').fadeIn(3000);
            setTimeout(function(){
                showAd();
            },2500);
        },3000);
    });


    function showAd(){

        $('.car1').animate({ left: '-97px'}, 1500 );

        setTimeout(function(){
            $('.sensor').show();
        }, 1300 );

        setTimeout(function(){
            $('.car2').animate({ left: '0px'}, 1000 );
        }, 600 );

        setTimeout(function(){
            $('.page1,.page3').fadeOut(3000);

            setTimeout( function(){
                $('.page2').fadeIn(3000);
            }, 3000 );

        }, 2300 );


        setTimeout(function(){
            $('.page1,.page2').fadeOut(3000);

            setTimeout( function(){
                $('.page3').fadeIn(3000);
            }, 3000 );

        }, 11000 );

        


    }


});


$( function() {
    $( "#slider" ).slider({
        max: 7,
        value: 1,
        slide: function( e, ui ) {
            $('.gallery li').removeClass('active');
            $('.gallery li').eq( ui.value ).addClass('active');
        }
    });
});

// Smoke

var camera, scene, renderer,
    geometry, material, mesh;
 
init();
animate();
 
function init() {
    clock = new THREE.Clock();

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( 320, 480 );

    scene = new THREE.Scene();
 
    camera = new THREE.PerspectiveCamera( 75, 320 / 480, 1, 10000 );
    camera.position.z = 10;
    scene.add( camera );
 
    geometry = new THREE.BoxGeometry( 200, 200, 200 );
    material = new THREE.MeshLambertMaterial( { color: 0xffffff, wireframe: false } );
    mesh = new THREE.Mesh( geometry, material );
    //scene.add( mesh );
    cubeSineDriver = 0;

    THREE.ImageUtils.crossOrigin = ''; 


    light = new THREE.DirectionalLight(0xffffff,0.7);
    light.position.set(-1,0,1);
    scene.add(light);
  
    smokeTexture = THREE.ImageUtils.loadTexture('./images/Smoke-Element.png');
    smokeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, map: smokeTexture, transparent: true});
    smokeGeo = new THREE.PlaneGeometry(300,300);
    smokeParticles = [];


    for (p = 0; p < 150; p++) {
        var particle = new THREE.Mesh(smokeGeo,smokeMaterial);
        particle.position.set(Math.random()*500-250,Math.random()*500-250,Math.random()*1000-100);
        particle.rotation.z = Math.random() * 360;
        scene.add(particle);
        smokeParticles.push(particle);
    }
    document.getElementById('smoke').appendChild(renderer.domElement);
 
}
 
function animate() {
 
    delta = clock.getDelta();
    requestAnimationFrame( animate );
    evolveSmoke();
    render();

}
 
function evolveSmoke() {
    var sp = smokeParticles.length;
    while(sp--) {
        smokeParticles[sp].rotation.z += (delta * 0.2);
    }
}

function render() {
 
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.01;
    cubeSineDriver += .01;
    mesh.position.z = 100 + (Math.sin(cubeSineDriver) * 500);
    renderer.render( scene, camera );
	renderer.setClearColor( 0xffffff, 1);
 
}
