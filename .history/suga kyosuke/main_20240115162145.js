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
const scene = new THREE.scene()

//Things 东西
//物体：Geometry几何体，骨架；material
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial()
const cube = new THREE.Mesh(geometry, material)
scene.add(cube) 

//Light - Lamp, Sunlight
const light = new THREE.AmbientLight()
scene.add(light)

//Camera - 
const camera = new THREE.PerspectiveCamera(75, w/h, 100) //75 is angle, size, how long u can see.


//* Renderer 渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(w,h)
renderer.render(scene,camera)
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
