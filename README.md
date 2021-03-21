## Spectacles Depth Template Spawner
Documentation: https://lensstudio.snapchat.com/templates/spectacles/depth/  
  
Modifies the default Spectacles Depth template to allow for spawning distinct
objects at differing rates. `ObjectSpawner.js` has been split up into two
files - `FishSpawner.js` and `PlasticSpawner.js`.

`FishSpawner.js` - spawns `count` object immediately  
`PlasticSpawner.js` - spawns 1 object at a time at an exponentially increasing rate  
  
### Updates 03/21
- Added script variable `shouldSpawn` to `PlasticSpawner.js`. When this value
is unchecked in the inspector, the spawnTimer will not increment. When it is
set to true, the PlasticSpawner will start the timer and being spawning plastic
at the correct rate.
- Added print statements to `PlasticSpawner.js` to print the total kilotons of
plastic each time a new plastic is spawned. I print out 2 values, a "true"
value based on our mathmatical model as well as an "approximate" value based
on YEARS_PER_SEC and our rough metric of 1 pastic object ~ 5kt. Feel free to
choose whichever value you prefer (lines 436 and 440).
- Added a duplicate of `FishSpawner.js` called `StarfishSpawner.js`, ready to
modified with a behavior script for enabling models on collision.

I found out that having `PlasticSpawner.js` disabled at the Lens start and then
enabling it doesn't work - the event listeners aren't set up properly when the
script is not enabled at the start. It works if it's enabled at the start and
then quickly disabled and reenabled, so I tried disabling the script in PlasticSpawner
after it is initialized but then the code to reenable it never runs (as this code lives in PlasticSpawner).

I decided to use a script variable instead - that way the background setup can
occur and all the code in spawner sitll runs, but if this value isn't set to
true then the spawn timer will not start. When the start button is pressed, you
will do the following:

*If inside of PlasticSpawner.js*  
`script.shouldSpawn = true;`

*If inside of another file*
`script.PlasticSpawner.api.start()`  
### To Run
`Project Info -> Check Rear Camera Only -> Send to device`

### Notes / Concerns

This is potentially concering - we should do some testing here to see how
this warning may affect accuracy of our collision detection.

`[Scripts/FishSpawner.js:182] [ObjectSpawner], Warning, Spectacles Depth Texture is not initialized, Collisions will not be calculated correctly, falling back to default distance of MAX_DISTANCE_FROM_CAMERA.`



