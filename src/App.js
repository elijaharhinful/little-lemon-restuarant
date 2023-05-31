import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Main from './Main';
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
