import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

import gitHubImg from '../assets/img/github.png';

export function ProjectCard(props) {
	// eslint-disable-next-line react/prop-types
	const { index, name, description, tags, image, source_code_link } = props;

	return (
		<motion.div className='project-card-container' variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
			<Tilt options={{ scale: 1 }}>
				<div className='project-card flex column'>
					<div className='project-img-container'>
						<a href={source_code_link} target='_blank' rel='noreferrer'>
							<img src={gitHubImg} alt='github-img' className='github' />
						</a>
						<img src={image} alt='project-image' className='project-img' />
					</div>
					<h3 className='project-name'>{name}</h3>
					<p className='project-description'>{description}</p>
					<div className='tags-container flex'>
						{tags.map((tag) => (
							<p key={`${name}-${tag.name}`} className={`tag-${tag.color}`}>
								#{tag.name}
							</p>
						))}
					</div>
				</div>
			</Tilt>
		</motion.div>
	);
}
