import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./containers/Header"
import ProductListing from "./containers/ProductListing"
import ProductDetail from "./containers/ProductDetail"
import Cart from './containers/Cart';
import Signup from './Signup/Signup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element = {<ProductListing />} />
            <Route path="/product/:productId" element = {<ProductDetail />} />
            <Route>404 Not Found!</Route>
            <Route path='/cart' element = {<Cart />}/>
            <Route path='/signup' element = {<Signup />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
