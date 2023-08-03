import style from './filmPage.module.css';
import image from '../../assets/images/rings-of-power-wallpaper.jpg';
import FilmCard from '../../components/MovieCard/FilmCard';
import useFilm from '../../hooks/useFilm';
import Laoding from '../../components/Loading';
import PaginateCard from '../../components/PaginateCard';
import { useState } from 'react';

function FilmPage() {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(2);

  const { data: films, isLoading } = useFilm(page, pageSize);

  if (isLoading) {
    return <Laoding />;
  }
  return (
    <div>
      <div
        className={style.backgroundImage}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={style.caption}>
          <p>فیلم ها</p>
        </div>
      </div>

      <div className={style.selectBox}>
        <select
          name=""
          id=""
          value={pageSize}
          onChange={e => {
            setPageSize(parseInt(e.target.value));
            setPage(1);
          }}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>

      <div
        className={
          style['collection-film'] + ' d-flex justify-content-evenly flex-wrap'
        }
      >
        {films?.data.items.map(item => (
          <FilmCard key={item.id} film={item} />
        ))}
      </div>

      <div className={style.paginate}>
        <PaginateCard
          page={page}
          total={films?.data.total ? films.data.total : 0}
          onIndexChoose={(number: number) => setPage(number)}
          nextPage={films?.data.nextPage ? films.data.nextPage : false}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
}

export default FilmPage;
