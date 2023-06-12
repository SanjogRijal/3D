import { MathUtils, Mesh, MeshStandardMaterial, SphereGeometry } from "three";

function addStar() {
  const geometry = new SphereGeometry(0.25, 24, 24);
  const material = new MeshStandardMaterial({ color: 0xffffff });
  const stars = new Mesh(geometry, material);
  const array: Array<number> = Array(3);
  const [x, y, z] = array.map(() => {
    return MathUtils.randFloatSpread(100);
  });
  stars.position.set(x, y, z);

  return stars;
}

export default addStar;
