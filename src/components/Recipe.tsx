import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import { RecipesContext } from "../context/RecipesContext";
import { styled, Box, height } from "@mui/system";
import { Dialog, Modal, Typography } from "@mui/material";

// function getModalStyle() {
//     const top = 50;
//     const left = 50;

//     return {
//         top: `${top}%`,
//         left: `${left}%`,
//         transform: `translate(-${top}%, -${left}%)`,
//     };
// }

const StyledBox = styled(Box, {
    name: "StyledModal",
})({
    backgroundColor: "transparent",
});

const StyledModal = styled(Modal, {
    name: "StyledModal",
})({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    paddingX: "80px",
});

const Recipe = () => {
    const { recipes } = useContext(RecipesContext);
    const { handleClickToObtainId, recipeFullDetails } =
        useContext(ModalContext);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {recipes.map((recipe) => (
                <article key={recipe.idDrink} className="rounded-lg">
                    <header className="text-2xl font-semibold p-4 bg-slate-800 ">
                        {recipe.strDrink}
                    </header>
                    <figure>
                        <img
                            src={recipe.strDrinkThumb}
                            alt={recipe.strDrink}
                            className="rounded-lg mx-auto"
                        />
                        <figcaption className="p-4">
                            <button
                                className="py-2 px-4  bg-rose-500 hover:bg-rose-600 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                                onClick={() => {
                                    handleClickToObtainId(recipe.idDrink);
                                    handleOpen();
                                }}
                            >
                                See more about{" "}
                            </button>
                            <StyledModal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <StyledBox>
                                    <figure>
                                        <img
                                            src={
                                                recipeFullDetails.strDrinkThumb
                                            }
                                            alt={recipeFullDetails.strDrink}
                                            className="w-[312px] mx-auto"
                                        />
                                    </figure>
                                    <Typography
                                        id="modal-modal-title"
                                        variant="h6"
                                        component="h2"
                                    >
                                        {recipeFullDetails.strDrink}
                                    </Typography>
                                    <Typography
                                        id="modal-modal-description"
                                        sx={{ mt: 2 }}
                                    >
                                        <h2>Intructions</h2>
                                        {recipeFullDetails.strInstructions}
                                    </Typography>
                                </StyledBox>
                            </StyledModal>
                        </figcaption>
                    </figure>
                </article>
            ))}
        </section>
    );
};

export default Recipe;
