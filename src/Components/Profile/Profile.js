// import Stack from 'react-bootstrap/Stack';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Profile.css'

function Profile(props) {

    return <div className='MainProfile'>
    
    <h3>Профиль</h3>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./img/vasya.jpg" />
      <Card.Body>
        <Card.Title>Василий</Card.Title>
        <Card.Text>
Ваша персональная скидка равна 10 рублей 
        </Card.Text>
      </Card.Body>
    </Card>

    
    </div>

}

export default Profile;