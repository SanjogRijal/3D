import {
  AmbientLight,
  MeshStandardMaterial,
  PointLight,
  Scene,
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

(function main() {
  const canvas =
    document.getElementById("bgSrPortfolio") ||
    document.createElement("canvas");
  const renderer = SRPRenderer({ rendererType: "webGL", canvas });

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
  // Orbit Controls: Allows us to move around the scene using our mouse.
  const orbitControl = new OrbitControls(camera, renderer.domElement);

  //Add Stars to the Scene
  Array(400)
    .fill(1)
    .forEach(() => addStar(scene));

  myObjects.push(orbitControl);

  SRPScene(scene, myObjects);

  //We don't want to have to re-render so we call animateSRP recursively in order to repaint.
  animateSRP({
    objectToRender: torusObject,
    renderer,
    scene,
    camera,
  });
})();
