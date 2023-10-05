import { useEffect, useState } from 'react';
import { Categories } from '../../components/Categories/Categories';
import { Sort } from '../../components/Sort/Sort';
import { Skeleton } from '../../components/FlowerBlock/Skeleton';
import {
  FlowerBlock,
  FlowerProps,
} from '../../components/FlowerBlock/FlowerBlock';

export const Home = () => {
  const [collections, setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'высокий рейтинг',
    sortProperty: 'rating',
  });

  useEffect(() => {
    setIsLoading(true);

    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    fetch(
      `https://6512cd7db8c6ce52b39641b2.mockapi.io/flowers?${category}&sortBy=${sortBy}&order=${order}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setCollections(arr);
      })
      .catch((err) => {
        console.warn(err);
        alert('Ошибка при получении данных');
      })
      .finally(() => setIsLoading(false));
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          categoryId={categoryId}
          onClickCategory={(idx: any) => setCategoryId(idx)}
        />
        <Sort
          sortType={sortType}
          onClickSort={(idx: any) => setSortType(idx)}
        />
      </div>
      <h2 className="content__title">Все букеты</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, idx) => <Skeleton key={idx} />)
          : collections.map((item: FlowerProps) => (
              <FlowerBlock
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
  );
};
