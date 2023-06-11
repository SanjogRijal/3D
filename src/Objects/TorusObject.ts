import { Mesh, MeshBasicMaterial, TorusGeometry } from "three"

const SRP_TorusObject = () => {
    const geometry = new TorusGeometry(10, 3, 16,100);
    const material = new MeshBasicMaterial({color: '#2e8', wireframe: true });
    const torus = new Mesh(geometry, material);
    return torus
    /**
     * Most materials require light source to bounce off of them. 
     * MeshBasicMaterial does not require any light source to bounce off.
     */
}

export default SRP_TorusObject