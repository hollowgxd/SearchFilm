import React from 'react';

import axios from "axios";
import MovieCard, { MovieCardType } from "../MovieCard/MovieCard";
import styles from "./MovieList.module.scss"
import Preloader from "../Preloader/Preloader";
import { useParams } from 'react-router-dom';

function MovieList({onSus}: { onSus:Function })  {

    function info(obj:MovieCardType){
       return  onSus(obj);
    }

    const [page, setPage]= React.useState(1)
    const [movieList, setMovieList]= React.useState([])
    const [isFetching, setIsFetching ] = React.useState(true)
    const {id, search}= useParams()




    React.useEffect(() => {
        console.log(search)
        setIsFetching(true)
        if (search!==undefined){
    axios.get(` https://api.themoviedb.org/3/search/movie?api_key=03679cc57175a46cd0ffe724aac83954&language=en-US&query=${search}`)
        .then( res=>{
            console.log(res.data.results)
            setMovieList(res.data.results)
            setIsFetching(false)
        })

        }
        else {
   axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=03679cc57175a46cd0ffe724aac83954&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=${page}&with_genres=${id}`)
       .then(res=>{
           console.log(res.data.results)
           setMovieList(res.data.results)
           setIsFetching(false)
       })
        }

    }, [id, page, search])




    return (


                <div className={styles.MovieList}>

                    {isFetching?   <Preloader/>:
                        <div>
                        <div>
                {movieList.map(movie=>
                    <MovieCard infoClick={(obj:Object) => info(obj)} movie={movie}/>
                )
                }
</div>

                            {movieList.toString().length >4 ? <div className={styles.arrows}>
                                <img width={30} src="/UI/left.png" onClick={()=>setPage(page===1? page: page-1)}/>
                                <h1>{page}</h1>
                                <img width={30} src='/UI/right.png' onClick={()=>setPage(page+1)}/>
                                </div> : <h1>По Вашему Запросу "{search}" Ничего Не Найдено</h1>}
                        </div>}

            </div>




    );
}

export default MovieList;