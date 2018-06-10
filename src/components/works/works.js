import React, { Component } from 'react';
import './Works.css';
import Work from './Work/Work';
import {Container} from 'reactstrap';
import csrd from '../../assets/images/works/csrd.jpg';
import feghas from '../../assets/images/works/feghas.jpg';
import uniben from '../../assets/images/works/uniben.jpg';
import aiesec from '../../assets/images/works/aiesec.jpg';
import sem from '../../assets/images/works/sem.jpg';
import freshhh from '../../assets/images/works/freshhh.jpg';
import sug from '../../assets/images/works/sug.jpg';

class Works extends Component {
    state={
        myWorks : [
            {
                img: csrd,
                alt: 'csrd website',
                company : 'Center for Strategic Research and Development Nigeria, 2018',
                position: 'ICT consultant and web developer,',
                role: 'Identify my client pain-point and drafted our a digital strategy that will meet the ICT need at different growth stages of the client organisation, Implementing the plans with the minimal financial burden to the client.',
                achievement: 'My first client and my first website deployment'
            },
            {
                img: feghas,
                alt : 'Feghas Website',
                company: 'Feghas Solution Limited, 2017',
                position: 'User Interaction and User Experience Design,',
                role: 'Worked in the product department of the organisation as a User interaction and user experience designer. Participated in the Stanford seed transformation program of the company and assited in the planning and execution of the tranformation strategy',
                achievement: 'My first professional career and redesign the company website'
            },
            {
                img: uniben,
                alt: 'University of Benin',
                company: 'University of Benin, 2016',
                position: 'Bachelor of Engineering, Electrical/Electronics Engineering,',
                role: '',
                achievement: 'Met people that shaped my life and a tonne of extra-curriculum activities, befor I forget i graduted with a 2nd class upper honour'
            },
            {
                img: aiesec,
                alt: 'AIESEC Benin city picture',
                company: 'AIESEC Benin City, 2016',
                position: 'Vice President of Marketing and Communication,',
                role: 'We focus mainly on design and digital marketing, worked with other department and executed some  althougth It was tough, my first marketing leadership role.  with almost zero knowledge. Sometimes just take the risk, if you survive, you be better.',
                achievement: 'Promoted the design yourself campaign'
            },
            {
                img: sem,
                alt: 'Shell Ecomarathon team Uniben picture',
                company: 'Shell Eco-Marathon team UNIBEN, 2016',
                position: 'Team manager, Prototype Car Design,',
                role: '',
                achievement: ''
            },
            {
                img: freshhh,
                alt: 'Freshhh certificate',
                company: 'FRESHHH, 2015',
                position: 'Team leader of Charis,',
                role: 'My first management enviroment althought it was simulated, we virtually ran the management operation of an oil producting company, it was fun as hell.',
                achievement: ''
            },
            {
                img: sug,
                alt: 'Student Union Parliament University of Benin',
                company: 'Student Union Government Parliament, University of Benin, 2014',
                position: 'Vice Chairman of Management and Student Relation,',
                role: '',
                achievement: ''
            }
        ]
    }
    
    render(){
        return(
            <div className="work" id = 'works'>
                <Container>
                    <div className="wheader">{"What I've Done"}</div>
                    <p>Just getting started</p>
                    {
                        this.state.myWorks.map(work =>
                            <Work 
                                key = {work.company}
                                img = {work.img} 
                                alt = {work.alt}
                                company = {work.company}
                                position ={work.position}
                                role = {work.role}
                                achievement = {work.achievement}
                            />
                        )
                    }
                </Container>
            </div>
        )
    }
}

export default Works;