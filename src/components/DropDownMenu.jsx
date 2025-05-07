
import { Link } from "react-router"

export default function DropDownMenu() {

    return (
        <>
            <div className="md:hidden">

                {<div className="space-x-4 flex flex-col
                 bg-yellow-100 h-[70%] w-64 fixed p-5 
                 gap-5 text-xl right-0 border-b-4 border-yellow-500">

                    <Link to='/login'> <div className="hover:text-yellow-400 cursor-pointer">
                        Login / Register
                    </div></Link>

                    <a href="#" className="hover:text-yellow-400">Home</a>
                    <a href="#" className="hover:text-yellow-400">Products</a>
                    <a href="#" className="hover:text-yellow-400">Offers</a>
                    <Link to="/cart" className="hover:text-yellow-400">
                        <i className="fas fa-shopping-cart"></i> Cart
                    </Link>
                </div>}

            </div>
        </>
    )
}