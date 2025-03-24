import { Nav } from "react-bootstrap"
import { Carattere } from "next/font/google"
import { useDispatch, useSelector } from "react-redux"
import { setPage } from "@/app/lib/features/frontSlice"

const carat = Carattere({
    subsets:['latin'],
    weight:'400'
})

export default function CatNav({cats}) {

    const prods = useSelector(state=>state.front)
    const dispatch = useDispatch()

    function handleCat(e) {
        dispatch(setPage(e.target.innerHTML))
    }

    return(
        <Nav className={`relative w-[50%] justify-between my-3 ${carat.className}`}>
            {
                cats && cats.map((el,id)=>{
                    return(
                        <Nav.Item key={id}>
                            <button className={`w-[4rem] text-2xl ${el === prods.activePage ? 'underline' : null}`}
                                    onClick={(e)=>{handleCat(e)}}>
                                {el}
                            </button>
                        </Nav.Item>
                    )
                })
            }
        </Nav>
    )
}