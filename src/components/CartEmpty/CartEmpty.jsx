import { Link } from 'react-router-dom';
import cartEmptyImg from '../../assets/images/empty-cart.png';

const CartEmpty = () => {
  return (
    <div className="cart cart__empty">
      <h2>Корзина пустая</h2>
      <p>
        Вероятней всего, вы не заказывали ещё букеты. Для того, чтобы заказать,
        <br />
        перейди на главную страницу.
      </p>
      <img src={cartEmptyImg} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default CartEmpty;
