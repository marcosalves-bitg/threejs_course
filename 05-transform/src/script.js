import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */

/**
 * OLD CUBE
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// POSITION
// mesh.position.x = 0.7;
// mesh.position.y = - 0.6;
// mesh.position.z = 1;
// equal to below
mesh.position.set(0.7,-0.6,1);


// SCALE
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;
mesh.scale.set(2, 0.5, 0.5);


// ROTATION
    // mesh.rotation.y = 1.6;
// Half Rotation

// you can reorder the (set) order of the axes with reorder
mesh.rotation.reorder('yxz');
mesh.rotation.y = Math.PI * 0.5;
mesh.rotation.x = Math.PI * 0.5;
*/

const group = new THREE.Scene();
scene.add(group);


const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })   
)
group.add(cube1);


const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })   
)
group.add(cube2);
cube2.position.set(1,1,0);

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })   
)
group.add(cube3);
cube3.position.set(-1,-1,0);








// Tries to correct the angle of view of the object
// mesh.position.normalize();



// Axes Helpers
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
// camera.position.x = 1
// camera.position.y = 1
scene.add(camera)



/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
