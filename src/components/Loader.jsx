import { Html, useProgress } from '@react-three/drei';

export function Loader() {
	const { progress } = useProgress();
	return (
		<span className='canvas-loader-container'>
			<p className='canvas-loader'>{progress.toFixed(2)}%</p>
		</span>
	);
}
