# 3D modeling and animation with ThreeJS

## Major Concepts Of 3D Modeling:

### Scene: 
- It is the container of the Model. 

### Camera
- Many Types. Most common are:
    - Orthographic Camera: Object Size does not change when camera is moved
    - Perspective Camera: Object size increases when closer and decreases when moved farther. More like human eye.
    - Camera takes 4 parameters:
        a. Depth of Field
        b. Aspect Ration
        c. 0.1
        d. 1000
        C and D are called View Frustum and they are what decides which objects are in the visible relative to camera.  

### Renderer
- Renderer renders or draws the scene and camera into the Browser. It takes two parameters: scene and camera. 


## Objects 
### Geometry: 
- The {x, y, z} points that makeup a shape of an object
- ThreeJS has a built in geometry like cylinder, Torus and others

### Material:
- The wrapping paper for an Object Geometry.
- There are Different Material provided by ThreeJS 
- We can also create our own Custom Shaders using WebGL

### MESH: Geometry + Material
