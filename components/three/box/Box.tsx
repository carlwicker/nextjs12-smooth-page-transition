export default function Box(props: any) {
  return (
    <mesh {...props} recieveShadow={true} castShadow={true}>
      <boxBufferGeometry args={[9, 9, 9, 16, 16]} />
      <meshStandardMaterial color={"white"} wireframe={true} fog={true} />
    </mesh>
  );
}
