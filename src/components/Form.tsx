import { FormEvent, useContext, useState } from "react";
import { CategoryContext } from "../context/CategoryContext";
import { RecipesContext } from "../context/RecipesContext";
const Form = () => {
    const { categories } = useContext(CategoryContext);
    const { setSearch, search, handleSubmit } = useContext(RecipesContext);

    const { category, ingredient } = search;

    return (
        <form
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8"
            onSubmit={handleSubmit}
        >
            <section className="flex flex-col ">
                <input
                    type="text"
                    id="strIngredient1"
                    name="strIngredient1"
                    placeholder="Search by ingredient"
                    className="rounded-lg border-transparent flex-1 appearance-none  w-full py-2 px-4 bg-slate-800 text-gray-200 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    onChange={(e) =>
                        setSearch({ ...search, ingredient: e.target.value })
                    }
                    value={ingredient}
                />
            </section>
            <section className="flex flex-col ">
                <select
                    name="category"
                    id="category"
                    className="rounded-lg border-transparent flex-1 appearance-none  w-full py-2 px-4 bg-slate-800 text-gray-200 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 
                            focus:ring-purple-600 focus:border-transparent"
                    onChange={(e) =>
                        setSearch({ ...search, category: e.target.value })
                    }
                    value={category}
                >
                    <option value="">Select a category</option>
                    {categories &&
                        categories.map((category) => {
                            return (
                                <option
                                    key={category.strCategory}
                                    value={category.strCategory}
                                >
                                    {category.strCategory}
                                </option>
                            );
                        })}
                </select>
            </section>

            <button
                type="submit"
                className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
            >
                Search
            </button>
        </form>
    );
};

export default Form;
