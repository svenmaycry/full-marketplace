import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Categories } from '../../components/Categories/Categories';
import { Sort } from '../../components/Sort/Sort';
import { Skeleton } from '../../components/FlowerBlock/Skeleton';
import { FlowerBlock } from '../../components/FlowerBlock/FlowerBlock';
import { Pagination } from '../../components/Pagination/Pagination';
import { SearchContext } from '../../components/App/App';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../../redux/slices/filterSlice.js';

export const Home = () => {
  const dispatch = useDispatch();
  const { categoryId, sort } = useSelector((state) => state.filter);

  const { searchValue } = useContext(SearchContext);

  const [collections, setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    setIsLoading(true);

    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `&category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    axios
      .get(
        `https://6512cd7db8c6ce52b39641b2.mockapi.io/flowers?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then((res) => {
        setCollections(res.data);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const skeletons = [...new Array(6)].map((_, idx) => <Skeleton key={idx} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} onClickCategory={onClickCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все букеты</h2>
      <div className="content__items">
        {isLoading
          ? skeletons
          : collections.map((item) => (
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
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};
