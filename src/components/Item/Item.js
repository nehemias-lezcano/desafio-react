import './Item.css'

const Item = ({producto}) => {
  return (
    <li className='product'>
        <img alt="" src={producto.pictureUrl} width='20%'/>
        <h2>{producto.title}</h2>
        <h3>{producto.description}</h3>
        <h3>{producto.price}</h3>
    </li>
  )
}

export default Item