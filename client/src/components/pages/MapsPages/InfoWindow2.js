import './Infowindow.css';
import { Link } from 'react-router-dom'
const InfoWindow2 = ({ show, user }) => {

    return (
        <>
            <div>
                <div className={show ? "infoWindow " : "infoWindowHidden"}>
                    <Link className="nav-link" to={`/perfil-de-usuario/${user?._id}`}> <strong>{user?.name} </strong></Link>
                    {/* <link><p>{user?.name}</p></link> */}
                    <p>{user?.surname}</p>
                    <p>{user?.email}</p>
                </div>
            </div>
        </>
    )
}

export default InfoWindow2