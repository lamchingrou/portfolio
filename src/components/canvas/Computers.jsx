import { React, Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../loader'
import { useMediaQuery } from 'react-responsive';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });
  const scale = isSmallScreen ? 0.4 : 0.7;
  const position = isSmallScreen ? [0, -0.5, -0.5] : [0, -5.5, -1];

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black"/>
      <primitive object={computer.scene} scale={scale} position={position}/>
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