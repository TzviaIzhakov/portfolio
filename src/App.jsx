import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Tech } from './components/Tech';
function App() {
	return (
		<main className='bg-img'>
			<Navbar />
			<Hero />
			<About />
			<Experience />
			<Tech />
		</main>
	);
}

export default App;
