import { useGLTF, PresentationControls } from "@react-three/drei";
import { useRef } from "react";
// import { useSpring, animated } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type GLTFResult = {
    nodes: {
        FBHead003: THREE.Mesh;
    };
    materials: {
        ["FBHead.001_preview_mat"]: THREE.Material;
    };
}

export default function FloatingHead({ }) {
  const { nodes, materials } = useGLTF("./models/facetest3.gltf") as unknown as GLTFResult;

//   const { scale, position, rotation } = useSpring({
//     scale: menuOpen === true ? 1 : 1,
//     position: menuOpen === true ? [0, -0.3, 0] : [0, -0.3, 0],
//     //   rotation: action !== "home" ? [0.5, 0.6, 0] : [0.5, 0.2, 0],
//   });

const meshRef = useRef<THREE.Group>(null);

  // Subscribe this component to the render-loop, animating the mesh every frame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.007;
    }
  });

  return (
    <group ref={meshRef as React.RefObject<THREE.Group>} scale={1} position={[0, -0.3, 0]}>
      <PresentationControls
        global
        polar={[0, 0]} // Restrict vertical rotation
        azimuth={[-Infinity, Infinity]} // Allow horizontal rotation
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FBHead003.geometry}
          material={materials["FBHead.001_preview_mat"]}
        >
          {/* <Outlines thickness={1} color="black" /> */}
        </mesh>
      </PresentationControls>
    </group>
  );
}

useGLTF.preload("/models/facetest3.gltf");