
import { Row, Col, Button, Container } from 'react-bootstrap'

const Footer = () => {

    const style = {
        background: '#212529', color: 'white', textAlign: 'center', fontSize: '1em', bottom: 0, padding: 5, width: '100%'
    }

    return (
        <footer style={style}>

            <Row>
                <Col md={4}>


                    <p>   Contactanos     </p>
                </Col>
                <Col md={4}>


                    <p>  Todos los derechos reservados   </p>
                </Col>
                <Col md={4}>


                    <p>  Contactanos  en Calle de la industria n4 o llamanos al 666-2354-5489  </p>
                </Col>
            </Row>

        </footer >
    )
}

export default Footer