export const MoveableSphere = (props) => {
  return (
    <mesh {...props}>
      <sphereGeometry args={[0.5, 64, 64]} />
      <meshStandardMaterial color={"white"} />
    </mesh>
  );
};
