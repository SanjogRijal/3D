import {Scene, WebGLRenderer, CapsuleGeometry ,TorusGeometry, Material, Mesh, PerspectiveCamera, MeshBasicMaterial} from 'three'

const scene = new Scene()
const camera = new PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const canvas = document.getElementById('bgSrPortfolio') || document.createElement('canvas');

const renderer = new WebGLRenderer({
    canvas
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(3)
let geometry = new CapsuleGeometry(0.5,0.5,22,20);
const material = new MeshBasicMaterial({color: 0x00ff00, wireframe: true});
const capsule = new Mesh(geometry, material)
scene.add(capsule)

//
function animate(){
    requestAnimationFrame(animate);
    console.log(capsule.position)
    const xChange = 0.01;
    const yChange = 0.005;
    const zChange = 0.01;
    if(capsule.position.z > 1 ){
    capsule.position.x += xChange;
    capsule.position.y += yChange;
    capsule.position.z += zChange;
        
} else {
        capsule.position.x -= xChange;
        capsule.position.y -= yChange;
        capsule.position.z -= zChange;

    }

    renderer.render(scene, camera)

}

animate()