import { React, Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../loader'

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black"/>
      <primitive object={computer.scene} scale={0.7} position={[0, -6, -1]}/>
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas frameloop="demand" shadows camera={{position: [20, 3, 5], fov: 25}} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} /> {/* only rotate horizontally */}
        <Computers/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas