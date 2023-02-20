import { Canvas } from "@react-three/fiber";
import Sphere from "@/components/three/sphere/Sphere";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

export default function SphereCanvas() {
  return (
    <Canvas
      className=" bg-black overflow-hidden absolute"
      style={{ margin: 0, padding: 0, background: "transparent" }}
    >
      <ambientLight color={"white"} intensity={0.025} />

      <PerspectiveCamera
        makeDefault
        position={[800, 0.9, 1.8]}
        fov={50}
        zoom={100.9}
      />
      <OrbitControls
        // minZoom={2}
        // maxAzimuthAngle={20}
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={1}
      />

      <Sphere position={[0, 0, 0]} scale={[50, 50, 50]} />
      {/* <Box rotateX={2} rotateY={0.2} /> */}
    </Canvas>
  );
}
