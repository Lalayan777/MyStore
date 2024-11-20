import { useDispatch, useSelector } from "react-redux"
import Header from "./Header"
import { MdLocalGroceryStore } from "react-icons/md";


function Card({ product, key }) {
    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    const increment = ()=>{
        dispatch({type:"Increment", payload:1})
    }
    return(
        <div>
                        <div class="card">
                        <div class="image_container">
                            <img src={product.images} alt="" />
                        </div>
                              <div class="title">
                                    <span>{product.title}</span>
                                    <p>{product.price}$</p>
                              </div>
                             <div class="action">
                                   <button className="cart-button" onClick={increment}>Add to card</button>
                             </div>
                        </div>
        </div>
    )
}

export default Card