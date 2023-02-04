import React, { Fragment} from "react"
import logo from "./guy.jpg";

//import { Link } from 'react-router-dom'
//import { userSelector } from 'react-redux'

//import Loader from '../layout/Loader'
//import MetaData from '../layout/MetaData' 


const Account = () => {

    //const { user, loading } = userSelector(state => state.auth)
    return(

        <Fragment>
                <Fragment>
                    <h2 className="mt-5 ml-5">My Profile</h2>
                    <div className="row justify-content-around mt-5 user-info">
                        <div className="col-12 col-md-3">
                            <figure className='avatar avatar-profile'>
                                <img class="rounded-circle img-fluid" src={logo} alt='basic profile pic' />
                            </figure>
                        </div>
                
                        <div className="col-12 col-md-5">
                            <h4>Username</h4>
                            <p>username</p>
                
                            <h4>Password</h4>
                            <p>Password</p>

                            <h4>Current Location</h4>
                            <p>Tifton, Ga</p>
                        </div>
                    </div>
                </Fragment>
        </Fragment>
            


    )
}

export default Account;