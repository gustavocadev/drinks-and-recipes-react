import { FormEvent } from "react";
import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState,
} from "react";

type SearchType = {
    category: string;
    ingredient: string;
};

type RecipesContextType = {
    search: SearchType;
    setSearch: Dispatch<SetStateAction<SearchType>>;
    setRecipes: Dispatch<SetStateAction<any[]>>;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    recipes: any[];
};

type RecipesProviderType = {
    children: ReactNode;
};

const RecipesContext = createContext<RecipesContextType>({
    search: {
        category: "",
        ingredient: "",
    },
    setSearch: () => {},
    setRecipes: () => {},
    handleSubmit: () => {},
    recipes: [],
});

const RecipesProvider = ({ children }: RecipesProviderType) => {
    const [recipes, setRecipes] = useState<any[]>([]);
    const [search, setSearch] = useState({
        category: "",
        ingredient: "",
    });

    const { category, ingredient } = search;

    const getRecipes = async () => {
        const resp = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`
        );
        const { drinks } = await resp.json();
        setRecipes(drinks);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await getRecipes();
    };

    return (
        <RecipesContext.Provider
            value={{
                search,
                setSearch,
                setRecipes,
                handleSubmit,
                recipes,
            }}
        >
            {children}
        </RecipesContext.Provider>
    );
};
export { RecipesContext, RecipesProvider };
