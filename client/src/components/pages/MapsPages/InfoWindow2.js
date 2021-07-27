import './Infowindow.css';
const InfoWindow2 = ({ show, user }) => {

    return (
        <>

            <div>
                <div className={show ? "infoWindow " : "infoWindowHidden"}>

                    <p>{user?.name}</p>
                    <p>{user?.surname}</p>
                    <p>{user?.email}</p>

                </div>
            </div>
        </>
    )
}

export default InfoWindow2