import './style.css'
import * as THREE from 'three'
import Stat from 'three/examples/jsm/libs/stats.module' //显示帧数
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls' //鼠标交互
import * as dat from 'dat.gui' //图形化交互界面

console.log(THREE)

const w = window.innerWidth
const h = window.innerHeight
const stat = new Stat()
const gui = new dat.GUI() //初始化finish


//Scene
const scene = new THREE.Scene()

//If you wanna show Axes
const axes = new THREE.AxesHelper(2, 2, 2) //x,y,z = r,g,b
scene.add(axes)

//立方体
const cubeControls = {
    color: 0xEED4FF
}
const cubeG = new THREE.BoxGeometry(1,1,1)
const cubeM = new THREE.MeshBasicMaterial({ color: cubeControls.color}) //0xff00ff fuchsia
const cube = new THREE.Mesh(cubeG, cubeM)
scene.add(cube)

gui.addColor(cubeControls, 'color').onChange(() => {
    cubeM.color.set(cubeControls.color) 
    //This is a 回调函数， color in UI changed, cube changed.
    //Or u can use
    //cubeM.color = new THREE.Color(cubeControls.color)
})

//球
const sphereG = new THREE.SphereGeometry(0.6)
const sphereM = new THREE.MeshNormalMaterial()
//sphereM.wireframe = true 因为默认是false
// can also { visible: true}
const sphere = new THREE.Mesh(sphereG, sphereM)
scene.add(sphere)

gui.add(sphereM, 'wireframe') //This is a checkbox!

//Light - Lamp, Sunlight
const light = new THREE.AmbientLight()
scene.add(light)

//Camera - 
const camera = new THREE.PerspectiveCamera(75, w/h, 0.1, 100) //75 is angle, size, how long u can see.
camera.position.set(4, 2, 5)
camera.lookAt(0, 0, 0)

//文件夹
const folder1 = gui.addFolder('cam position') //Position UI 就会折叠在Folder里了 in Screen

//These are all object
folder1.add(camera.position, 'x', -5, 5, 0.01).name('cam position -x') //gui控制相机范围x,y,z; 还可以调整路径
folder1.add(camera.position, 'y', -5, 5, 0.01).name('cam position -y') //gui.add 改成folder.add就是把UI放在了folder里了
folder1.add(camera.position, 'z', -5, 5, 0.01).name('cam position -z')

const folder2 = gui.addFolder('cube position')
//控制cube.position
folder2.add(cube.position, 'x', -3, 3)
folder2.add(cube.position, 'y', -3, 3)
folder2.add(cube.position, 'z', -3, 3)

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
document.body.append(stat.dom)
// 

const orbitControls = new OrbitControls(camera,renderer.domElement) //初始化鼠标交互OrbitControls

const controls = {
    r : 1.5, //圆周运动go
    speed : 1,
    stop: ()=> {
        controls.speed = 0 //click to stop // This is a button!
    }
}
gui.add(controls, 'r', 0, 3).name('move radius')
gui.add(controls, 'speed', 0, 5).name('move speed')
gui.add(controls, 'stop')


//if you wanna many cubes animation
const clock = new THREE.Clock() //Clock是一个对象 
tick()
function tick(){ 
    const time = clock.getElapsedTime() 
    //console.log(time)

    //let 圆周运动
    sphere.position.x = Math.sin(time * controls.speed) * controls.r
    sphere.position.z = Math.cos(time * controls.speed) * controls.r

    requestAnimationFrame(tick)
    renderer.render(scene,camera)
    stat.update()
    orbitControls.update()
}
//========================================


