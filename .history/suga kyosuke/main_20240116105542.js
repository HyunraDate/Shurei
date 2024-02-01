import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import * as THREE from 'three'
//import { setupCounter } from './counter.js' // i dont need a Counter now

console.log(THREE)

const w = window.innerWidth
const h = window.innerHeight

//Room 房间 - 3D 容器
//Scene
const scene = new THREE.Scene()

//Things 东西
//Objects 物体：Geometry几何体，骨架；material

const axes = new THREE.AxesHelper(2, 2, 2) //x,y,z = r,g,b
scene.add(axes)

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial()
const cube = new THREE.Mesh(geometry, material)
scene.add(cube) 

//P4
//Postion
// cube.position.x = -1 //负数is左边
// cube.position.y = -1 //负数is往下
// cube.position.z = -1 //负数is远离
// cube.position.set(1,1,1) //也可以写成
// console.log(cube.position)

// //Rotation
// //cube.rotation.z = 45 / 180 * Math.PI //沿着z轴转
// cube.rotation.x = 45 / 180 * Math.PI
// cube.rotation.y = 45 / 180 * Math.PI
// console.log(cube.rotation)// 打印出来是Euler公式

// //Scale
// cube.scale.x = 2 //放大两倍
// cube.scale.y = 2
// cube.scale.z = 2
// cube.scale.set(2, 2, 2) //也可以写成
// console.log(cube.scale)

//P5
//SetInterval
let i = 0
setInterval(()=>{
    console.log(i)
}, 1000) //1000=1秒，d.h 每一秒打印一个i



//Light - Lamp, Sunlight
const light = new THREE.AmbientLight()
scene.add(light)

//Camera - 
const camera = new THREE.PerspectiveCamera(75, w/h, 0.1, 100) //75 is angle, size, how long u can see.
camera.position.set(0, 0, 5)
camera.lookAt(0, 0, 0)


//* Renderer 渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(w,h)
renderer.render(scene,camera)

document.body.append(renderer.domElement)
// 







//From official Not mine
// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hey!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
