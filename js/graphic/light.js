const glimmer = new THREE.PointLight(0x080f19, 3, 10);
glimmer.position.set(0, 1, 0);
scene.add(glimmer);

const skullLightIntensity = 2;
const skullLightDistance = 7;
const skullLight = new THREE.PointLight(0xaa0000, 0, 0);
skullLight.position.set(-4.8, -1, -3.8);
scene.add(skullLight);

const skullLightAnimation = () => {
  skullLight.intensity = skullLightIntensity * Math.sin(pincrement / 1000);
  skullLight.distance = skullLightDistance * Math.sin(pincrement / 1000);
};

animations.push(skullLightAnimation);
