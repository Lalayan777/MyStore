import { MdLocalGroceryStore } from "react-icons/md";

function Header({ counter }) {
    return(
        <header>
            <h1>My Store</h1>
                <div className="cont">
                    <MdLocalGroceryStore className="icon" />
                    <p>{counter}</p>
                </div>
        </header>
    )
}

export default Header