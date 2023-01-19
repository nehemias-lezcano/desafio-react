import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <div className="navBar">
        <div>
            logo
        </div>
        <div>
            <ul className='list'>
                <li>Inicio</li>
                <li>Pc armadas</li>
                <li>Componentes</li>
            </ul>
        </div>
        <div>
            <CartWidget/>
        </div>
    </div>
  )
}

export default NavBar