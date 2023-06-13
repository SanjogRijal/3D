import { Mesh, TextureLoader } from "three";

type TextureMappingTypes = {
  image: any;
  scene: any;
  geometry: any;
  material: any;
  values: [x: number, y: number, z: number];
};

const textureMapping = ({
  image,
  scene,
  geometry,
  material,
  values,
}: TextureMappingTypes) => {
  const imageTexture = new TextureLoader().load(image);
  const [x, y, z] = values;
  const mapping = new Mesh(
    new geometry(x, y, z),
    new material({ map: imageTexture })
  );

  scene.add(mapping);
  mapping.position.z = 30;
  mapping.position.setX(-10);
  return mapping;
};

export default textureMapping;
