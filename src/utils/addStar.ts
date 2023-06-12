import { MathUtils, Mesh, MeshStandardMaterial, SphereGeometry } from "three";

function addStar(scene: any) {
  const geometry = new SphereGeometry(0.25, 24, 24);
  const material = new MeshStandardMaterial({ color: 0xffffff });
  const stars = new Mesh(geometry, material);
  const [x, y, z] = Array(3)
    .fill(1)
    .map(() => {
      return MathUtils.randFloatSpread(100);
    });
  stars.position.set(x, y, z);
  scene.add(stars);
  // return stars;
}

export default addStar;
