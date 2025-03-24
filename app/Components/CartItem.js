import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch } from "react-redux"
import { removeFromCart } from "../lib/features/frontSlice"

export default function CartItem({el}) {

    const dispatch = useDispatch()

    function removeItem() {
        dispatch(removeFromCart(el.id))
    }

    return(
        <div className="flex justify-between">
            <div>{el.name}</div>
            <div className="flex">
                <div>£{el.price}</div>
                <div className="ml-3">
                    <button onClick={()=>{removeItem()}}>
                        <FontAwesomeIcon icon={faTrashCan} size="sm" />
                    </button>
                </div>
            </div>
        </div>
    )
}