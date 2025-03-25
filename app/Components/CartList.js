import { useDispatch, useSelector } from "react-redux"
import CartItem from "./CartItem"
import { removeFromCart } from "../lib/features/frontSlice"

export default function CartList({el}) {

    const prods = useSelector(state=>state.front)
    const dispatch = useDispatch()

    function removeItem(id) {
        dispatch(removeFromCart(id))
    }

    return(
        <div>
            <ul className="pl-1">
                {
                    prods.cart && prods.cart.map((el,id)=>{
                        return(
                            <CartItem key={id} el={el} removeItem={removeItem} />
                        )
                    })
                }
            </ul>
        </div>
    )
}