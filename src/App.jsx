import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Tech } from './components/Tech';
import { Projects } from './components/Projects';

function App() {
	return (
		<main className='bg-img'>
			<Navbar />
			<Hero />
			<About />
			<Experience />
			<Tech />
			<Projects />
		</main>
	);
}

export default App;
