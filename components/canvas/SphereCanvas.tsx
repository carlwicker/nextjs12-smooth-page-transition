import { Canvas } from "@react-three/fiber";
import Sphere from "@/components/three/sphere/Sphere";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

export default function SphereCanvas() {
  return (
    <Canvas
      className=" bg-black overflow-hidden absolute"
      style={{ margin: 0, padding: 0, background: "transparent" }}
      shadows={true}
    >
      <ambientLight color={"white"} intensity={0.033} />

      <PerspectiveCamera
        makeDefault
        position={[800, 0.9, 1.8]}
        fov={60}
        zoom={100.9}
      />
      <OrbitControls
        // minZoom={2}
        // maxAzimuthAngle={20}
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate={true}
      />

      <Sphere position={[0, 0, 0]} scale={[30, 30, 30]} />
      {/* <Box rotateX={2} rotateY={0.2} /> */}
    </Canvas>
  );
}
