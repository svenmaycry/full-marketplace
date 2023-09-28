import { useState } from 'react';

export const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    'Все',
    'Классические',
    'Линейные',
    'Каскадные',
    'Каркасные',
    'Комнатные',
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
