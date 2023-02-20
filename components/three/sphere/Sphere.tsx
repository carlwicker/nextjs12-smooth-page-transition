export default function Light(props: any) {
  return (
    <mesh {...props} rotation={[0, 0, 1]}>
      <sphereGeometry args={[0.1, 120, 128]} />
      <meshStandardMaterial wireframe color="red" />
    </mesh>
  );
}
