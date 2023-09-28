import { useEffect, useState } from 'react';
import { Categories } from '../components/Categories/Categories';
import { Sort } from '../components/Sort/Sort';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import { PizzaBlock, PizzaProps } from '../components/PizzaBlock/PizzaBlock';

export const Home = () => {
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
    <>
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
    </>
  );
};
