import '../src/index.css';
// Components
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'


function App() {
  return (
    <>
      <Hero />
      <Content />
      <Features />
      <Footer />
      <Sidebar />
    </>
  );
}

export default App
