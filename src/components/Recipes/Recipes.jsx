import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import './Recipes.css'


const Recipes = () => {
    const [cooks, setCooks] = useState([]);


    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setCooks(data))
    }, [])
    return (
        <div className="mt-8 text-center md:container md:mx-auto md:w-2/3">
            <h1 className="text-5xl font-semibold">Our Recipes</h1>
            <p className="mt-2 text-[#878787]">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur elementum mauris aenean neque. </p>

            <div className="country-container">
                {
                    cooks.map(recipe => <Recipe
                        key={recipe.id}
                        recipe={recipe}
                    ></Recipe>)
                }
            </div>
        </div>
    );
};

export default Recipes;