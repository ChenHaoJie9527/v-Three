import * as Three from "three";

console.log(Three);

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

// 使用渲染器
const renderer = new Three.WebGL1Renderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById("app")?.appendChild(renderer.domElement);
