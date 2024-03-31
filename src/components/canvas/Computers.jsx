/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import { Loader } from '../Loader';

function Computers() {
	const computer = useGLTF('../../../public/desktop_pc/scene.gltf');

	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor='black' />
			<spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
			<pointLight intensity={1} />
			<primitive object={computer.scene} scale={1.5} position={[0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]} />
		</mesh>
	);
}

export function ComputerCanvas() {
	return (
		<Suspense fallback={<Loader />}>
			<Canvas
				style={{ width: '100%', height: '100%' }}
				frameloop='demand'
				shadows
				dpr={[1, 2]}
				camera={{ position: [20, 3, 5], fov: 25 }}
				gl={{ preserveDrawingBuffer: true }}
			>
				<OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
				<Computers />
			</Canvas>
		</Suspense>
	);
}
