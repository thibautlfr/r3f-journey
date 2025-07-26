import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { button, useControls } from "leva";
import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const Cube = memo((props) => {
  console.log("Cube rendered");

  // Avoid useState as possible because it will cause the component to re-render
  const [color, setColor] = useState("white");

  const material = useMemo(
    () => <meshStandardMaterial color={color} />,
    [color]
  );

  // Use useRef to keep a reference to the mesh, very useful for Three.js operations
  // like rotation without causing re-renders
  const cubeMesh = useRef();

  useEffect(() => {
    const colorsPosition = {
      white: [0, 0, 0],
      red: [-1, 0, 0],
      green: [1, 0, 0],
      blue: [0, 1, 0],
    };
    const position = colorsPosition[color];
    cubeMesh.current.position.set(...position);

    const interval = setInterval(() => {
      cubeMesh.current.rotation.y += Math.PI / 4;
    }, 1000);

    // Cleanup the interval on component unmount
    // example : when the color changes
    return () => {
      clearInterval(interval);
    };
  }, [color]);

  useControls({
    changeColorToRed: button(() =>
      setColor("red")
    ),
    changeColorToGreen: button(() =>
      setColor("green")
    ),
    changeColorToBlue: button(() =>
      setColor("blue")
    ),
    rotateCube: button(
      () =>
        (cubeMesh.current.rotation.y +=
          Math.PI / 4)
    ),
  });

  return (
    <mesh {...props} ref={cubeMesh}>
      <boxGeometry />
      {material}
    </mesh>
  );
});

function App() {
  const [count, setCount] = useState(0);

  // useCallback to memoize the function and avoid unnecessary re-renders
  const onCubeClicked = useCallback(() => {
    console.log(
      `Cube clicked ${count + 1} times`
    );
    setCount((prev) => prev + 1);
  }, [count]);

  return (
    <>
      <Canvas
        camera={{ position: [0, 2, 6], fov: 42 }}
      >
        <OrbitControls />
        <Cube
          onClick={onCubeClicked}
          rotation-y={Math.PI / 4}
        />
        <ContactShadows
          position-y={-2}
          opacity={0.5}
          blur={2}
          color={"pink"}
          scale={10}
        />
        <Environment preset="city" />
      </Canvas>
    </>
  );
}

export default App;
