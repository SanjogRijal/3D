import {
  AmbientLight,
  BoxGeometry,
  DoubleSide,
  FogExp2,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PlaneGeometry,
  PointLight,
  Scene,
  Texture,
  TorusGeometry,
} from "three";
import { OrbitControls } from "three-orbitcontrols-ts";
// import "three/examples/jsm/controls/OrbitControls";
import animateSRP from "./utils/animate";
import SRPRenderer from "./Components/renderer";
import SRPScene from "./Components/scene";
import SRPCreateObjects from "./Components/Objects/SRPObjects";
import CameraComponent from "./Components/camera";
import addStar from "./utils/addStar";
// import HeaderComponent from "./Components/Contents/Header";
import setTextureBackgroundToScene from "./utils/addSceneBackground";
import SpaceImage from "./space.jpg";
import textureMapping from "./utils/textureMapping";
// import MainContent from "./Components/Contents/MainContent";
import moveCamera from "./utils/moveCamera";

// import SanjogImage from "../public/sanjog.jpg";

(function main() {
  const canvas =
    document.getElementById("bgSrPortfolio") ||
    document.createElement("canvas");
  const renderer = SRPRenderer({ rendererType: "webGL", canvas });
  const contentCanvas: HTMLCanvasElement =
    document.querySelector("#bgSrContent") || document.createElement("canvas");
  const context: any = contentCanvas.getContext("2d");
  context.font = "50px sans-serif";
  context.fillText("Hello World!", 0, 60);

  const texture = new Texture(contentCanvas);
  texture.needsUpdate = true;

  let textureMaterial = new MeshBasicMaterial({
    map: texture,
    side: DoubleSide,
  });
  textureMaterial.transparent = true;

  let mesh = new Mesh(new PlaneGeometry(50, 10), textureMaterial);

  //   let geometry = new TorusKnotGeometry(0.5, 0.3, 6, 80, 50, 50);
  let geometry = new TorusGeometry(1, 0.3, 16, 100);
  // Does not require lightning
  //   const material = new MeshBasicMaterial({ color: 0xff6347, wireframe: true });

  //Requires Lightning
  const material = new MeshStandardMaterial({ color: 0xff6347 });
  const pointLight = new PointLight(0xffffff);
  pointLight.position.set(0.5, 0.5, 0.5);
  let myObjects: Array<any> = [pointLight];

  //Ambient light lights up the whole object
  const ambientLight = new AmbientLight(0xffffff);

  //Light Helpers
  //a. PointLightHelper - Helps us get the position of PointLight
  //   const lightHelper = new PointLightHelper(pointLight);

  // Grid Helper - Draws a 2D grid along the scene
  //   const gridHelper = new GridHelper();

  const torusObject = SRPCreateObjects({ geometry, material });
  myObjects.push(torusObject, ambientLight);
  const scene = new Scene();

  const camera: any = CameraComponent({
    cameraType: "Perspective",
    verticalFieldOfView: 75,
    frustum: { FAR: 0.1, NEAR: 1000 },
  });
  renderer.render(mesh, camera);
  // Orbit Controls: Allows us to move around the scene using our mouse.
  const orbitControl = new OrbitControls(camera, renderer.domElement);

  //Add Stars to the Scene
  Array(400)
    .fill(1)
    .forEach(() => addStar(scene));

  myObjects.push(orbitControl);

  SRPScene(scene, myObjects);
  //Set Background
  setTextureBackgroundToScene(SpaceImage, scene);

  //Texture Mapping
  const myImage = textureMapping({
    image: "sanjog.jpg",
    scene,
    geometry: BoxGeometry,
    material: MeshBasicMaterial,
    values: [10, 10, 10],
  });
  // let moon = textureMapping({
  //   image: "fullmoon.png",
  //   scene,
  //   geometry: SphereGeometry,
  //   material: MeshBasicMaterial,
  //   values: [4, 32, 32],
  // });
  //We don't want to have to re-render so we call animateSRP recursively in order to repaint.
  animateSRP({
    objectToRender: torusObject,
    renderer,
    scene,
    camera,
  });

  document.body.onscroll = () => {
    moveCamera(
      [
        { objectToZoom: torusObject, x: true, y: true, z: true },
        {
          objectToZoom: myImage,
          x: true,
          y: true,
          z: false,
        },
      ],
      camera
    );
  };
  scene.fog = new FogExp2(0x11111f, 0.002);

  // HeaderComponent();
  // document.querySelector("#app")?.appendChild(MainContent());
})();

//Texture Mapping
/**
 * CONCEPT: Texture Mapping
 * -> Process of taking two dimensionals pixels and mapping them to a 3D geometry
 */
