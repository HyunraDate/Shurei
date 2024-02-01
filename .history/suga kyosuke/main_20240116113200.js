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




//P5=============================================
//SetInterval
// let i = 0
// setInterval(()=>{
//     console.log(i) //每一秒打印一个i
//     i++ //每一秒添加一个i
// }, 1000) //1000=1秒
// setInterval(()=>{
//     cube.rotation.z += 0.01
//     renderer.render(scene, camera)
// }, 1000 / 60) //60分之一秒执行一次，一般的计算机运算速度 ->显示器的刷新率是60Hz so很流畅
//but不是准确的60分之一，因为运算need also mimi time

//requestAnimationFrame //现实中做动画需要的方法
// function tick(){
//     cube.rotation.z += 0.01
//     renderer.render(scene, camera)

//     requestAnimationFrame(tick)
// }

// tick() //不断执行tick

//if 2 Rechner have different Hz
//60hz 60 * 0.01 = 0.6
//120hz 120* 0.02 = 1.2

//solve diefferent 刷新率的问题
//requestAnimationFrame 
// let time = Date.now
// function tick(){
//     let currentTime = Date.now()
//     let deltaTime = currentTime - time 
//     time = currentTime
//     console.log(deltaTime)

//     cube.rotation.z += deltaTime * 0.001
//     renderer.render(scene, camera)

//     requestAnimationFrame(tick)
// }

// tick() //不断执行tick
//=========================================

const clock = new THREE.Clock() //Clock是一个对象 
tick()
function tick(){ //this is JS自带的方法，自动优化滴
    const time =clock.getElapsedTime() 
    console.log(time)
    cube.rotation.z = time //time is 一直均匀增加的一个值
    cube.rotation.x = Math.sin(time)

    requestAnimationFrame(tick)
    renderer.render(scene,camera)
}






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
