import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
function App() {
	return (
		<main className='bg-img'>
			<Navbar />
			<Hero />
			<About />
			<Experience />
		</main>
	);
}

export default App;
