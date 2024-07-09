import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import './Recipes.css'
import PropTypes from 'prop-types';

const Recipes = ({ handleWantTOCook }) => {
    const [cooks, setCooks] = useState([]);


    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setCooks(data))
    }, [])
    return (
        <div className="mt-8 items-center text-center md:container md:mx-auto md:w-1/2">
            <h1 className="text-5xl font-semibold">Our Recipes</h1>
            <p className="mt-2 text-[#878787]">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur elementum mauris aenean neque. </p>

            <div className="country-container">
                {
                    cooks.map(recipe => <Recipe
                        key={recipe.id}
                        recipe={recipe}
                        handleWantTOCook={handleWantTOCook}
                    ></Recipe>)
                }
            </div>
        </div>
    );
};

Recipes.propTypes = {
    handleWantTOCook: PropTypes.func
}

export default Recipes;