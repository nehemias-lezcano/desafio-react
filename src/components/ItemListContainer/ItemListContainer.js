import ItemCount from "../ItemCount/ItemCount"
import { useEffect , useState } from "react"
import ItemList from "../ItemList/ItemList"

const arreglo = [
  {title: 'Pc Asus Prime 06', id: '1', price: '$150.000', pictureUrl: "./img/pc1.jpg"},
  {title: 'Pc Asus Rog Strix 11', id: '2' , price: '$160.000' , pictureUrl:"./img/pc2.jpg"},
  {title: 'Pc Asus Tuf 05', id: '3' , price: '$170.000' , pictureUrl:"./img/pc3.jpg"},
  {title: 'Pc Asus newPEs07', id: '4' , price: '$180.000' , pictureUrl:"./img/pc4.png"},
  {title: 'Placa De Video Asus Dual Gtx 1650 O4gd6 Mini Csm', id: '5' , price: '$104.553' , pictureUrl:"./img/placa1.jpg"},
  {title: 'Placa De Video Asus Dual Rtx 3050 O8g', id: '6' , price: '$161.124' , pictureUrl:"./img/placa2.jpg"},
  {title: 'Placa De Video Asus Ph Rtx 3060 12gb V2', id: '7' , price: '$172.886' , pictureUrl:"./img/placa3.jpg"},
  {title: 'Placa De Video Asus Dual Rtx 3070 O8gb V2', id: '8' , price: '$228.217' , pictureUrl:"./img/placa4.png"}
]

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([]);
 //const [singleProduct, setSingleProduct] = useState ({})
    const getProducts = new Promise ((resolve, reject)  => {
      setTimeout(() => {
      resolve(arreglo);
    }, 2000)

  })
  useEffect(() => {
    getProducts
    .then((response) => {
      setProducts(response)
    })
   .catch((error) => console.log(error))
  }, [])
  

  return (
    <div>
      {greeting}
      <ItemCount/>
      <ItemList productos={products}/>
{/*      <h1>producto especifico</h1>
     <div></div> */}
      </div>
  )
}

export default ItemListContainer