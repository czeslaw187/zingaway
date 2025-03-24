import { addToCart } from "@/app/lib/features/frontSlice"
import { useDispatch } from "react-redux"

export default function ProductItem({el}) {

    const dispatch = useDispatch()

    function addProductToCart() {
        dispatch(addToCart(el))
    }

    return(
        <li id={el.id} className="w-[12rem] h-[12rem] my-4 bg-teal-50 shadow-md shadow-black transition duration-200 ease-in hover:opacity-50 active:scale-90">
            <button className="grid justify-center justify-items-center w-full h-full"
                    onClick={()=>{addProductToCart()}}>
                <div className="text-xl font-bold">{el.name}</div>
                <div className="text-2xl">£{el.price}</div>
            </button>
        </li>
    )
}