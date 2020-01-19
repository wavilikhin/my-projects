// Variables
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
// Creating DOM elem
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// Geometry and mesh
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshPhongMaterial();
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);
// Render scene
const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  mesh.rotation.y -= 0.0007;
};

animate();
// Camera
camera.position.z = 3;
// Light

const light = new THREE.DirectionalLight(0xcccccc, 1);

light.position.set(5, 3, 5);
scene.add(light);
// Textures
//   mars
material.map = new THREE.TextureLoader().load("textures/marscyl1l.jpg");
material.bumpMap = new THREE.TextureLoader().load(
  "textures/mars_elevation_map_by_oleg_pluton_dcsav34-fullview.jpg"
);
material.bumpScale = 0.018;
//  stars
const starsGeometry = new THREE.SphereGeometry(6, 40, 40);
const starsMaterial = new THREE.MeshBasicMaterial();
const starsMesh = new THREE.Mesh(starsGeometry, starsMaterial);

starsMaterial.map = new THREE.TextureLoader().load("textures/stars.jpeg");
starsMaterial.side = THREE.BackSide;

scene.add(starsMesh);
// Mouse
//   x
document.addEventListener("mousemove", e => {
  camera.position.x = (e.x - window.innerWidth / 2) * 0.005;
  camera.lookAt(scene.position);
});
//   y
document.addEventListener("mousemove", e => {
  camera.position.y = (e.y - window.innerHeight / 2) * 0.005;
  camera.lookAt(scene.position);
});
