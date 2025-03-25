import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function CartItem({el, removeItem}) {
    
    return(
        <li className="flex justify-between">
            <div>{el.name}</div>
            <div className="flex">
                <div>£{el.price}</div>
                <div className="ml-3">
                    <button onClick={()=>{removeItem(el.id)}}>
                        <FontAwesomeIcon icon={faTrashCan} size="sm" />
                    </button>
                </div>
            </div>
        </li>
    )
}