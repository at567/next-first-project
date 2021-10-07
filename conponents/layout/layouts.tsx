import React  from "react";
import { NextPage } from "next";
import Header from "./../Header/header";
interface Props {
children: any;
}

const Layout: NextPage<Props> = (props) => {
    // using destructuring to get username
    const { children } = props;
  
    return ( 
    <>
    <Header />
    <main>{children}</main>
    {/* <h2>Footer</h2> */}
    </>
    );
  };
  
  // export component
  export default Layout;