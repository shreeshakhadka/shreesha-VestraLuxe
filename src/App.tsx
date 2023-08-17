
// import Header from './components/Header'
import Footer from './components/Footer';
import Navbar from './components/NavBar';

import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";


const App = () => {
  return (
    <>

    <Navbar/>
    <Footer/>

      <ProductListPage />
      <HomePage />
    </>
  );
}

export default App;
