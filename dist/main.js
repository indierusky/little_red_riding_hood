// import { GLTFLoader } from './GLTFLoader.js';


// const loader = new GLTFLoader();


//  loader.load( 'path/to/model.glb', function ( gltf ) {

//  	scene.add( gltf.scene );

// }, undefined, function ( error ) {

//  	console.error( error );

//  } );


    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();



// let container;


// function init() {


//     container = document.querySelector('.scene');
//     const fov = 35;
//     const aspect = container.client.Width / container.clientHeight; 
//     const near = 0.1;
//     const far = 500;

//         const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
//         camera.position.set(-50, 40,350);

//         //load model

//         let loader = new THREE.GLTFLoader
//         loader.load('')





// }




