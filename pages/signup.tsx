import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Styles  from "../styles/Login.module.css";
import Link from 'next/link'

const SignUP: NextPage = () => {

    return ( 
        <>  
    <div className="App">
    <div className="container-fluid">
    <div className="row no-gutter">
    <div className={`col-md-6 d-none d-md-flex ${Styles.bgImage}`}></div>
    <div className="col-md-6 bg-light">
    <div className={`${Styles.login}`}>
    <div  className={Styles.positionSelect} >    
    <h1 className={`display-4 ${Styles.title}`} >Registration</h1>
    <form>
    <div className={`form-group" ${Styles.inputFieldShape} `}>
    <label className={`${Styles.inputFieldLebel}`}>Nick Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div className={`form-group" ${Styles.inputFieldShape} `}>
    <label className={`${Styles.inputFieldLebel}`}>Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div className={`form-group" ${Styles.inputFieldShape} `}>
    <label className={`${Styles.inputFieldLebel}`}>Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div className={`form-group" ${Styles.inputFieldShape} `}>
    <label className={`${Styles.inputFieldLebel}`}>Age</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div className={`form-group" ${Styles.inputFieldShape} `}>
    <label className={`${Styles.inputFieldLebel}`}>Image</label>
    <input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div className={`form-group" ${Styles.inputFieldShape} `}>
    <label className={`${Styles.inputFieldLebel}`}>Caterory</label>
 
    <select className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <option value="0">Category</option>
    <option value="2">Category 1</option>
    <option value="3">Category 2</option>

  </select>
    </div>
    <div className={`form-group" ${Styles.inputFieldShape} `}>
    <label className={`${Styles.inputFieldLebel}`}>Sex</label>
 
    <select className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <option value="0">Sex</option>
    <option value="1">Male</option>
    <option value="2">FeMale</option>
   </select>
    </div>
    <div className={`form-group" ${Styles.inputFieldShape} `}>
    <label className={`${Styles.inputFieldLebel}`}>Price ($ per x minites)</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div className={`form-group" ${Styles.inputFieldShape} `}>
    <label className={`${Styles.inputFieldLebel}`}>3 short facts</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div className={`form-group" ${Styles.inputFieldShape} `}>
    <label className={`${Styles.inputFieldLebel}`}>Description</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div className={`form-group" ${Styles.inputFieldShape} `} >
    <label className={`${Styles.inputFieldLebel}`} >Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
    </div>
    <button type="submit" className={`${Styles.buttonNext}`}>Registration</button>
    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
    )


}

export default SignUP; 