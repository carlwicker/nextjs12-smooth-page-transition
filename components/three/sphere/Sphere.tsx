export default function Light(props: any) {
  return (
    <mesh {...props} rotation={[0, 0, 90]}>
      <sphereGeometry args={[0.1, 80, 80]} />
      <meshStandardMaterial wireframe color="red" />
    </mesh>
  );
}
