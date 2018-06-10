import React from 'react';
import PropTypes from 'prop-types';
import './Work.css'
import { Container, 
        Row, 
        Col } from 'reactstrap';

const Work = (props) =>{
    return(
        <Container>
            <Row>
                <Col xs='4'><img src={props.img} alt={props.alt} /></Col>
                <Col xs='8' className = 'myWork'>
                    <div className = 'company'>{props.company}</div>
                    <div className = 'position'>{props.position}</div>
                    <div className = 'role'>{props.role}</div>
                    <div className = 'achieve'>{props.achievement}</div>
                </Col>
            </Row>
        </Container>
    )
}
Work.propTypes = {
    img: PropTypes.string,
    alt: PropTypes.string,
    company: PropTypes.string,
    position: PropTypes.string,
    role: PropTypes.string,
    achievement: PropTypes.string,
}

export default Work