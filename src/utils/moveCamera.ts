const moveCamera = (
  objects: Array<{ objectToZoom: any; x: boolean; y: boolean; z: boolean }>,
  camera: any
) => {
  const scrollPosition = document.body.getBoundingClientRect().top;
  objects.map((ourObject) => {
    ourObject.objectToZoom.rotation.x += 0.05;
    ourObject.objectToZoom.rotation.y += 0.05;
    ourObject.objectToZoom.rotation.z += ourObject.objectToZoom.z ? 0.05 : 0;
  });

  camera.position.x = scrollPosition * -0.0002;
  camera.position.y = scrollPosition * -0.0002;
  camera.position.z = scrollPosition * -0.01;
};

export default moveCamera;
