import {
  Environment,
  PresentationControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Lighthouse } from "./components/Lighthouse";
function App() {
  return (
    <>
      <Canvas
        camera={{
          position: [-1.5, 3, 10],
          fov: 42,
        }}
      >
        <PresentationControls
          enabled={true} // the controls can be disabled by setting this to false
          global={false} // Spin globally or by dragging the model
          cursor={true} // Whether to toggle cursor style on drag
          snap={true} // Snap-back to center (can also be a spring config)
          speed={1} // Speed factor
          zoom={1} // Zoom factor when half the polar-max is reached
          rotation={[0, 0, 0]} // Default rotation
          polar={[0, Math.PI / 2]} // Vertical limits
          azimuth={[-Infinity, Infinity]} // Horizontal limits
          config={{
            mass: 1,
            tension: 170,
            friction: 26,
          }} // Spring config
        >
          <Lighthouse
            position-y={-1}
            scale={[0.2, 0.2, 0.2]}
          />
        </PresentationControls>
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
}

export default App;
