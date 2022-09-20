import Content from './components/Content/Content';
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Hero />
      <main className='main' style={{marginTop: '100px'}}>
        <Content />
      </main>
      <Footer />
    </>
  );
}

export default App;
