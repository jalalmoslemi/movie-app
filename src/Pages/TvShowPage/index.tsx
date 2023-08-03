import { useState } from 'react';
import image from '../../assets/images/rings-of-power-wallpaper.jpg';
import Laoding from '../../components/Loading';
import FilmCard from '../../components/MovieCard/FilmCard';
import PaginateCard from '../../components/PaginateCard';
import style from './Tvshow.module.css';
import useTvShow from '../../hooks/useTvShow';

function TvShowPage() {
  const [page, setPage] = useState<number>(1);

  const { data: tvShow, isLoading } = useTvShow(page);

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
          <p>سریال ها</p>
        </div>
      </div>
      <div
        className={
          style['collection-film'] + ' d-flex justify-content-evenly flex-wrap'
        }
      >
        {tvShow?.data.items.map(item => (
          <FilmCard key={item.id} film={item} />
        ))}
      </div>

      <div className={style.paginate}>
        <PaginateCard
          page={page}
          total={tvShow?.data.total ? tvShow.data.total : 0}
          onIndexChoose={(number: number) => setPage(number)}
          nextPage={tvShow?.data.nextPage ? tvShow.data.nextPage : false}
          pageSize={tvShow?.data.pageSize ? tvShow?.data.pageSize : 0}
        />
      </div>
    </div>
  );
}

export default TvShowPage;
