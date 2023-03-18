import './Cart.css'
import { useState } from 'react';
import { Stack } from 'react-bootstrap';
import BasketCard from './BasketCard.js';
function Cart(props) {

    const [basket, setBasket] = useState(false);
 
 
    
    let cards = props.cart.map(carpet => {
        return <BasketCard name = {carpet.name} cost={carpet.cost} img={carpet.img}/>
    })

    let styleOverflow = {}
    let styleSideBlock = {}

    if (props.openCart === true) {
        styleOverflow = { width: '100%' };
        styleSideBlock = { width: '385px' };
    }
    else {
        styleOverflow = { width: '0' };
        styleSideBlock = { width: '0' };
    }
    let content = basket ?<>< img src='./img/ButtonBuy2.png' style={{ width: '320px', height: '320px'}} /></> :  
<div className="BasketCards">
{cards}
</div>
    return <>
        <div className='Overflow' style={styleOverflow} onClick={() => props.onOpenCart(false)}></div>
        <div className='container'>
        <div className='SideBlock' style={styleSideBlock}>
        <Stack direction="horizontal" gap={3} id='topCard'>
            <div className="element"><h3>Корзина</h3></div>
            <div className="element ms-auto" ><img src='img/CloseButton.svg' alt="CloseButton" onClick={() => props.onOpenCart(false)} /></div>
        </Stack> 
        {content}
<div className='MainEnd'>
<p>Итого:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ184.600 р</p>
<p>Налог:30%ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ42.600 р</p>
<img src='./img/ButtonBuy.png' onClick={()=>setBasket(!basket)} id="Imagef" style={{ width: '320px', height: '55px'}} />

</div>

        </div> 
        </div>

        
        </>
}
export default Cart;
