import { Col, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import './JobCard.css';

const JobCard = ({ status, description, deliveryAdress, _id }) => {

    return (
        <Col md={12}><Link to={`/detail/${_id}`}>
            <div className="Card">
                <p> Estado: {status} </p>
                <p> Descripción: {description} </p>
                <p> Dirrección de envio: {deliveryAdress} </p>
                <Button variant="dark"> Ver detalles del Job</Button>
            </div></Link>
        </Col>

    )
}

export default JobCard