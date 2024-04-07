import { useContext, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import HeaderContext from '../contexts/HeaderContext';

import { ComputerCanvas } from './canvas/Computers';

const Hero = () => {
	const revealHeaderRef = useRef();
	const { setHeaderBackground } = useContext(HeaderContext);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.map((entry) => {
					if (entry.intersectionRatio < 0.9) {
						setHeaderBackground('visible');
					} else {
						setHeaderBackground('transparent');
					}
				});
			},
			{ threshold: [0.9] }
		);

		observer.observe(revealHeaderRef.current);

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<section className='hero-wrapper main-layout' ref={revealHeaderRef}>
			<div className='typewriter'>
				<h1 className='introduction-header'>
					{"Hi, I'm"} <span className='first-name'>Tzvia</span>
				</h1>
			</div>
			<p className='introduction-content'>I Develop FullStack applications that blend functionality with a seamless user experience.</p>
			<div className='computer-wrapper flex justify-center'>
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
		</section>
	);
};

export default Hero;
