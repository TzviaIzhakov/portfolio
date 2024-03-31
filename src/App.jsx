import { BrowserRouter as Router } from 'react-router-dom';

import useHeader from './custom-hooks/useHeader';
import HeaderContext from './contexts/HeaderContext';

import Hero from './components/Hero';
import About from './components/About';
import { Tech } from './components/Tech';
import Contact from './components/Contact';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import Experience from './components/Experience';

function App() {
	const headerBackground = useHeader();

	return (
		<Router>
			<main className='app'>
				<HeaderContext.Provider value={headerBackground}>
					<Navbar />
					<Hero />
				</HeaderContext.Provider>
				<About />
				<Experience />
				<Tech />
				<Contact />
				<Projects />
			</main>
		</Router>
	);
}

export default App;
