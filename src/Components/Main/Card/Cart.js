import './Cart.css'
import { useState } from 'react';
import { Stack } from 'react-bootstrap';
import BasketCard from './BasketCard.js';
function Cart(props) {

    const [basket, setBasket] = useState(false);
 
 
    
    let cards = props.cart.map(carpet => {
        return <BasketCard name = {carpet.name} cost={carpet.cost} img={carpet.img}/>
    })
    let summ = 0
    for (let i = 0; i < props.cart.length; i++) {
    summ += Number(props.cart[i]['cost']) * props.cart[i]['count'];
    }
    let styleOverflow = {}
    let styleSideBlock = {}

    if (props.openCart === true) {
        styleOverflow = { width: '100%' };
        styleSideBlock = { width: '385px' };
    }
    else{
        styleOverflow = { width: '0' };
        styleSideBlock = { width: '0' };
        summ= 0
    }
    if (summ===0) {
        cards=<div style={{ height: '68vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                  <h3 style={{ color: '#87C20A' }}>Корзина пустая</h3>
                  <h5 style={{ color: '#999999' }}>Добавьте хотя бы один товар, чтобы сделать заказ.</h5>
              </div>
    }
    let content = basket ?<><div style={{ height: '68vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
    <h3 style={{ color: '#87C20A' }}>Заказ оформлен</h3>
    <h5 style={{ color: '#999999' }}>Ваш заказ #18 скоро будет передан курьерской доставке</h5>
</div></> : <div className="BasketCards"> {cards} </div>
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
<p>Итого:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ{summ} р</p> 
<p>Налог:30%ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ{summ*0.30}р</p>
{basket ? <img src='./img/ButtonBuy.png' onClick={()=>setBasket(!basket)} id="Imagef" style={{ width: '320px', height: '55px'}} /> : <img src='./img/back.png' onClick={()=>setBasket(!basket)} id="Imagef" style={{ width: '320px', height: '55px'}} />}

</div>

        </div> 
        </div>

        
        </>
}
export default Cart;
