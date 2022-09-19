import React from 'react';
import styles from './Info.module.scss'
import {MovieCardType} from "../MovieCard/MovieCard";
function Info({info}:{info:MovieCardType}) {

    console.log(info.title)
    console.log(`url(https://image.tmdb.org/t/p/w500${info.backdrop_path})`);
    return (

        <div className={styles.info}>
            <div className={styles.shade} > </div>

            {info.backdrop_path!==null?
                <div style={{ backgroundImage:`url(https://image.tmdb.org/t/p/w500${info.backdrop_path})` }} className={styles.background}>
                    <h1> {info.title}</h1>
                    </div>:
                    <div style={{backgroundImage:`url(https://kartinkin.net/uploads/posts/2021-07/1626789861_7-kartinkin-com-p-cherno-krasnii-gradient-fon-krasivo-8.jpg)`}} className={styles.background}>
                    <h1> {info.title}</h1>
                    </div>
                }



                    <div style={{padding:'20px 0px 20px 30px'}}>
                    <div style={{marginBottom: '20px'}}>
                    <div  style={{marginBottom: '10px'}} ><span >About</span> <span style={{color:'#ad4545'}}>:</span></div>
                {info.overview}
                    </div>

                    <div style={{marginBottom:'10px'}}><span>Release</span><span style={{color:'#ad4545'}}>:</span></div>
                {info.release_date}
                    </div>





                    </div>
                    );
                }

                    export default Info
