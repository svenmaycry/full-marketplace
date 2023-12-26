import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const FullFlower = () => {
  const [flower, setFlower] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchFlower() {
      try {
        const { data } = await axios.get(
          'https://6512cd7db8c6ce52b39641b2.mockapi.io/flowers/' + id
        );
        setFlower(data);
      } catch (error) {
        alert('Ошибка при получении данных');
        navigate('/');
      }
    }
    fetchFlower();
  }, []);

  if (!flower) {
    return <div className="container">Загрузка...</div>;
  }

  return (
    <div className="container">
      <img className="flower-block__image" src={flower.imageUrl} alt="" />
      <h2>{flower.title}</h2>
      <div>{flower.desc}</div>
      <h4>Цена: {flower.price} ₽</h4>
      <Link to={'/'}>
        <div>
          <button className="button">На главную</button>
        </div>
      </Link>
    </div>
  );
};
