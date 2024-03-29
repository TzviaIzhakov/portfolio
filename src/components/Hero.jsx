import { ComputerCanvas } from './canvas/Computers';
import { motion } from 'framer-motion';

export function Hero() {
	return (
		<section className='hero-wrapper'>
			<div className='main-layout'>
				<div className='typewriter'>
					<h1 className='introduction-header'>
						{"Hi, I'm"} <span className='first-name'>Tzvia</span>
					</h1>
				</div>

				<p className='introduction-content'>I Develop FullStack applications that blend functionality with a seamless user experience.</p>

				<div style={{ width: '100%', margin: '0 auto', height: '400px', position: 'relative' }} className='computer-wrapper'>
					<ComputerCanvas />
					<a href='#about'>
						<div className='scroll-down-wrapper'>
							<motion.div
								animate={{
									y: [0, 24, 0],
								}}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									repeatType: 'loop',
								}}
								className='rounded-dot'
							/>
						</div>
					</a>
				</div>
			</div>
		</section>
	);
}
