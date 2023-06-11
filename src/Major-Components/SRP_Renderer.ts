import { WebGLRenderer } from "three";


const SRP_Renderer = () => {
    const SRP_Canvas = document.getElementById('bgSrPortfolio');
   
    const renderer = new WebGLRenderer({
        canvas: SRP_Canvas || document.createElement('canvas')
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    
    //Make full screen canvas
    renderer.setSize(window.innerWidth, window.innerHeight);
    return renderer
}

export default SRP_Renderer