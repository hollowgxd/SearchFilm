import Navbar from "../Navbar/Navbar";
import styles from "./Home.module.scss"

import MovieList from "../MovieList/MovieList";
import Main from "./Main/Main";

import React from "react";
import {Route, Routes } from "react-router-dom";
import Info from "../Info/Info";
import {MovieCardType} from "../MovieCard/MovieCard";

function Home (){
    const [info, setInfo]=React.useState({})
    function Sus (obj:MovieCardType) {
        setInfo(obj)
    }




    return(


        <div className={styles.home}>
            <Navbar  />
<Routes>

    <Route path='/genre/:id' element={<MovieList onSus={(obj: MovieCardType) => Sus(obj)}/>}/>
    <Route  path='/search/:search'  element={<MovieList onSus={(obj:MovieCardType) => Sus(obj)}/>}/>
    <Route path='/info' element={<Info   info={info} />}/>
    <Route  path='/' element={<Main  onPup={(obj:MovieCardType) => Sus(obj)} />}/>
</Routes>


        </div>


    )
}
export default Home