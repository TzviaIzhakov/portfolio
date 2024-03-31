/* eslint-disable react/prop-types */
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import experiences from '../demo-data/experience';

function ExperienceCard({ experience }) {
	return (
		<section className='timeline-container'>
			<VerticalTimelineElement
				contentStyle={{
					background: '#1d1836',
					color: '#fff',
				}}
				contentArrowStyle={{ borderRight: '7px solid  #232631' }}
				date={experience?.date}
				iconStyle={{ background: experience?.iconBg }}
				icon={
					<div>
						<img className='experience-icon' src={experience?.icon} alt={experience?.companyName} />
					</div>
				}
			>
				<div className='experience-details'>
					<h3 className='experience-title'>{experience?.title}</h3>
					<p className='experience-company-name'>{experience?.companyName}</p>
					<ul className='experience-points'>
						{experience?.points?.map((p, index) => (
							<li key={`experience-point-${index}`} className='experience-point'>
								{p}
							</li>
						))}
					</ul>
				</div>
			</VerticalTimelineElement>
		</section>
	);
}

const Experience = () => {
	return (
		<section className='experience-container main-layout' id='work'>
			<div className='flex column align-center'>
				<span className='experience-title-main'>Work Experience</span>
				<h1 className='experience-sub-tile'>Experience & Education.</h1>
			</div>
			<div className='experience-time-line'>
				<VerticalTimeline>
					{experiences.map((experience) => (
						<ExperienceCard experience={experience} key={experience._id} />
					))}
				</VerticalTimeline>
			</div>
		</section>
	);
};

export default Experience;
