import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

// Component to load and display your 3D world model
function WorldModel(props) {
  const { scene, animations } = useGLTF("/models/earth_cartoon.glb"); // Assuming you have a world.glb model
  const group = useRef();
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    for (const actionName in actions) {
      if (actions.hasOwnProperty(actionName)) {
        const action = actions[actionName];
        action.loop = THREE.LoopRepeat;
        action.repetitions = Infinity;
        action.play();
      }
    }

    // Cleanup-functie: stop animaties wanneer de component unmount of 'actions' verandert
    return () => {
      for (const actionName in actions) {
        if (actions.hasOwnProperty(actionName)) {
          // Check ook hier of de actie bestaat voordat je stop() aanroept
          if (actions[actionName]) {
            // <-- Belangrijke check hier toegevoegd
            actions[actionName].stop();
          } else {
            console.warn(
              `Action "${actionName}" is undefined during cleanup, cannot stop.`
            );
          }
        }
      }
    };
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Adjust position, rotation, and scale to fit your scene */}
      <primitive
        object={scene}
        position={[0, -0.5, 0]}
        rotation={[0, 0, 0]}
        scale={1}
      />
    </group>
  );
}

// Preload the model
useGLTF.preload("/models/earth.cartoon.glb"); // Make sure this path is correct!

// Main component for the 3D world experience
const WorldExperience = () => {
  return (
    <Canvas
      camera={{ position: [-1, -1, 3], fov: 75 }} // Adjust camera position for your world model
      style={{ width: "100%", height: "100%" }} // Ensure canvas takes full size of its container
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} />
      <WorldModel />
      <OrbitControls enableZoom={false} enablePan={false} />{" "}
      {/* Basic controls */}
      {/* Optional: Add post-processing effects like Bloom for a glowing effect */}
      <EffectComposer>
        <Bloom luminanceThreshold={0.9} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
    </Canvas>
  );
};

export default WorldExperience;
