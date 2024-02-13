import './style.css'
import * as THREE from 'three'
import Stat from 'three/examples/jsm/libs/stats.module' //显示帧数
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls' //鼠标交互
import * as dat from 'dat.gui' //图形化交互界面
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper'

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
// const planeG = new THREE.PlaneGeometry(4, 4)
// const planeM = new THREE.MeshPhongMaterial({
//     color: 0xcccccc,
//     //shininess: 50
// })
// const plane = new THREE.Mesh(planeG, planeM)
// plane.rotation.x= -0.5 * Math.PI //向x翻转90度 坪铺地面
// plane.receiveShadow = true //阴影要在这里
// scene.add(plane)


// const colors = {
//     dLight: 0xffffff,
//     sLight: 0xffffff,
// }

//Light - Lamp, Sunlight
const aLight = new THREE.AmbientLight(0xffffff, 0.2) //环境光 氛围光 for 整体 //0.2是强度
scene.add(aLight)
// or alight.intensity = 0.2

const hLight = new THREE.HemisphereLight(0xff0000, 0x0000ff) //ff0000 red, 0000ff blue
scene.add(hLight)




//Camera - 
const camera = new THREE.PerspectiveCamera(75, w/h, 0.1, 100) //75 is angle, size, how long u can see.
camera.position.set(0, 2, 3)
camera.lookAt(0, 0, 0)


//* Renderer 渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(w,h)
//renderer.render(scene,camera)
//renderer.shadowMap.enabled = true //need to tell Rechner 在哪里产生阴影 - to plane


document.body.append(renderer.domElement)
document.body.append(stat.dom)

const p1 = new THREE.Vector3(1, 0, 0)
const p2 = new THREE.Vector3(0, 1, 0)
const points = [p1, p2]

// 点，线，面（体）
const geometry = new THREE.BufferGeometry().setFromPoints(points)
const material = new THREE.LineBasicMaterial({
    color: 0xff000,
})
const line = new THREE.Line(geometry,material)
scene.add(line)



const orbitControls = new OrbitControls(camera,renderer.domElement) //初始化鼠标交互OrbitControls



const clock = new THREE.Clock() //Clock是一个对象 
tick()
function tick(){ 
    const time = clock.getElapsedTime() 
    //console.log(time)


    cube.rotation.x = time * 0.4
    cube.rotation.y = time * 0.4
    torus.rotation.x = time * 0.4
    torus.rotation.y = time * 0.4

    //let 圆周运动
    // sphere.position.x = Math.sin(time * controls.speed) * controls.r
    // sphere.position.z = Math.cos(time * controls.speed) * controls.r

    //sphere.position.y = Math.sin(time) //上下移动 //but Math.sin(time)会穿进地面
    sphere.position.y = Math.abs(Math.sin(time)) + 0.5 //abs 绝对值， 还是有一点地面里how? + 0.5半径距离 should be 刚刚好

    requestAnimationFrame(tick)
    renderer.render(scene,camera)
    stat.update()
    orbitControls.update()
    //spotLightHelper.update()
}
//========================================


