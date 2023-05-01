import React from 'react';
import * as THREE from 'three'
import { useEffect } from 'react';
import { gsap } from 'gsap';
import './globe.css'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';



const Globe = () => {


useEffect(() => {
//image:
var textureLoader = new THREE.TextureLoader();
var backgroundTexture = textureLoader.load('./src/assets/background.jpg');
var backgroundGeometry = new THREE.PlaneGeometry(2, 2, 0);




//scene:
const scene = new THREE.Scene();
scene.background = new THREE.Color("#000000");

//geometry:
const geometry = new THREE.SphereGeometry( 3,30,30 ); 
const material = new THREE.MeshStandardMaterial( {   map: backgroundTexture} ); 
var backgroundMesh = new THREE.Mesh(backgroundGeometry, material);
const mesh = new THREE.Mesh( geometry, material );
scene.add(backgroundMesh);
scene.add(mesh);

//sizes:
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

//light:
const light = new THREE.PointLight(0xffffff, 1, 100)
light.position.set(25,25,25)
scene.add(light)

//camera:
const camera = new THREE.PerspectiveCamera( 45,sizes.width/sizes.height,0.1,100);
camera.position.z =20;
scene.add(camera)


//renderer:
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGL1Renderer({canvas})
renderer.setSize(sizes.width,sizes.height)
renderer.setPixelRatio(2)
renderer.setClearColor(null);
renderer.render(scene,camera)


//controls:
const controls = new OrbitControls(camera,canvas)
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 15;

//resize:
window.addEventListener('resize',()=>{
sizes.width = window.innerWidth;
sizes.height = window.innerHeight
//update camera:
camera.updateProjectionMatrix()
camera.aspect = sizes.width/sizes.height
renderer.setSize(sizes.width,sizes.height)
})


const loop = () => {
  controls.update()
  renderer.render(scene,camera);
  window.requestAnimationFrame(loop)
}
loop()

const t1 = gsap.timeline({defaults:{duration:1}})
t1.fromTo(mesh.scale,{z:0,x:0,y:0},{z:1,x:1,y:1})

});


  return (
    <>
    <h1 className='globeTitle'>Hi Im Sanath SB</h1><br/>
    <p className='desTitle'>I am a frontend developer</p>
    <canvas className='webgl'>
    </canvas>
    </>
  )
}

export default Globe