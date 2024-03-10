import logoImg from '../assets/img/logo.png';

export function Navbar() {
	return (
		<section className='header-wrapper main-layout full '>
			<header className='header flex align-center justify-space-between'>
				<div className='flex align-center logo-container'>
					<img src={logoImg} alt='logo' className='logo' />
					<span className='firstname-job'>Tzvia Izhakov | FullStack Developer</span>
				</div>
				<nav className='list clean-list flex'>
					<li className='list-item'>
						<a href='#about'>About</a>
					</li>
					<li className='list-item'>
						<a href='#projects'>Projects</a>
					</li>
					<li className='list-item'>
						<a href='#contact'>Contact</a>
					</li>
				</nav>
			</header>
		</section>
	);
}
