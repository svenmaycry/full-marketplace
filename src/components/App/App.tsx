import '../../scss/app.scss';
import Categories from '../Categories/Categories';
import Header from '../Header/Header';
import Sort from '../Sort/Sort';
import PizzaBlock from '../PizzaBlock/PizzaBlock';

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
            <PizzaBlock price={500} title="Моя" />
            <PizzaBlock price={400} title="Сырная" />
            <PizzaBlock price={300} title="Ещё пизза" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
