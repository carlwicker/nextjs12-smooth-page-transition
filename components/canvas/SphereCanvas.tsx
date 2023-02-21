import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Sphere from "@/components/three/sphere/Sphere";

export default function SphereCanvas() {
  return (
    <Canvas
      className=" bg-black overflow-hidden absolute"
      style={{ margin: 0, padding: 0, background: "transparent" }}
    >
      <ambientLight color={"white"} intensity={0.1} />

      <PerspectiveCamera
        makeDefault
        position={[800, 0, 0]}
        fov={50}
        zoom={180}
      />
      <OrbitControls
        // minZoom={2}
        // maxAzimuthAngle={20}
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={1.75}
      />

      <Sphere position={[0, 0, 0]} scale={[40, 40, 40]} />
      {/* <Box rotateX={2} rotateY={0.2} /> */}
    </Canvas>
  );
}
