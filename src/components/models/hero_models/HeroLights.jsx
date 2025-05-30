import * as THREE from "three";

const HeroLights = () => (
  <>
    {/* lamp's light */}
    <spotLight
      position={[-5, 6, -10]}
      angle={1}
      penumbra={0.2}
      intensity={50}
      color="white"
    />
    {/* bluish overhead lamp */}
    <spotLight
      position={[6, 5, 5]}
      angle={1}
      penumbra={0.5}
      intensity={50}
      color="#fefefe"
    />
    {/* purplish side fill */}
    <spotLight
      position={[-6, 1, 4]}
      angle={2}
      penumbra={1}
      intensity={30}
      color="#fefefe"
    />
    {/* area light for soft moody fill */}
    <primitive
      object={new THREE.RectAreaLight("#fefefe", 8, 3, 2)}
      position={[1, 3, 4]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      intensity={10}
    />
    {/* subtle point light for atmospheric tone */}
    <pointLight position={[0, 1, 0]} intensity={5} color="#fefefe" />
    <pointLight position={[1, 2, -2]} intensity={5} color="#fefefe" />
  </>
);

export default HeroLights;
