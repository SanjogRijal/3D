import { Mesh } from "three";

type SRPObjectsType = {
  geometry: any;
  material: any;
};

const SRPCreateObjects = ({ geometry, material }: SRPObjectsType) => {
  const objectCreated = new Mesh(geometry, material);
  return objectCreated;
};

export default SRPCreateObjects;
