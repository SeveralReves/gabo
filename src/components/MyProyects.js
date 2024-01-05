import React, {useState} from "react";
import Image1 from "../assets/Proyect-1.png";
import Image2 from "../assets/Proyect-2.png";
import Image3 from "../assets/Proyect-6.png";
import Image4 from "../assets/Proyect-4.png";
import Image5 from "../assets/Proyect-5.png";
import CardFlip from "./CardFlip"
import "../styles/_proyects.scss"

const MyProyects = ({}) => {
    const [cards, setCards] = useState([
        {
            title: 'Vida 2019',
            image: Image1,
            color: '#ff62b2',
            link: '',
        },
        {
            title: 'Vive UDD',
            color: '#279eb2',
            image: Image2,
            link: '',
        },
        {
            title: 'Ecoterra',
            color: '#00b97d',
            image: Image3,
            link: '',
        },
        {
            title: 'La Pizka',
            color: '#f86647',
            image: Image4,
            link: '',
        },
        {
            title: 'MUT',
            color: '#ff62b2',
            image: Image5,
            link: '',
        },
    ])
  return <div className="proyects">
   <div className="container">
    <h2 className="title">Mis Proyectos</h2>
    <div className="proyects__container">
        {cards.map((item,index) => (
            <CardFlip key={index} image={item.image} title={item.title} link={item.link} color={item.color} />
        ))}
    </div>
  </div>
  </div>;
};

export default MyProyects;
