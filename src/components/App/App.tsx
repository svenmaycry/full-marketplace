import '../../scss/app.scss';
import Categories from '../Categories/Categories';
import Header from '../Header/Header';
import Sort from '../Sort/Sort';
import PizzaBlock, { PizzaProps } from '../PizzaBlock/PizzaBlock';
import Skeleton from '../PizzaBlock/Skeleton';
import { useEffect, useState } from 'react';

function App() {
  const [collections, setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://6512cd7db8c6ce52b39641b2.mockapi.io/pizzas`)
      .then((res) => res.json())
      .then((arr) => {
        setCollections(arr);
      })
      .catch((err) => {
        console.warn(err);
        alert('Ошибка при получении данных');
      })
      .finally(() => setIsLoading(false));
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
            {isLoading
              ? [...new Array(6)].map((_, idx) => <Skeleton key={idx} />)
              : collections.map((item: PizzaProps) => (
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
