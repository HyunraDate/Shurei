import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import * as THREE from 'three'
//import { setupCounter } from './counter.js' // i dont need a Counter now

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls' //鼠标交互

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

//set a Cube Basic Knowleges=====================
// let cubes = [] //if many

// function createCube(){ //还可以把Object放进函数中
//     let d = Math.random() //随机数
//     const geometry = new THREE.BoxGeometry(d, d, d) //BoxGeometry(d, d, d)随机大小lor
//     const material = new THREE.MeshBasicMaterial({
//     //color: 'rgb(238,212,255)' //#EED4FF //RGB 16位color
//     color: 0xffffff * Math.random() //this is red 每次*一个随机数 //0xffffff is red
//     })
//     const cube = new THREE.Mesh(geometry, material)
//     cube.position.x = (Math.random() - 0.5) * 4 //因为random区间是-1到1
//     cube.position.y = (Math.random() - 0.5) * 4 
//     cube.position.z = (Math.random() - 0.5) * 4 
//     //scene.add(cube)  //if you have few cubes
//     cubes.push(cube) //if you have many cubes
// }

// createCube() //创建对象！
// createCube()
// createCube()
// createCube() //像我这么强的还有四个！

//also you can
// let n = 20
// for(let i = 0; i < n; i++){
//     createCube()
// }

// cubes.forEach(cube => {
//     scene.add(cube) //add all cubes in the scene
// })

//set a Cube / cubes Basic Knowleges=====================


//立方体 //鼠标交互part=========================================
// const g = new THREE.BoxGeometry(1, 1, 1) //立方体， SphereGeometry(1) is 球
// const m = new THREE.MeshNormalMaterial( //normal法线 每个面color都不一样 //绮丽desu!
//     //when MeshBasicMaterial {color:'rgb(238,212,255)'} 全部面都是这个颜色
// )
// const cube = new THREE.Mesh(g, m)
// scene.add(cube)
//鼠标交互====================================================


//物体组合运动================================================
const geometry = new THREE.BoxGeometry(1, 1, 1) 
const material = new THREE.MeshBasicMaterial({color:'rgb(238,212,255)'}) //eed4ff

const cube1 = new THREE.Mesh(geometry, material)
scene.add(cube1)
cube1.position.y= 1.5

const geometry2 = new THREE.BoxGeometry(1, 1, 1) 
const material2 = new THREE.MeshBasicMaterial({color:'rgb(255,212,251)'}) //ffd4fb

const cube2 = new THREE.Mesh(geometry2, material2)
scene.add(cube2)

const geometry3 = new THREE.BoxGeometry(1, 1, 1) 
const material3 = new THREE.MeshBasicMaterial({color:'rgb(217,212,255)'}) //d9d4ff

const cube3 = new THREE.Mesh(geometry3, material3)
scene.add(cube3)
cube3.position.y= -1.5
//物体组合运动================================================

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

//目前最常用Solution
// const clock = new THREE.Clock() //Clock是一个对象 
// tick()
// function tick(){ //this is JS自带的方法，自动优化滴
//     const time =clock.getElapsedTime() 
//     //console.log(time)
//     cube.rotation.z = time //time is 一直均匀增加的一个值
//     cube.position.x = Math.sin(time) * 2 //sin在-1到1 non stop
//     cube.position.y = Math.cos(time) * 2 //绕成一个圆在旋转！因为 sin x 的平方加cos x 的平方=1

//     requestAnimationFrame(tick)
//     renderer.render(scene,camera)
// }

//======================以上制作动画的三种方法，SetInterval, tick, clock=============


const orbitControls = new OrbitControls(camera,renderer.domElement) //初始化鼠标交互OrbitControls

//if you wanna many cubes animation
const clock = new THREE.Clock() //Clock是一个对象 
tick()
function tick(){ 
    const time = clock.getElapsedTime() 
    //console.log(time)

    // cubes.forEach((cube, index) => { //skill: if you add "index", 每个cube的起点就不一样
    //     cube.rotation.x = time * 0.2 + index
    //     cube.rotation.y = time * 0.2  + index //actually只要设置两个轴的旋转就能实现任何方向的旋转
    // })

    cube2.rotation.z= time

    requestAnimationFrame(tick)
    renderer.render(scene,camera)
    orbitControls.update()
}
//========================================





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
