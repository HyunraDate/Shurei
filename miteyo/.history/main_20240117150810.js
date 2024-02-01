import './style.css'
import * as THREE from 'three'

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls' //鼠标交互
import * as dat from 'dat.gui' //图形化交互界面

console.log(THREE)

const w = window.innerWidth
const h = window.innerHeight
//const stat = new Stat()
const gui = new dat.GUI() //初始化finish


//Scene
const scene = new THREE.Scene()

//If you wanna show Axes
const axes = new THREE.AxesHelper(2, 2, 2) //x,y,z = r,g,b
scene.add(axes)


const cubeG = new THREE.BoxGeometry(1,1,1)
const cubeM = new THREE.MeshBasicMaterial({ color: 0xff00ff})
const cube = new THREE.Mesh(cubeG, cubeM)
scene.add(cube)


//Light - Lamp, Sunlight
const light = new THREE.AmbientLight()
scene.add(light)

//Camera - 
const camera = new THREE.PerspectiveCamera(75, w/h, 0.1, 100) //75 is angle, size, how long u can see.
camera.position.set(4, 2, 5)
camera.lookAt(0, 0, 0)

//文件夹
const folder = gui.addFolder('cam position') //Position UI 就会折叠在Folder里了 in Screen

//These are all object
folder.add(camera.position, 'x', -5, 5, 0.01).name('cam position -x') //gui控制相机范围x,y,z; 还可以调整路径
folder.add(camera.position, 'y', -5, 5, 0.01).name('cam position -y') //gui.add 改成folder.add就是把UI放在了folder里了
folder.add(camera.position, 'z', -5, 5, 0.01).name('cam position -z')


//控制cube.position
gui.add(cube.position, 'x', -3, 3)
gui.add(cube.position, 'y', -3, 3)
gui.add(cube.position, 'z', -3, 3)

//
const obj = {
    name: 'Mike',
    age: '21',
    speed: 10
}

//* Renderer 渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(w,h)
renderer.render(scene,camera)

document.body.append(renderer.domElement)
// 





const orbitControls = new OrbitControls(camera,renderer.domElement) //初始化鼠标交互OrbitControls

//if you wanna many cubes animation
const clock = new THREE.Clock() //Clock是一个对象 
tick()
function tick(){ 
    const time = clock.getElapsedTime() 
    //console.log(time)


    

    requestAnimationFrame(tick)
    renderer.render(scene,camera)
    orbitControls.update()
}
//========================================


