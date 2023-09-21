import { useState } from 'react';

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианские',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((value, idx) => (
          <li
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={activeIndex === idx ? 'active' : ''}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
