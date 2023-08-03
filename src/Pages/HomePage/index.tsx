import FilmSlider from './components/FilmSlider';
import FilmTitle from './components/FilmTitle';
import GenreTitle from './components/GenreTitle';
import Genres from './components/Genres';
import MainSlider from './components/MainSlider';
import TvShowSlider from './components/TvShowSlider';
import TvShowTitle from './components/TvShowTitle';

function HomePage() {
  return (
    <>
      <MainSlider />
      <FilmTitle />
      <div className="line"></div>
      <FilmSlider />
      <GenreTitle />
      <div className="line"></div>
      <Genres />
      <TvShowTitle />
      <div className="line"></div>
      <TvShowSlider />
      <div className="mb-4"></div>
    </>
  );
}

export default HomePage;
