const SRPScene = (
  scene: { add: (eachObject: any) => void },
  objectsToAdd: Array<any>
) => {
  objectsToAdd.map((eachObject) => {
    scene.add(eachObject);
  });
};

export default SRPScene;
