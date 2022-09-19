import React from 'react';
import { Link } from 'react-router-dom';
import  styles from './MovieCard.module.scss'
export type MovieCardType={
    adult?: Boolean,
    backdrop_path?: String,
    genre_ids?: Array<Number>,
    id?: Number
    original_language?: String,
    original_title?: String,
    overview?: String,
    popularity?: Number
    poster_path?: String,
    release_date?: String,
    title?: String,
    video?: Boolean
    vote_average?: Number
    vote_count?: Number

}
function MovieCard({movie, infoClick}: { movie: MovieCardType, infoClick: Function }) {




    function onInfoClick(){
    return infoClick(movie)
    }
    return (
        <div className={styles.movieCard}>

          <Link to='/info'><img onClick={onInfoClick} alt='vlad lox' style={{borderRadius:'20px 20px 20px 20px'}} width={130} height={180} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
          </Link>
            <p>{movie.title}</p>

        </div>
    );
}

export default MovieCard;