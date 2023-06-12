import { PerspectiveCamera } from "three";

type CameraComponentTypes = {
    cameraType: string,
    verticalFieldOfView: number,
    frustum: {
        NEAR: number,
        FAR: number,
    }
}

function CameraComponent({cameraType, verticalFieldOfView,frustum}: CameraComponentTypes){
    switch(cameraType) {
        case 'Perspective':
            const camera = new PerspectiveCamera(verticalFieldOfView, window.innerWidth/window.innerHeight, frustum.NEAR, frustum.FAR);
            camera.position.setZ(3);
            return camera
        default:
            console.log(`Unknown camera value: ${cameraType}`); 
            
    }
}

export default CameraComponent