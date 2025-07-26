import { Canvas } from "@react-three/fiber";

const Box = () => {
  return (
    <mesh>
      <boxGeometry />
      <meshBasicMaterial
        color="white"
        transparent
        opacity={0}
      />
    </mesh>
  );
};

function App() {
  return (
    <>
      <Canvas camera={{ position: [3, 3, 3] }}>
        <Box />
      </Canvas>
    </>
  );
}

export default App;
