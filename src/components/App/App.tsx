import '../../scss/app.scss';
import Categories from '../Categories/Categories';
import Header from '../Header/Header';
import Sort from '../Sort/Sort';
import PizzaBlock, { Pizza } from '../PizzaBlock/PizzaBlock';
// import pizzas from '../../assets/pizzas.json';
import { useEffect, useState } from 'react';

function App() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch(`https://6512cd7db8c6ce52b39641b2.mockapi.io/pizzas`)
      .then((res) => res.json())
      .then((json) => {
        setCollections(json);
      })
      .catch((err) => {
        console.warn(err);
        alert('Ошибка при получении данных');
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {collections.map((item: Pizza) => (
              <PizzaBlock
                price={item.price}
                title={item.title}
                imageUrl={item.imageUrl}
                sizes={item.sizes}
                types={item.types}
                key={item.id}
                id={item.id}
                category={item.category}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
