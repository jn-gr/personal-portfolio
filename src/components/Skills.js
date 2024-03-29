import { Container, Col, Row } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import projectHolder from "../assets/img/project-holder.png"
import jogo from "../assets/img/jogo.jpg"


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>My skills</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={jogo} alt="Image" />
                                    <h5>Skill 1</h5>
                                </div>
                                <div className="item">
                                    <img src={jogo} alt="Image" />
                                    <h5>Skill 2</h5>
                                </div>
                                <div className="item">
                                    <img src={jogo} alt="Image" />
                                    <h5>Skill 3</h5>
                                </div>
                                <div className="item">
                                    <img src={jogo} alt="Image" />
                                    <h5>Skill 4</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}