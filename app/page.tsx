import Navbar from './components/Navbar';
import HeroWrapper from './components/HeroWrapper';

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="home">
        <HeroWrapper />
      </section>
    </main>
  );
}
