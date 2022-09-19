import styles from './Navbar.module.scss'
import axios from "axios";
import React from 'react'


import Preloader from "../Preloader/Preloader";
import { Link } from 'react-router-dom';

function Navbar() {
type genreType={
    id:number,
    name:string,
}

    const [genres, setGenres] = React.useState<Array<genreType>>([])
    const [url, setUrl] = React.useState<String |undefined>('')
    const [isFetching, setIsFetching] = React.useState<Boolean>(true)
    React.useEffect(() => {

        setIsFetching(true)
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=03679cc57175a46cd0ffe724aac83954&language=en-UShttps://api.themoviedb.org/3/genre/movie/list?api_key=03679cc57175a46cd0ffe724aac83954&language=en-US')
            .then(res => {

                setGenres(res.data.genres)
                setIsFetching(false)
console.log(res.data.genres)
            })

    }, [])
    console.log(url)
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarHeader}><h2>G</h2><h2>enres</h2></div>
            {isFetching ? <Preloader/>

                : <div className={styles.genres}>
                    {genres.map(genre => (

                        <Link to={`/genre/${genre.id}`}>
                            <div onClick={() => setUrl(`/genre/${genre.id}`)}
                                style={url === '/genre/' + genre.id ? {

                                borderLeft: '3px solid #ad4545',
                                padding: '0 80px 0 47px',
                                boxShadow: 'inset 8px 0 10px -10px #ad4545'
                            } : {}}>{genre.name}</div>
                        </Link>

                    ))}
                </div>}

        </div>
    )
}

export default Navbar