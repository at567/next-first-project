import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Styles  from "../styles/Login.module.css";
import Link from 'next/link'

const Login: NextPage = () => {
    
    return ( 
     <>   
   
     <div className="App">
     <div className="container-fluid">
    <div className="row no-gutter">
    <div className={`col-md-6 d-none d-md-flex ${Styles.bgImage}`}></div>
    <div className="col-md-6 bg-light">
    <div className={`${Styles.login}`}>
    <div  className={Styles.positionSelect} >    
    <h1 className={`display-4 ${Styles.title}`} >Login</h1>
    <form>
    <div className={`form-group" ${Styles.inputFieldShape} `}>
    <label className={`${Styles.inputFieldLebel}`}>User</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div className={`form-group" ${Styles.inputFieldShape} `} >
    <label className={`${Styles.inputFieldLebel}`} >Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
    </div>
    <button type="submit" className={`${Styles.buttonNext}`}>Submit</button>
    </form>
    </div>
                     
        <Link href="/">
          <a className={`${Styles.linkClass}`}  >Lost a password?</a>
        </Link>
        <div className={Styles.LinkNextPage}  >
        <h2>Register</h2>
        <p>Don't have an account yet? Register on the website.</p>

        </div>
        <Link href="/signup">
          <a className={`${Styles.linkButton}`}  >Registration</a>
        </Link>
        </div>
    
        </div>

    </div>
</div>
</div>

     </>
    )

}

export default Login;