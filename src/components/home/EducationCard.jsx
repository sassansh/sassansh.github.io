import React from 'react';

import { 
    Col
 } from "react-bootstrap";
const EducationCard = ({data}) => {
    return ( 
        <Col lg="6">
            <div className="pb-5 text-center">
                <img className=" bg-white mb-3" src={data.educationlogo} alt=""/>
                <p className="lead">
                    <strong>
                    {data.degree}
                    </strong>
                    <br/>
                    {data.date}
                    <br/>
                    <small className="text-muted">{data.major}</small>
                </p>
                
            </div>
        </Col>
     );
}
 
export default EducationCard;