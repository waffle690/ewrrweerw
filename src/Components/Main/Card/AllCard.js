import Stack from 'react-bootstrap/Stack';
import Card from './Card.js';
import './AllCard.css'

function AllCards(props) {

let carpets = [
    {id: 1, name: "Кргулый ковёр напольный “Кругляш” " , cost: "1.500 рублей" , img: "img/imgCard1.png"},
    {id: 2, name: "Квадратный ковёр напольный “Квадратыш” " , cost: "684 рубля" , img: "img/imgCard2.png"},
    {id: 3, name: "Ковер 2 в 1 “Эксклюзивыч” " , cost: "70.000 рублей" , img: "img/imgCard3.png"},
    {id: 4, name: "Летающий ковер “Магич", cost: "142.000 рублей" , img: "img/imgCard4.png"}
]

let cards = carpets.map(carpet => {
    return <Card name = {carpet.name} cost={carpet.cost} img={carpet.img} addProdToCart={(NEWPROD) => props.addProdToCart(NEWPROD)}/>
})

    return (
        <div className="MainContent">
        <Stack direction="horizontal" gap={3}>
            <h1>Все кoры</h1>
            <span>Всего ковров: {carpets[3].id}</span>
            <input className="ms-auto" />
        </Stack>

        <div className="Cards">
      {cards}
      </div>
</div>
    );
}
export default AllCards;