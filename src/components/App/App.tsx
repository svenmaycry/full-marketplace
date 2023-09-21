import '../../scss/app.scss';
import Categories from '../Categories/Categories';
import Header from '../Header/Header';
import Sort from '../Sort/Sort';
import PizzaBlock from '../PizzaBlock/PizzaBlock';
import pizzas from '../../assets/pizzas.json';

// type PizzaBlockProps = {
//   id: string;
//   title: string;
//   price: number;
//   imageUrl: string;
//   sizes: number[];
//   types: number[];
//   rating: number;
// };

function App() {
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
            {pizzas.map((item) => (
              <PizzaBlock
                price={item.price}
                title={item.title}
                imageUrl={item.imageUrl}
                sizes={item.sizes}
                types={item.types}
                key={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
