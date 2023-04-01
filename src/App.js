
// import { Button, Card } from 'react-bootstrap';
import { useState } from 'react';
import Cart from './Components/Main/Card/Cart';
import Header from './Components/Header/Header';
import './App.css'
import Slider from './Components/Main/Slider';
import AllCard from './Components/Main/Card/AllCard';
import{Routes, Route} from 'react-router-dom'
import Profile from './Components/Profile/Profile';
import Favourite from './Components/Favourite/Favourite';


function App() {

  const [openCart, SetOpenCart] = useState(true);
  const [cart, setCart] = useState([
    // {id: 1, name: "Кргулый ковёр напольный “Кругляш” " , cost: "1.500 рублей" , img: "img/imgCard1.png"},
    // {id: 2, name: "Летающий ковер “Магич", cost: "142.000 рублей" , img: "img/imgCard4.png"},
  ]);

  function addProdToCart(newProd) {
    setCart(prev => [...prev, newProd]);
}
function AddProdToCartF(newProdF) {
  setCart(prev => [...prev, newProdF])
}
function addProdToCart(newProd) {

  let alreadyAdded = false

  for (let i = 0; i < cart.length; i++) {
      if (cart[i]['id'] == newProd.id) {
          alreadyAdded = true
      }

  }

  if (!alreadyAdded) {

      setCart(prev => [...prev, newProd])

  }
  else {
      setCart(cart.filter(p => p.id !== newProd.id));
  }
}
  return <div>
    <Cart openCart={openCart} onOpenCart = {()=>SetOpenCart(false)} cart={cart}/>
    <Header onOpenCart = {() => SetOpenCart(true)} />
    <Routes>
        <Route path='/' element={<><Slider /><AllCard addProdToCart={(NEWPROD) => addProdToCart(NEWPROD)}/></>}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/favourite' element={<Favourite AddProdToCart={(NEWPRODF) => AddProdToCartF(NEWPRODF)}/>}/>
    </Routes>

  </div>
  }





export default App
