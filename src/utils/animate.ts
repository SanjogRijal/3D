type animateSRPTypes = {
    objectToRender: any,
    renderer: any,
    scene: any,
    camera: any,
}

function animateSRP({objectToRender, renderer, scene, camera}: animateSRPTypes){
    const animate = () => {
        requestAnimationFrame(animate);
    objectToRender.rotation.x += 0.01;
    objectToRender.rotation.y += 0.005;
    objectToRender.rotation.z += 0.01;
    renderer.render(scene, camera)
    }
    animate();
}

export default animateSRP
