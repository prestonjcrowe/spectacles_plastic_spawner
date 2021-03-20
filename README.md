## Spectacles Depth Template Spawner
Documentation: https://lensstudio.snapchat.com/templates/spectacles/depth/  
  
Modifies the default Spectacles Depth template to allow for spawning distinct
objects at differing rates. `ObjectSpawner.js` has been split up into two
files - `FishSpawner.js` and `PlasticSpawner.js`.

`FishSpawner.js` - spawns `count` object immediately  
`PlasticSpawner.js` - spawns 1 object at a time at an exponentially increasing rate  
  


### To Run
`Project Info -> Check Rear Camera Only -> Send to device`

### Notes / Concerns

This is potentially concering - we should do some testing here to see how
this warning may affect accuracy of our collision detection.

`[Scripts/FishSpawner.js:182] [ObjectSpawner], Warning, Spectacles Depth Texture is not initialized, Collisions will not be calculated correctly, falling back to default distance of MAX_DISTANCE_FROM_CAMERA.`



