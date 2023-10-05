export const Categories = ({ categoryId, onClickCategory }: any) => {
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
        {categories.map((categoryName, idx) => (
          <li
            key={idx}
            onClick={() => onClickCategory(idx)}
            className={categoryId === idx ? 'active' : ''}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};
