import { PerspectiveCamera } from "three";

const SRP_Camera = () => {
    const camera = new PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1,1000);

    //Move camera around Z-Axis in order to get better perspective when adding shapes
    camera.position.setZ(30)
    return camera;
}

export default SRP_Camera