import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Category from './components/Category';
import Banner from './components/Banner';
import BannerTwo from './components/BannerTwo';
import Products from './components/Products';
import { News } from './components/News';
import Brand from './components/Brand';
import Footer from './components/Footer';
import { Copyright } from './components/Copyright';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Category/>
      <Banner/>
      <Products/>
      <BannerTwo/>
      <News/>
      <Brand/>
      <Footer/>
      <Copyright/>
    </div>
  );
}

export default App;
