import React from 'react';
import EducationCard from "./EducationCard";
import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const Education = ({educations}) => {
    return (  
        <section id="education" className="bg-light section">
            <Container>
                <Jumbotron fluid className="bg-light">
                    <h2 className="display-4 mb-5 text-center">
                        {educations.heading}
                    </h2>
                    <Row>
                        {
                            educations.data.map(data => {
                                return <EducationCard key={data.degree} data={data} />
                            })
                        }
                    </Row>
                </Jumbotron>
            </Container>
        </section>
    );
}
 
export default Education;