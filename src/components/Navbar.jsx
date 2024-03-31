import Hamburger from 'hamburger-react';
import { useContext, useState } from 'react';

import HeaderContext from '../contexts/HeaderContext';

import MainBackDrop from './MainBackDrop';

import logoImg from '../assets/img/logo.png';

export function Navbar() {
	const [isOpen, setOpen] = useState(false);
	const { headerBackground } = useContext(HeaderContext);

	return (
		<section className={`${headerBackground} header-wrapper main-layout full`}>
			<header className='header flex align-center justify-space-between'>
				<div className='flex align-center logo-container'>
					<img src={logoImg} alt='logo' className='logo' />
					<span className='firstname-job'>Tzvia Izhakov</span>
				</div>

				<nav className='list clean-list flex'>
					<li className='list-item'>
						<a href='#about'>About</a>
					</li>
					<li className='list-item'>
						<a href='#work'>Experience</a>
					</li>
					<li className='list-item'>
						<a href='#contact'>Contact</a>
					</li>
				</nav>

				{isOpen && <MainBackDrop isBackDropShown={isOpen} close={() => setOpen(false)} />}
				<div className='hamburger-wrapper hide-element'>
					<Hamburger direction='left' color='white' toggled={isOpen} toggle={setOpen} />
					<nav className='list-for-mobile clean-list flex column' style={isOpen ? { display: 'flex' } : { display: 'none' }}>
						<Hamburger color='white' toggled={isOpen} toggle={setOpen} />
						<li className='list-item' onClick={() => setOpen(false)}>
							<a href='#about'>About</a>
						</li>
						<li className='list-item' onClick={() => setOpen(false)}>
							<a href='#work'>Experience</a>
						</li>
						<li className='list-item' onClick={() => setOpen(false)}>
							<a href='#contact'>Contact</a>
						</li>
					</nav>
				</div>
			</header>
		</section>
	);
}
