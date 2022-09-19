import styles from './Header.module.scss'

import React from "react";
import { Link } from 'react-router-dom';

function Header(){
    const [input, setInput]=React.useState<String>('')
    return(
        <div className={styles.header}>
      <Link  to='/'>     <div >

<img src="UI/logo.png" style={{marginRight:'20px'}} height={55} width={55} />

<h1>Search.</h1><h1>Film</h1>



            </div></Link>

          <div className={styles.searchWrapper}> <input onChange={(e=>setInput(e.target.value))}  placeholder='Поиск...' className={styles.search}/><Link to={`search/${input}`} ><img src='UI/search.png' height={20}/></Link></div>
        </div>
    )
}
export default Header