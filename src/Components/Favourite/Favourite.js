// import Card from './Favourite/Main/Card/Card';
import Stack from 'react-bootstrap/Stack';
import './Favourite.css'
import {Row, Col} from 'react-bootstrap'


function Favourite(props) {

//     let summ = 0
// for (let i = 0; i < props.cart.length; i++) {
// summ += Number(props.cart[i]['cost']) * props.cart[i]['count'];
// }
//     let cards = props.cart.map((props) => {
//         return <Card name={props.name} cont={props.cont} img={props.img} />})
//     if (summ===0) {
//         cards=<div style={{ height: '68vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
//                   <h3 style={{ color: '#87C20A' }}>Корзина пустая</h3>
//                   <h5 style={{ color: '#999999' }}>Добавьте хотя бы один товар, чтобы сделать заказ.</h5>
//               </div>
//     }
    return  <div style={{maxWidth: "1080px", margin: "0 auto 0 auto", backgroundColor: "white", borderBottom: "1px solid #EAEAEA", padding: "45px 45px"}}>
    <Stack direction="horizontal" gap={3}>
        <h1>Избранные</h1>
    </Stack>
    <Row className='g-4'>
        {/* <Col style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
          {cards}
        </Col> */}
    </Row>
  </div>

}

export default Favourite;