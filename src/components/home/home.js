import React from 'react';
import './Home.css'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from '../Navbar/Navbar';

const Home = (props)=>{
    return(
        <div className='homebg'>{/*Adding the background image*/}
            <TopNav />
            <div className="middle">
                <div className="earthlings">Hello Earthlings<br/><span>{"I'm"}</span></div>
                <div className="myName"><span>{props.name}</span></div>
            </div>
        </div>
    )
}
Home.propTypes = {
    name: PropTypes.string,
}

export default Home;