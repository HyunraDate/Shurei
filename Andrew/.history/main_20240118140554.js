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





//不同材质的球球 // need Light
// MeschPhongMaterial
const planeG = new THREE.PlaneGeometry(4, 4)
const planeM = new THREE.MeshPhongMaterial({
    color: 0xff00ff,
    shininess: 50
})
const plane = new THREE.Mesh(planeG, planeM)
plane.rotation.z= -0.5 * Math.PI //向前翻转90度 坪铺地面
scene.add(plane)




//Light - Lamp, Sunlight
const alight = new THREE.AmbientLight(0xffffff, 0.9) //环境光 氛围光 for 整体 //0.2是强度
scene.add(alight)
alight.intensity = 0,2

const light2 = new THREE.DirectionalLight(0xffffff) //打光！白色d光
light2.position.set(2, 2, 2) //正对镜头 平行光 vs.聚光灯是SpotLight
scene.add(light2)

//Camera - 
const camera = new THREE.PerspectiveCamera(75, w/h, 0.1, 100) //75 is angle, size, how long u can see.
camera.position.set(4, 2, 5)
camera.lookAt(0, 0, 0)

//文件夹
// const folder1 = gui.addFolder('cam position') //Position UI 就会折叠在Folder里了 in Screen

// //These are all object
// folder1.add(camera.position, 'x', -5, 5, 0.01).name('cam position -x') //gui控制相机范围x,y,z; 还可以调整路径
// folder1.add(camera.position, 'y', -5, 5, 0.01).name('cam position -y') //gui.add 改成folder.add就是把UI放在了folder里了
// folder1.add(camera.position, 'z', -5, 5, 0.01).name('cam position -z')

// const folder2 = gui.addFolder('cube position')
// //控制cube.position
// folder2.add(cube.position, 'x', -3, 3)
// folder2.add(cube.position, 'y', -3, 3)
// folder2.add(cube.position, 'z', -3, 3)



//* Renderer 渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(w,h)
renderer.render(scene,camera)

document.body.append(renderer.domElement)
document.body.append(stat.dom)
// 

const orbitControls = new OrbitControls(camera,renderer.domElement) //初始化鼠标交互OrbitControls



const clock = new THREE.Clock() //Clock是一个对象 
tick()
function tick(){ 
    const time = clock.getElapsedTime() 
    //console.log(time)

    //let 圆周运动
    // sphere.position.x = Math.sin(time * controls.speed) * controls.r
    // sphere.position.z = Math.cos(time * controls.speed) * controls.r

    requestAnimationFrame(tick)
    renderer.render(scene,camera)
    stat.update()
    orbitControls.update()
}
//========================================


