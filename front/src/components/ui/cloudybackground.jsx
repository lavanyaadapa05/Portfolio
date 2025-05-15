import { Canvas } from '@react-three/fiber'
import { Cloud, OrbitControls } from '@react-three/drei'

export default function CloudsBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
      <ambientLight intensity={1.2} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.2} />

      {/* Stack a few clouds with variation */}
       <Cloud opacity={0.8} speed={0.4} width={20} depth={2} segments={40} color="#fff" position={[0, 0, 0]} />
      <Cloud opacity={0.6} speed={0.35} width={25} depth={1.5} segments={30} color="#fff" position={[-5, 2, -2]} />
      <Cloud opacity={0.7} speed={0.45} width={18} depth={1.2} segments={35} color="#fff" position={[-8, -2, -1]} />
      <Cloud opacity={0.5} speed={0.5} width={30} depth={2.5} segments={25} color="#fff" position={[-10, -4, -1]} />
      <Cloud opacity={0.4} speed={0.3} width={22} depth={1.5} segments={40} color="#fff" position={[7, -1, -2]} />
      <Cloud opacity={0.5} speed={0.2} width={15} depth={1.8} segments={30} color="#fff" position={[5, 2, -1]} />
      <Cloud opacity={0.5} speed={0.2} width={15} depth={1.8} segments={30} color="#fff" position={[9, 3, -1]} />
    </Canvas>

  )
}
