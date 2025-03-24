import { Nav } from "react-bootstrap"

export default function CatNav({cats, setSelected}) {

    function handleCat(e) {
        console.log(e.currentTarget.innerHTML)
        setSelected(e.target.innerHTML)
    }

    return(
        <Nav className="relative w-[50%] justify-between">
            {
                cats && cats.map((el,id)=>{
                    return(
                        <Nav.Item key={id}>
                            <button className="w-[4rem] text-xl"
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