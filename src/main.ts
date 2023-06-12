import {
  Scene,
  WebGLRenderer,
  Mesh,
  MeshBasicMaterial,
  TorusGeometry,
} from "three";
import animateSRP from "./utils/animate";
import CameraComponent from "./Components/camera";
import SRPRenderer from "./Components/renderer";
import SRPScene from "./Components/scene";
import SRPCreateObjects from "./Components/Objects/SRPObjects";
import camera from "./Components/camera";
import scene from "./Components/scene";

(function main() {
  const canvas =
    document.getElementById("bgSrPortfolio") ||
    document.createElement("canvas");
  const renderer = SRPRenderer({ rendererType: "webGL", canvas });

  let geometry = new TorusGeometry(0.8, 0.3, 10, 200);
  // Does not require lightning
  const material = new MeshBasicMaterial({ color: 0xff6347, wireframe: true });

  //Requires Lightning
  // const material = new MeshStandardMaterial({color: 0xFF6347})
  // const pointLight = new PointLight(0xffffff)
  // pointLight.position.set(20,20,20)

  const torusObject = SRPCreateObjects({ geometry, material });
  let myObjects = [torusObject];
  const scene = new Scene();

  const camera = CameraComponent({
    cameraType: "Perspective",
    verticalFieldOfView: 75,
    frustum: { FAR: 0.1, NEAR: 1000 },
  });
  SRPScene(scene, myObjects);

  //We don't want to have to re-render so we call animateSRP recursively in order to repaint.
  animateSRP({
    objectToRender: torusObject,
    renderer,
    scene,
    camera,
  });
})();
