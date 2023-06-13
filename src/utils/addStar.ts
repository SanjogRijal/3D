import { MathUtils, Mesh, MeshStandardMaterial, SphereGeometry } from "three";

function addStar(scene: any) {
  const geometry = new SphereGeometry(0.25, 2, 2);
  const material = new MeshStandardMaterial({ color: 0xffffff });
  const star = new Mesh(geometry, material);
  const [x, y, z] = Array(3)
    .fill(1)
    .map(() => {
      return MathUtils.randFloatSpread(100);
    });
  star.position.set(x, y, z);
  scene.add(star);
}

export default addStar;
