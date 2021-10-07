import React  from "react";
import { NextPage } from "next";
import Styles from "../../styles/Header.module.css"
import Link from 'next/link'
interface Props {

}

const Header: NextPage<Props> = (props) => {
    // using destructuring to get username
  return ( 
    <>
    <header className={Styles.hero}  >
  <div id="navbar" className={Styles.navbar}>
  <h1 className={Styles.logo} >
  <i className={Styles.fas}></i>
  <span><svg width="28" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 10h1.652c1.708 0 2.63 2.004 1.518 3.302l-1.618 1.887A4.501 4.501 0 0 0 24.5 14.5a1.5 1.5 0 0 1 3 0A7.5 7.5 0 0 1 14 19 7.5 7.5 0 0 1 .5 14.5a1.5 1.5 0 0 1 3 0 4.5 4.5 0 0 0 8.948.689l-1.618-1.887C9.718 12.004 10.64 10 12.35 10H14z" fill="#333"></path><circle cx="21" cy="3" r="3" fill="#333"></circle><circle cx="7" cy="3" r="3" fill="#333"></circle></svg></span>
  </h1>
<nav>
<ul>
<li><Link href="/login"><a className={Styles.headerElementsLink} >Login / Create</a></Link></li>
 
</ul>


</nav>
  </div>  
</header>
    </>
    );
  };
  
  // export component
  export default Header;