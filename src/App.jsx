import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <>
      <Canvas
        camera={{ position: [0, 3, 3] }}
        shadows
      >
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.5}
          castShadow
          // shadow-camera-far={50}
          // shadow-camera-left={-10}
          // shadow-camera-right={10}
          // shadow-camera-top={10}
          // shadow-camera-bottom={-10}
        >
          <orthographicCamera
            // now we can use ref to access the camera and tweak value with Leva
            attach={"shadow-camera"}
            args={[-10, 10, 10, -10]}
          />
        </directionalLight>
        <directionalLight
          position={[-5, 5, 5]}
          intensity={0.5}
          color="red"
          castShadow
        />

        <mesh position={[1, 1, 1]} castShadow>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="white" />
        </mesh>

        <mesh
          rotation-y={Math.PI / 4}
          castShadow
          receiveShadow
        >
          <boxGeometry />
          <meshStandardMaterial color="white" />
        </mesh>

        <mesh
          rotation-x={-Math.PI / 2}
          position-y={-0.5}
          receiveShadow
        >
          <planeGeometry args={[5, 5]} />
          <meshStandardMaterial color="white" />
        </mesh>

        <group position-x={10}>
          <mesh position={[1, 1, 1]} castShadow>
            <sphereGeometry
              args={[0.5, 32, 32]}
            />
            <meshStandardMaterial color="white" />
          </mesh>

          <mesh
            rotation-y={Math.PI / 4}
            castShadow
            receiveShadow
          >
            <boxGeometry />
            <meshStandardMaterial color="white" />
          </mesh>

          <mesh
            rotation-x={-Math.PI / 2}
            position-y={-0.5}
            receiveShadow
          >
            <planeGeometry args={[5, 5]} />
            <meshStandardMaterial color="white" />
          </mesh>
        </group>
      </Canvas>
    </>
  );
}

export default App;
