import { TextureLoader } from "three";

const setTextureBackgroundToScene = (textureImage: any, scene: any) => {
  const texture = new TextureLoader().load(textureImage);
  scene.background = texture;
};

export default setTextureBackgroundToScene;
