import logo from './marker.png'
const Marcador = ({ text }) => {

    return (
        <img src={logo} alt="Logo" style={{ width: 40, height: 70, transform: "translate(-20px, -70px)" }} />
    )
}

export default Marcador