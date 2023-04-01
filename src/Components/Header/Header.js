import Stack from 'react-bootstrap/Stack';
import './Header.css'
import { Link } from 'react-router-dom';

function Header(props) {
//   let summ = 0
// for (let i = 0; i < props.cart.length; i++) {
// summ += Number(props.cart[i]['cost']) * props.cart[i]['count'];
// }

  return <div className='mainHeader'>

    <Stack direction="horizontal" gap={3}>
      <div className='leftHeader'>
        <Link to="/">
          <img src="./img/logo.png" width={40} height={40} />
        </Link>
        <div className='leftHeaderText'>
          <h1>Ковры</h1>
          <p>Магазин лучших ковров</p>
        </div>
      </div>

      <div className='rightHeader ms-auto'>

        <img src="/img/Group.png" width={20} height={20} onClick={() => props.onOpenCart()} />


        {/* <span>{summ} руб.</span> */}
        <Link to="/profile">
          <img src="/img/Union.svg" width={20} height={20} onClick="ProfileLink" />
        </Link>
        <Link to="/favourite">
          <img src="/img/Favorite.svg" width={20} height={20} />
          </Link>

      </div>
    </Stack>
  </div>

}

export default Header