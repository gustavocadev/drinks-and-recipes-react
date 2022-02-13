import Header from "./components/Header";
import { CategoryProvider } from "./context/CategoryContext";
import Form from "./components/Form";
import { RecipesProvider } from "./context/RecipesContext";
import Recipe from "./components/Recipe";
import { ModalContextProvider } from "./context/ModalContext";
const App = () => {
    return (
        <CategoryProvider>
            <RecipesProvider>
                <ModalContextProvider>
                    <Header />
                    <section className="px-4 lg:px-32">
                        <header className="text-center text-2xl font-semibold">
                            <h2>Search drinks by category or ingredient</h2>
                        </header>
                        <Form />
                        <Recipe />
                    </section>
                </ModalContextProvider>
            </RecipesProvider>
        </CategoryProvider>
    );
};

export default App;
