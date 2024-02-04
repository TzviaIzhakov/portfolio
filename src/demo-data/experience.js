import dailyEnglishLogo from '../assets/img/company/apple-touch-icon.png';
import idfLogo from '../assets/img/company/idf.svg';
import codingAcademyLogo from '../assets/img/company/coding-academy.png';

const experiences = [
	{
		_id: 'e101',
		title: 'Freelancer Frontend',
		companyName: 'Daily English',
		icon: dailyEnglishLogo,
		iconBg: '#383E56',
		date: 'Nov 2023 - PRESENT',
		points: [
			'Daily English is a crafted application aimed at enhancing English proficiency, featuring a blend of English podcasts and language assignments',
			'Addressing and fixing UI and functionality bugs within the application',
			'Incorporating new functionalities to elevate user interaction and platform capabilities',
			'Working with Restful APIs, TypeScript and React',
		],
	},
	{
		_id: 'e102',
		title: 'Network Monitor',
		companyName: 'IDF',
		icon: idfLogo,
		iconBg: '#383E56',
		date: 'Nov 2023 - PRESENT',
		points: [
			'Timely handling and investigating network faults in critical systems',
			'Managed coordination between organizations and senior officials under high-pressure situations, ensuring the safety of human life that depended on these systems within strict time constraints',
			'Successfully owned the monitoring and problem resolution of multi-tier complex mission-critical networks with 24/7 availability',
			'Monitoring of network and transmission communication components, spanning across more than x100’s locations across the country, while collaborating with multiple stakeholders',
			'Recorded system issues and documented all the steps taken by the technician team to resolve the problems, while also reporting the progress to senior commanders',
			'Updated internship training guidelines - reduction of training time by 15%',
			'Familiar with transforming technologies: SDH, data technologies : LAN, WAN, satellite communications and cellular antennas',
		],
	},
	{
		_id: 'e103',
		title: 'Student',
		companyName: 'Coding Academy',
		icon: codingAcademyLogo,
		iconBg: '#383E56',
		date: 'Nov 2023 - PRESENT',
		points: [
			'Completed intense 640-hour bootcamp, inspired by the Mamram unit of the IDF, with a focus on the MERN stack',
			'Specialized in the following technologies: HTML, SASS, JS, Angular, React, Vue, AJAX, Redux, Restful APIs, Node.js, Express.js, MongoDB, MySQL',
			'Developed a strong familiarity with Postman, a vital tool for API testing and automation including test case creation and API response monitoring',
		],
	},
];

export default experiences;
