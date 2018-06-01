import React from 'react';
import './home.css'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from '../navbar/navbar';

const Home = (props)=>{
    const classes = [];
    classes.push('homebg');
    return(
        <div className='homebg'>{/*Adding the background image*/}
            <TopNav />
            <div className="middle">
                <div className="earthlings">Hello Earthlingssss<br/><span>{"I'm"}</span></div>
                <div className="myName"><span>{props.name}</span></div>
            </div>
        </div>
    )
}
Home.PropTypes = {
    name: PropTypes.string,
}

export default Home;