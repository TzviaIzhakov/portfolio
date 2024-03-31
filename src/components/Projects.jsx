import projects from '../demo-data/projects';

import { ProjectCard } from './ProjectCard';

export function Projects() {
	return (
		<section className='project-container main-layout'>
			<span className='project-title-main'>My Work</span>
			<h1 className='project-sub-tile'>Projects.</h1>
			{projects.map((project, index) => (
				<ProjectCard key={`project-${index}`} index={index} {...project} />
			))}
		</section>
	);
}
