import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)


const geometry2 = new THREE.BoxGeometry(0.5, 0.5, 0.5)
const material2 = new THREE.MeshBasicMaterial({ color: 0x0ff000 })
const mesh2 = new THREE.Mesh(geometry2, material2)
scene.add(mesh2)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

// With time calculating
let time = Date.now()


// Clock
// const clock = new THREE.Clock()


gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 })
gsap.to(mesh.position, { duration: 1, delay: 3, x: -2 })
gsap.to(mesh.position, { duration: 1, delay: 4, x: 0 })


// Animations
const tick = () => {
    // Time
    // let currentTime = Date.now()
    // const deltaTime = currentTime - time;
    // time = currentTime;

    // Clock
    // const elapsedTime = clock.getElapsedTime();
    
    // Clock Examples
    // mesh.rotation.y = elapsedTime;
    // mesh.rotation.x = elapsedTime;
    // mesh.rotation.z = elapsedTime;
    // mesh.position.y = Math.sin(elapsedTime);


    // Other Examples with Clock
    // Do Circles
    // mesh.position.y = Math.sin(elapsedTime);
    // mesh.position.x = Math.cos(elapsedTime);
    // camera.position.y = Math.sin(elapsedTime);
    // camera.position.x = Math.cos(elapsedTime);


    // camera.lookAt(mesh.position);



    renderer.render(scene, camera)
    window.requestAnimationFrame(tick);
}

tick();
