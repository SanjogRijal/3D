import { WebGL1Renderer, WebGLRenderer } from "three";

type SRPRendererType = {
  rendererType: string;
  canvas: HTMLElement;
};

const SRPRenderer = ({ rendererType, canvas }: SRPRendererType) => {
  let renderer;
  switch (rendererType) {
    case "webGL":
      renderer = new WebGLRenderer({
        canvas,
      });
      break;
    case "webGL1Renderer":
      renderer = new WebGL1Renderer({ canvas });
      break;

    default:
      renderer = new WebGLRenderer({
        canvas,
      });
  }
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  return renderer;
};

export default SRPRenderer;
