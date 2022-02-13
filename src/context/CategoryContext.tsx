import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useEffect,
    useState,
} from "react";

type CategoryContextType = {
    children: ReactNode;
};

type ValuePropsContext = {
    categories: any[];
    setCategories: Dispatch<SetStateAction<any[]>>;
};

// create context
const CategoryContext = createContext<ValuePropsContext>({
    categories: [],
    setCategories: () => {},
});

// provide context
const CategoryProvider = ({ children }: CategoryContextType) => {
    const [categories, setCategories] = useState<any[]>([]);

    useEffect(() => {
        const getCategories = async () => {
            const data = await fetch(
                "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
            );
            const { drinks } = await data.json();
            setCategories(drinks);
        };
        // a call to the api
        getCategories();
    }, []);
    return (
        <CategoryContext.Provider
            value={{
                // add state
                categories,
                setCategories,
            }}
        >
            {children}
        </CategoryContext.Provider>
    );
};

// export context
export { CategoryContext, CategoryProvider };
