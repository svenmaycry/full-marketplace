import { Home } from '../../pages/Home';
import { Header } from '../Header/Header';
import '../../scss/app.scss';

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Home />
        </div>
      </div>
    </div>
  );
};
