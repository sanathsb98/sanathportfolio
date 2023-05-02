import React from 'react';
import * as THREE from 'three'
import { useEffect } from 'react';
import { gsap } from 'gsap';
import './globe.css'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Navbar from '../navbar/navbar';
import Intro from '../intro/intro';




const Globe = () => {


useEffect(() => {
//image1:
var textureLoader = new THREE.TextureLoader();
var backgroundTexture = textureLoader.load('./src/assets/sun.jpg');
var backgroundGeometry = new THREE.PlaneGeometry(2, 2, 0);

//image2:
var textureLoader2 = new THREE.TextureLoader();
var backgroundTexture2 = textureLoader2.load('./src/assets/earth.jpg');
var backgroundGeometry2 = new THREE.PlaneGeometry(2, 2, 0);

//image2:
var textureLoader3 = new THREE.TextureLoader();
var backgroundTexture3 = textureLoader3.load('./src/assets/moon.jpg');
var backgroundGeometry3 = new THREE.PlaneGeometry(2, 2, 0);

//scene:
const scene = new THREE.Scene();
scene.background = new THREE.Color("#000019");


//geometry1:
const geometry = new THREE.SphereGeometry( 3,30,30 ); 
const material = new THREE.MeshStandardMaterial( {   map: backgroundTexture} ); 
var backgroundMesh = new THREE.Mesh(backgroundGeometry, material);
const mesh = new THREE.Mesh( geometry, material );
scene.add(backgroundMesh);
scene.add(mesh);

//geometry2:
const geometry2 = new THREE.SphereGeometry( 3,30,30 ); 
const material2 = new THREE.MeshStandardMaterial( {   map: backgroundTexture2} ); 
var backgroundMesh2 = new THREE.Mesh(backgroundGeometry2, material2);
const mesh2 = new THREE.Mesh( geometry2, material2 );
mesh2.position.set( 10, 5, 0 ); // set the position of the first sphere
scene.add(backgroundMesh2);
scene.add(mesh2);

//geometry3:
const geometry3 = new THREE.SphereGeometry( 3,30,30 ); 
const material3 = new THREE.MeshStandardMaterial( {   map: backgroundTexture3} ); 
var backgroundMesh3 = new THREE.Mesh(backgroundGeometry3, material3);
const mesh3 = new THREE.Mesh( geometry3, material3 );
mesh3.position.set( -30, 15, 10 ); // set the position of the first sphere
scene.add(backgroundMesh3);
scene.add(mesh3);

//sizes:
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

//light:
const light = new THREE.PointLight(0xffffff, 1, 200)
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
controls.autoRotateSpeed = 10;

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
t1.fromTo('nav',{y:'-100%'},{y:'0%'})
t1.fromTo('.globeTitle',{opacity:0},{opacity:1})
t1.fromTo('.desTitle',{opacity:0},{opacity:1})
t1.fromTo('.exploreBtn ',{opacity:0},{opacity:1})
t1.fromTo('.title',{opacity:0},{opacity:1})
});


  return (
    <>
    <Navbar/>
    <Intro/>
    <canvas className='webgl'>
    </canvas>
    </>
  )
}

export default Globe