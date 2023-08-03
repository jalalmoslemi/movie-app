import style from './paginateCard.module.css';

interface Props {
  onIndexChoose: (number: number) => void;
  total: number;
  page: number;
  nextPage: boolean;
  pageSize: number;
}
function PaginateCard({
  pageSize,
  nextPage,
  onIndexChoose,
  total,
  page,
}: Props) {
  if (page > total || total === 1) {
    return <></>;
  }

  return (
    <div className={style.pagination}>
      {total > 0 && (
        <button
          className={page === 1 ? style.active : ''}
          onClick={() => onIndexChoose(1)}
        >
          1
        </button>
      )}
      {page - 3 > 1 && <span>...</span>}
      {page - 2 > 1 && (
        <button onClick={() => onIndexChoose(page - 2)}>{page - 2}</button>
      )}
      {page - 1 > 1 && (
        <button onClick={() => onIndexChoose(page - 1)}>{page - 1}</button>
      )}

      {page !== 1 && page !== total && (
        <button className={style.active}>{page}</button>
      )}

      {page + 1 < total && nextPage && (
        <button onClick={() => onIndexChoose(page + 1)}>{page + 1}</button>
      )}
      {page + 2 < total && nextPage && (
        <button onClick={() => onIndexChoose(page + 2)}>{page + 2}</button>
      )}

      {page + 3 < total && nextPage && <span>...</span>}
      {total > 1 && (
        <button
          className={page === total ? style.active : ''}
          onClick={() => onIndexChoose(total)}
        >
          {total}
        </button>
      )}
    </div>
  );
}

export default PaginateCard;
