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
// const group = new THREE.Group()
// const group2 = new THREE.Group()

// const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5) 
// const material = new THREE.MeshBasicMaterial({color:'rgb(238,212,255)'}) //eed4ff
// const cube1 = new THREE.Mesh(geometry, material)
// //cube1.position.y= 1.5
// group2.position.y = 1.5

// group2.add(cube1) //单独用scene.add(cube1) 整体group.add(cube1)
// group.add(group2) 

// const geometry2 = new THREE.BoxGeometry(1, 1, 1) 
// const material2 = new THREE.MeshBasicMaterial({color:'rgb(255,212,251)'}) //ffd4fb
// const cube2 = new THREE.Mesh(geometry2, material2)
// group.add(cube2) //scene.add(cube2)
// //cube2.add(axes) //cube2位参考坐标系 ->后续is 以ta为中心旋转www

// const geometry3 = new THREE.BoxGeometry(0.2, 0.2, 0.2) 
// const material3 = new THREE.MeshBasicMaterial({color:'rgb(217,212,255)'}) //d9d4ff
// const cube3 = new THREE.Mesh(geometry3, material3)
// cube3.position.y= 0.5
// group2.add(cube3) //scene.add(cube3)

// scene.add(group)


//物体组合运动 Level Up! A moving car!
//Object 整部车 car group
const car = new THREE.Group()
//材质共用
const material = new THREE.MeshNormalMaterial() //if all have same material

//车身 body group
const body = new THREE.Group()

const bodyCube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,2,0.5), //how big is the car
    material
)

const bodyCube2 = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    new THREE.MeshBasicMaterial({ color:'rgb(255,212,251)'})
)
bodyCube2.position.z= 0.5 //z:往屏幕外

body.add(bodyCube1)
body.add(bodyCube2)

car.add(body)

//wheel 轮子 - group
const wheelGroup1 = new THREE.Group()
const wheel1 = new THREE.Mesh(
    new THREE.BoxGeometry(0.1, 0.7, 0.7),
    material //共用的
)
wheelGroup1.position.set(-0.7, 0.5, 0)
wheelGroup1.add(wheel1)
car.add(wheelGroup1)

//wheel2 轮子2 - group
const wheelGroup2 = new THREE.Group()
const wheel2 = new THREE.Mesh(
    new THREE.BoxGeometry(0.1, 0.7, 0.7),
    material //共用的
)
wheelGroup2.position.set(0.7, 0.5, 0)
wheelGroup2.add(wheel2)
car.add(wheelGroup2)

//wheel3 轮子3 - group
const wheelGroup3 = wheelGroup1.clone() // this ist all copy wheelgroup1
wheelGroup3.position.y = -0.6
car.add(wheelGroup3)

//wheel4 轮子4 - group
const wheelGroup4 = wheelGroup2.clone() //同理 this ist all copy wheelgroup2
wheelGroup4.position.y = -0.6
car.add(wheelGroup4)

//轮胎 group
const circle = new THREE.Group()

let n = 10
for(let i = 0; i < n; i++){
    const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1)
    const mesh = new THREE.Mesh(geometry,material)
    circle.add(mesh)
}






scene.add(car)






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

    // cube2.rotation.z= time //it this 是以自己的中心旋转
    // cube1.rotation.z= time
    // cube3.rotation.z= time

    // group.rotation.z = time //they were in group in group.add(cube1/2/3/...)
    // group2.rotation.z = time 
    //===========================================


    //car.position.y = Math.sin(time) * 2 //Math.sin(time) this is 往复运动
    car.position.y = time % 4 - 2 //just 0-2 之间运动了
    wheelGroup1.rotation.x = -time

    wheelGroup2.rotation.x = -time
    wheelGroup3.rotation.x = -time
    wheelGroup4.rotation.x = -time
    

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
