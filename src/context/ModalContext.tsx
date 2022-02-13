import { useEffect } from "react";
import {
    createContext,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
} from "react";

type ModalContextProviderProps = {
    children: ReactNode;
};

type ModalContextType = {
    handleClickToObtainId: (id: string) => void;
    recipeFullDetails: any;
};

const ModalContext = createContext<ModalContextType>({
    handleClickToObtainId: () => {},
    recipeFullDetails: {},
});

const ModalContextProvider = ({ children }: ModalContextProviderProps) => {
    // const [modal, setModal] = useState(false)
    // const [modalContent, setModalContent] = useState(null)
    const [recipeFullDetails, setRecipeFullDetails] = useState({});

    // const showModal = (content: any) => {
    //     setModal(true)
    //     setModalContent(content)
    // }

    // const hideModal = () => {
    //     setModal(false)
    //     setModalContent(null)
    // }

    const getFullDetails = async (idRecipe: string) => {
        const resp = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`
        );
        const { drinks } = await resp.json();
        setRecipeFullDetails(drinks[0]);
    };

    const handleClickToObtainId = async (id: string) => {
        await getFullDetails(id);
    };

    return (
        <ModalContext.Provider
            value={{
                recipeFullDetails,
                handleClickToObtainId,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};

export { ModalContext, ModalContextProvider };
