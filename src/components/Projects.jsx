import projects from '../demo-data/projects';

import { ProjectCard } from './ProjectCard';

export function Projects() {
	return (
		<section className='project-container main-layout'>
			<div className='flex column'>
				<span className='project-title-main'>My Work</span>
				<h1 className='project-sub-tile'>Projects.</h1>
			</div>
			<div>
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</section>
	);
}
