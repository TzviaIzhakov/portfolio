import { BallCanvas } from './canvas/BallCanvas';

import technologies from '../demo-data/technologies';

export function Tech() {
	return (
		<section className='technologies-container main-layout'>
			<div className=' flex wrap justify-center technologies'>
				{technologies.map((technology) => (
					<div className='technology flex justify-center' key={technologies.name}>
						<BallCanvas icon={technology.icon} />
					</div>
				))}
			</div>
		</section>
	);
}
