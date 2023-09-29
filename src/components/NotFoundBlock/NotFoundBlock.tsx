import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>Ничего не найдено ...</h1>
      <p className={styles.description}>
        Страница отсутствует в интернет-магазине
      </p>
    </div>
  );
};
