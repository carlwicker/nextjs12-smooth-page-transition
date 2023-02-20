export default function Light(props: any) {
  return (
    <mesh {...props} rotation={[1, 1, 0]}>
      <sphereBufferGeometry args={[0.1, 120, 128]} />
      <meshStandardMaterial wireframe />
    </mesh>
  );
}
