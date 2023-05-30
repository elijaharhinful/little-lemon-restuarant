import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Main />
      {/* Main content of the app */}
      <Footer />
    </div>
  );
}

export default App;
