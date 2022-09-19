import React from 'react';
import axios from "axios";
import react from "react";
import styles from './Main.module.scss'
import MovieCard, {MovieCardType} from "../../MovieCard/MovieCard";
import Preloader from "../../Preloader/Preloader";

function Main({onPup}: { onPup: Function }) {
    function info(obj:MovieCardType){
        onPup(obj)
    }

    const [recommendedMovie, setRecommendedMovie] = React.useState<Array<Object>>([])
    const [ratedMovie, setRatedMovie] = React.useState<Array<Object>>([])
    const [popularMovie, setPopularMovie] = React.useState<Array<Object>>([])
    const [isFetching, setIsFetching] = react.useState<Boolean>(true)

    const fetchData = () => {
        const recommendedMovie:string = 'https://api.themoviedb.org/3/movie/popular?api_key=03679cc57175a46cd0ffe724aac83954&language=en-US&page=2'
        const popularMovie:string = 'https://api.themoviedb.org/3/movie/now_playing?api_key=03679cc57175a46cd0ffe724aac83954&language=en-US&page=1'
        const ratedMovie:string = 'https://api.themoviedb.org/3/movie/top_rated?api_key=03679cc57175a46cd0ffe724aac83954&language=en-US&page=1'
        const getRecommendedMovie = axios.get(recommendedMovie)
        const getPopularMovie = axios.get(popularMovie)
        const getRatedMovie = axios.get(ratedMovie)
        setIsFetching(true)
        axios.all([getRecommendedMovie, getPopularMovie, getRatedMovie]).then(
            axios.spread((...allData) => {
                const allDataRecommendedMovie = allData[0].data.results.slice(15)
                const allPopularMovie = allData[1].data.results.slice(15)
                const allRatedMovie = allData[2].data.results.slice(15)
                console.log(allPopularMovie)
                setIsFetching(false)
                setRecommendedMovie(allDataRecommendedMovie)
                setPopularMovie(allPopularMovie)
                setRatedMovie(allRatedMovie)
            })
        )

    }

    React.useEffect(() => {

        fetchData()
    }, [])
    return (


        <div className={styles.main}>
            {isFetching ? <Preloader/> :
                <div>
                    <div className={styles.mainFilm}>

                        <div className={styles.name}>
                            <h2 style={{color: 'white', fontSize: '35px', fontFamily: 'Helvetica'}}>Blade Runner
                                2049</h2>

                            <a href='https://c.tenor.com/Vlr5ep-dRXMAAAAd/ryan-gosling-blade-runner2049.gif' >
                                <img width={15} src='UI/play.png'/>

                            </a>

                        </div>
                    </div>
                    <div style={{marginTop: '40px'}}>
                        <div className={styles.recs}>

                            <span>Recommendations</span> <span style={{color: '#ad4545'}}>:</span>
                            <div style={{display: 'flex'}}>
                                {recommendedMovie.map(movie =>
                                    <MovieCard infoClick={(obj: MovieCardType) => info(obj)} movie={movie}/>
                                )}

                            </div>
                        </div>
                        <div className={styles.popular}>

                            <span>Popular</span> <span style={{color: '#ad4545'}}>:</span>
                            <div style={{display: 'flex'}}>
                                {popularMovie.map(movie =>
                                    <MovieCard infoClick={(obj: MovieCardType) => info(obj)} movie={movie}/>
                                )}

                            </div>

                        </div>
                        <div className={styles.top_rated}>
                            <span>Top Rated</span> <span style={{color: '#ad4545'}}>:</span>

                            <div style={{display: 'flex'}}>
                                {ratedMovie.map(movie =>
                                    <MovieCard infoClick={(obj: MovieCardType) => info(obj)} movie={movie}/>
                                )}
                            </div>
                        </div>
                    </div>


                </div>

            }

        </div>

    );
}

export default Main;