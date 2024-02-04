import technologies from '../demo-data/technologies';
import { BallCanvas } from './canvas/BallCanvas';
export function Tech() {
	return (
		<section className='technologies-container main-layout'>
			<div className=' flex wrap justify-center technologies'>
				{technologies.map((technology) => {
					return (
						<div className='technology flex justify-center' key={technologies.name}>
							<BallCanvas icon={technology.icon} />
						</div>
					);
				})}
			</div>
		</section>
	);
}
