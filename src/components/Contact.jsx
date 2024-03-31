import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import { slideIn } from '../utils/motion';

import { EarthCanvas } from './canvas/Earth';

const Contact = () => {
	const formRef = useRef();

	const [loading, setLoading] = useState(false);
	const [filterBy, setFilterBy] = useState({ fullName: '', email: '', msg: '' });

	function handleChange({ target }) {
		const field = target.name;
		const value = target.value;
		setFilterBy((prevFilter) => ({ ...prevFilter, [field]: value }));
	}

	async function onSubmit(e) {
		e.preventDefault();
		setLoading(true);

		try {
			await emailjs.send(
				process.env.SERVICE_ID,
				process.env.TEMPLATE_ID,
				{
					from_name: filterBy.name,
					to_name: 'Tzvia Izhakov',
					from_email: filterBy.email,
					to_email: 'tzvia.izhakov@gmail.com',
					message: filterBy.msg,
				},
				process.env.PUBLIC_KEY
			);

			setLoading(false);
			alert('Thank you. I will get back to you as soon as possible.');

			setFilterBy({
				fullName: '',
				email: '',
				msg: '',
			});
		} catch (error) {
			setLoading(false);
			console.error(error);

			alert('Ahh, something went wrong. Please try again.');
		}
	}

	return (
		<section className='contact-container main-layout' id='contact'>
			<motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='earth-container'>
				<EarthCanvas />
			</motion.div>

			<motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='contact-form-container flex column'>
				<span className='contact-title-main'>Get in touch</span>
				<h1 className='contact-sub-tile'>Contact.</h1>

				<form onSubmit={onSubmit} ref={formRef} className='contact-form flex column'>
					<label htmlFor='fullName'>Your Name</label>
					<input type='text' placeholder='Please enter your full name' name='fullName' value={filterBy.fullName} onChange={handleChange} />

					<label htmlFor='email'>Your Email</label>
					<input type='email' placeholder='Please enter your full email' name='email' value={filterBy.email} onChange={handleChange} />

					<label htmlFor='msg'>Your Message</label>
					<textarea rows={7} placeholder='What do you what to say' name='msg' value={filterBy.msg} onChange={handleChange} />

					<button className='btn-submit'> {loading ? 'Sending...' : 'Send'}</button>
				</form>
			</motion.div>
		</section>
	);
};

export default Contact;
