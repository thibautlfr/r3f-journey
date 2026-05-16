import {useFBX, useGLTF} from "@react-three/drei";
import {Fish} from "./Fish.jsx";

export const Experience = () => {
  const {scene} = useGLTF("models/Fish.gltf");
  const dino = useFBX("models/Dino.fbx");
  return (
    <>
      <ambientLight intensity={1}/>
      {/*<primitive object={scene}/>*/}
      {/*<Gltf src="models/Fish.gltf"/>*/}
      <Fish/>
      <primitive object={dino} scale={0.01} position-x={-3}/>
    </>
  );
};
