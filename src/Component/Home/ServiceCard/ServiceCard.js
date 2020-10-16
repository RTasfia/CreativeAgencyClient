import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'

const ServiceCard = ({ service }) => {
    const [state, toggle] = useState(true)
    const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } })
    const history = useHistory();
    const handleOrder = () => {
        history.push("/adminOrCustomer");
    }
    return (

        <div className="col-md-4 mb-4">
            <div onMouseEnter={() => toggle(!state)}>
                <animated.div
                    style={{
                        opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                        transform: x
                            .interpolate({
                                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                            })
                            .interpolate(x => `scale(${x})`)
                    }}>
                    <Card onClick={handleOrder} style={{ width: '16rem', textAlign: "center" }}>
                        <Card.Body>
                            {
                                service.image ? <img style={{ height: '100px' }} src={`data:image/png;base64,${service.image.img}`} alt="" /> :
                                    <img style={{ height: "100px" }} src={service.icon} alt="" />


                            }

                            <Card.Title>{service.title}</Card.Title>
                            <Card.Text>{service.description}</Card.Text>
                        </Card.Body>
                    </Card>
                    {/* click */}
                </animated.div>
            </div>


        </div>

    );
};

export default ServiceCard;