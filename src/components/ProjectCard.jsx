import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

import gitHubImg from '../assets/img/github.png';

export function ProjectCard(props) {
	// eslint-disable-next-line react/prop-types
	const { index, name, description, tags, image, sourceCodeLink, application } = props;

	return (
		<motion.div className='project-card-container' variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
			<div className='project-card flex column'>
				<div className='project-img-container'>
					<a href={sourceCodeLink} target='_blank' rel='noreferrer'>
						<img src={gitHubImg} alt='github-img' className='github' />
					</a>

					<a href={application} target='_blank' rel='noreferrer'>
						<img src={image} alt='project-image' className='project-img' />
					</a>
				</div>
				<h3 className='project-name'>{name}</h3>
				<p className='project-description'>{description}</p>
				<div className='tags-container flex'>
					{tags?.map((tag) => (
						<p key={`${name}-${tag.name}`} className={`tag-${tag.color}`}>
							#{tag.name}
						</p>
					))}
				</div>
			</div>
		</motion.div>
	);
}
