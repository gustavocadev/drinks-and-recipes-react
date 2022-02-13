import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";

const Header = () => {
    const { categories } = useContext(CategoryContext);

    return (
        <header>
            <h1 className="text-4xl font-semibold text-center py-8">
                Search drink recipes{" "}
            </h1>
        </header>
    );
};

export default Header;
