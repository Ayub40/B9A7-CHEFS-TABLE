import './Recipe.css'

const Recipe = ({ recipe }) => {
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe;

    return (
        <div className="mt-8 md:container md:mx-auto country">
            <img src={recipe_image} alt="" />
            <h3 className='text-start'>{recipe_name}</h3>
            <p className='text-start text-[#878787]'>{short_description}</p>
            <hr className="border-dashed border-2"></hr>
            <h3 className='text-start'>Ingredients: 6</h3>
            <ul className='text-start list-disc ml-3'>
                {
                    recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))
                }
            </ul>
            <div className='flex justify-around'>
                <p>{preparing_time}</p>
                <p>{calories}</p>
            </div>
            <button className="btn btn-accent want p-2 rounded-full  ">Want to Cook</button>
        </div>
    );
};

export default Recipe;