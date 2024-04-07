import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Loader } from '../Loader';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

function Earth() {
	const earth = useGLTF('./planet/scene.gltf');

	return <primitive object={earth.scene} scale={2} position-y={0} rotation-y={0} />;
}

export function EarthCanvas() {
	return (
		<Suspense fallback={<Loader />}>
			<Canvas
				shadows
				frameloop='demand'
				dpr={[1, 2]}
				gl={{ preserveDrawingBuffer: true }}
				camera={{
					fov: 45,
					near: 0.1,
					far: 200,
					position: [-4, 3, 6],
				}}
				style={{ width: '98%', height: '100%' }}
			>
				<OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
				<Earth />

				<Preload all />
			</Canvas>
		</Suspense>
	);
}
