import * as Three from "three";
// 导入轨道控制器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
/**
 * 目标：了解 three 最基本的三要素
 * 1. 场景
 * 2. 相机
 * 3. 渲染器
 */

// 创建一个场景
const scene = new Three.Scene();

// 创建透视相机
const camera = new Three.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// 设置三维向量 即相机的位置
camera.position.set(0, 0, 10);

// 将相机添加到场景中
scene.add(camera);

// 往场景添加物体 - 立方缓冲几何体
const geometry = new Three.BoxGeometry(1, 1, 1);
// 设置立方体的材质
const material = new Three.MeshBasicMaterial({ color: "pink" });
// 根据几何体和材质创建物体
const cubeBox = new Three.Mesh(geometry, material);
// 将几何体添加到场景中
scene.add(cubeBox);

// 初始化渲染器
const renderer = new Three.WebGLRenderer();
// 设置渲染尺寸的大小
renderer.setSize(window.innerWidth, window.innerHeight);
// 将渲染器添加到dom节点中
document.getElementById("app")?.appendChild(renderer.domElement);

// 创建轨道控制器
const controls = new OrbitControls(camera, renderer.domElement);

// 渲染函数
function render() {
  // 使用渲染器 将场景和相机渲染出来
  renderer.render(scene, camera);
  // 渲染下一帧 调用render 函数
  window.requestAnimationFrame(render);
}

render();
