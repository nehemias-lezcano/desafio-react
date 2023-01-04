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
                <li>todo</li>
                <li>tecnologia</li>
                <li>personal</li>
            </ul>
        </div>
        <div>
            <CartWidget/>
        </div>
    </div>
  )
}

export default NavBar