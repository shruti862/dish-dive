import { useState } from "react";
import { useEffect } from "react";

const recipes = [
  {
    name: "Biryani",
    id: 1,
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&q=80&w=1788&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: `
      2 cups basmati rice
      500g chicken pieces
      2 onions, thinly sliced
      2 tomatoes, chopped
      2-3 green chilies, slit
      1/4 cup plain yogurt
      2 tablespoons biryani masala
      1/2 teaspoon turmeric powder
      1/2 teaspoon red chili powder
      1/4 cup fresh coriander leaves, chopped
      1/4 cup fresh mint leaves, chopped
      2 tablespoons ghee or cooking oil
      Salt to taste
      Water
    `,
    recipe: `
      1.) Wash the rice and soak it in water for 30 minutes. Drain and set aside.
      2.) In a large, heavy-bottomed pot, heat the ghee or oil over medium heat. 
      3.)Add the sliced onions and sauté until they turn golden brown. Remove half of the fried onions and set them aside for garnishing.
      4.) Add the chicken pieces to the pot and sauté until they turn white. Add the chopped tomatoes, green chilies, biryani masala, turmeric, and red chili powder. Cook until the tomatoes soften.
      5.) Add the yogurt and sauté for a few minutes until the chicken is partially cooked and the mixture thickens.
      6.) Layer the soaked and drained rice on top of the chicken mixture. Spread half of the chopped mint and coriander leaves over the rice.
      7.) Add enough water to cover the rice (approximately 2 cups). Season with salt. Bring to a boil, then reduce the heat to low, cover with a tight-fitting lid, and simmer for 20-25 minutes or until the rice is cooked and the chicken is tender.
      8.) Once cooked, gently fluff the biryani with a fork, mixing the chicken and rice together.
      9.) Garnish with the remaining fried onions, mint, and coriander leaves.
      10.) Cover the pot and let it sit for 10-15 minutes to allow the flavors to meld.
      11.) Serve the chicken biryani hot with raita or a side salad.}
    `
  },
{name:"Rogan Josh",
id:2,
image:"https://media.istockphoto.com/id/608005280/photo/mutton-rogan-josh-mutton-curry-indian-cuisine.jpg?s=2048x2048&w=is&k=20&c=0pTqPUVieOqLV-82u4X969mbkS3f-_-gRg8trqsrY0o=",
ingredients:
`500g boneless lamb or mutton, cubed
2 onions, finely sliced
2 tomatoes, chopped
2 tablespoons cooking oil or ghee (clarified butter)
2 teaspoons ginger-garlic paste
2 teaspoons Rogan Josh spice blend (readily available or make your own)
1/2 teaspoon red chili powder (adjust to taste)
1/2 teaspoon ground fennel seeds
1/2 teaspoon ground ginger
1/2 teaspoon ground cardamom
1/2 teaspoon ground cinnamon
Salt to taste
Fresh coriander leaves for garnish`,
recipe:`1.)Heat oil or ghee in a heavy-bottomed pan over medium heat.
2.)Add sliced onions and sauté until they turn golden brown.
3.)Add ginger-garlic paste and sauté for a couple of minutes until the raw smell disappears.
4.)Add the Rogan Josh spice blend and sauté for another 2-3 minutes.
5.)Stir in the chopped tomatoes and cook until they turn soft and the oil separates from the mixture.
6.)Add the cubed lamb or mutton and brown it on all sides.
7.)Add red chili powder, ground fennel seeds, ground ginger, ground cardamom, ground cinnamon, and salt. Stir to coat the meat evenly with the spices.
8.)Add enough water to cover the meat and bring it to a boil.
9.)Reduce the heat, cover, and simmer for about 1.5 to 2 hours, or until the meat is tender and the sauce thickens. Add more water if necessary.
10.)Garnish with fresh coriander leaves.
11.)Serve hot with steamed rice or naan.`},

{name:"Kathi Roll",
id:3,
image:"https://media.istockphoto.com/id/1400256468/photo/mix-vegetable-kathi-roll.jpg?s=2048x2048&w=is&k=20&c=HUzw1YjJmeSEJDx82ShvEFnE0ClDTjIk3UQ2ctlGxZU=",
ingredients:`1 cup boneless chicken pieces (cut into thin strips)
1 tablespoon oil
1 small onion (sliced)
1 teaspoon ginger-garlic paste
1/2 teaspoon turmeric powder
1 teaspoon red chili powder
1 teaspoon garam masala
Salt to taste
2-3 tablespoons yogurt
Fresh coriander leaves (chopped)
Lemon juice
2-4 parathas or flatbreads
Sliced onions and green chilies (for garnish)`,
recipe:`1.)Heat oil in a pan. Add sliced onions and sauté until they turn golden brown.

2.)Add ginger-garlic paste and sauté for a minute or two until the raw smell disappears.

3.)Add the chicken strips and cook until they turn white and start to brown.

4.)Add turmeric powder, red chili powder, garam masala, and salt. Cook the chicken until it's tender and fully cooked.

5.)Stir in the yogurt, fresh coriander leaves, and a squeeze of lemon juice. Cook for a few more minutes until the chicken is coated with the spices.

6.)Warm the parathas or flatbreads on a griddle or in a microwave.

7.)Place a portion of the chicken filling on each paratha. Add some sliced onions and green chilies for extra flavor.

8.)Roll the paratha around the filling, securing it with foil or parchment paper, if needed.

Your Chicken Kathi Roll is ready to enjoy!`},

{name:"Misal Pav",
id:4,
image:"https://media.istockphoto.com/id/1442926365/photo/famous-maharashtrian-cuisine-street-food-called-misal-pav-which-includes-spicy-curry-sprouts.jpg?s=2048x2048&w=is&k=20&c=sP0KGmVYueCDFyVBocP6qxlCyjhOrWfnZJbAZDauJYQ=",
ingredients:`1 cup sprouted moth beans (matki)
1 small onion, finely chopped
1 small tomato, finely chopped
2-3 cloves garlic, minced
1-inch piece of ginger, minced
1/2 teaspoon turmeric powder
2 teaspoons Misal masala (spice blend)
Salt to taste
2 tablespoons oil
2-3 cups water
Fresh coriander leaves, chopped, for garnish
Lemon wedges
Pav (soft bread rolls) for serving`,
recipe:`1.)Heat oil in a pan and add the minced garlic and ginger. Sauté for a minute until fragrant.

2.)Add the chopped onions and sauté until they become translucent.

3.)Add the chopped tomatoes and cook until they soften.

4.)Stir in the turmeric powder and Misal masala. Sauté for a minute to roast the spices.

5.)Add the sprouted moth beans and mix well.

6.)Pour in water, season with salt, and bring the mixture to a boil. Then, simmer for 20-25 minutes or until the beans are tender.

7.)Mash some of the sprouted beans to thicken the curry.

8.)Serve the Misal hot, garnished with chopped fresh coriander leaves and a squeeze of lemon juice.

9.)Serve with pav (soft bread rolls) on the side`}

];


export default function App() {
  const[recipeList,setRecipeList]=useState(recipes);
  const[showAddRecipe,setShowAddRecipe]=useState(false);
  const[selectedRecipe,setSelectedRecipe]=useState(null);
  const[selectedIngredient,setSelectedIngredient]=useState(null);
  function handleNewRecipe(){
    setShowAddRecipe((show)=>!show);
    setSelectedRecipe(null);
    setSelectedIngredient(null);
   
  }
  function handleSelectedRecipe(recipe){
    setSelectedRecipe((curr)=>curr?.id!==recipe.id?recipe:null);
    setSelectedIngredient(null);
      setShowAddRecipe(null);
  }
  function handleSelectedIngredient(ingredient){
    setSelectedIngredient((curr)=>curr?.id!==ingredient.id?ingredient:null);
    setSelectedRecipe(null);
    setShowAddRecipe(null);
      
  }
  function addNewRecipe(newRecipe){
    setRecipeList((recipes)=>[...recipes,newRecipe]);
    setShowAddRecipe(null);
  }
  
 
  const handleEdit = (editedItem) => {
    // Update the recipes array with the edited recipe. You can do this based on the recipe's index or a unique identifier.
    // For example, you can create a new array and replace the old recipe with the edited one.
    const updatedRecipes = recipeList.map((recipe) => {
      if (recipe.id === editedItem.id) {
        return editedItem;
      }
      return recipe;
    });

    setRecipeList(updatedRecipes);
  };
  return (<><Navbar/>
    <div className="app">
       <RecipeList onAddNewRecipe={handleNewRecipe} showAddRecipe={showAddRecipe} onSelectRecipe={handleSelectedRecipe} selectedRecipe={selectedRecipe} onSelectIngredient={handleSelectedIngredient} selectedIngredient={selectedIngredient} recipeList={recipeList}/>
      {showAddRecipe && <AddNewRecipe onAdd={addNewRecipe}/>}
      {selectedRecipe && <ShowRecipe selectedRecipe={selectedRecipe} onEdit={handleEdit}/>}
      {selectedIngredient && <ShowIngredients selectedIngredient={selectedIngredient} onEdit={handleEdit}/>}
    </div>
    </>
  );
}

function Navbar(){
  return<nav><h1>🍝 DishDive 🍚🍴</h1></nav>
}
function RecipeList({onAddNewRecipe,showAddRecipe,selectedRecipe,onSelectRecipe,onSelectIngredient,selectedIngredient,recipeList}){
  return(
  <ul>{recipeList.map((recipe)=>(<Recipe  key={recipe.id} recipe={recipe} onSelectRecipe={onSelectRecipe}  onSelectIngredient={onSelectIngredient} />))}
   <div className="btn">
       <Button onClick={onAddNewRecipe}>{showAddRecipe ?"Close":"Add New Recipe"}</Button>
       </div>

  </ul>
    );
}
function Recipe({recipe,onSelectRecipe,onSelectIngredient}){
  return(<li>
    <div className="dish">
    <img src={recipe.image} alt={recipe.name}/>
    <h3>{recipe.name}</h3>
    </div>
    <Button  onClick={()=>onSelectIngredient(recipe)}>Show ingredients</Button>
    <Button onClick={()=>onSelectRecipe(recipe)}>Show recipe</Button>
    
    </li>
  );
}
function AddNewRecipe({onAdd}){
  const [name,setName]=useState("");
  const[image,setImage]=useState("");
  const [ingredients,setIngredients]=useState(``);
  const[recipe,setRecipe]=useState(``);
  function handleSubmit(e){
   e.preventDefault();
   const newRecipe={
    name,
    id:crypto.randomUUID(),
    image,
    ingredients,
    recipe
   }
   onAdd(newRecipe);
   setImage("");
   setIngredients("");
   setName("");
   setRecipe("");
  }
  return(
    <form className="form-add-recipe" onSubmit={handleSubmit}>
      <label>Name of the dish</label>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <label>Image </label>
      <input type="text" value={image} onChange={(e)=>setImage(e.target.value)}/>
      <label>Ingredients Required</label>
      <textarea rows="5" cols="40"  value={ingredients} onChange={(e)=>setIngredients(e.target.value)}></textarea>
      <label>Recipe Instruction</label>
      <textarea rows="5" cols="40"  value={recipe} onChange={(e)=>setRecipe(e.target.value)}></textarea>

      <Button>Submit</Button>
    </form>  
  );
}
function Button({children,onClick}){
  return<button className="button" onClick={onClick}>{children}</button>
}
function ShowRecipe({selectedRecipe,onEdit}){
  const[editedRecipe,setEditedRecipe]=useState(selectedRecipe);
  const [originalRecipe, setOriginalRecipe] = useState(selectedRecipe);
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    setEditedRecipe(selectedRecipe);
  }, [selectedRecipe]);
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Save the edited recipe, for example, by sending it to an API or updating state.
    if (editedRecipe) {
      onEdit(editedRecipe);
      setOriginalRecipe(editedRecipe);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedRecipe(originalRecipe);
    setIsEditing(false);
  };
  return(
    <div className="recipe">
      <h2>Follow the below instructions to prepare {selectedRecipe.name}</h2>
      {isEditing ? (
        <div>
          <textarea rows="30" cols="80"
            type="text"
            value={editedRecipe ? editedRecipe.recipe : ''}
            onChange={(e) => setEditedRecipe({ recipe: e.target.value })}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (<div>
      {editedRecipe.recipe.split('\n').map((step, index) => (
          <li key={index}>{step.trim()}</li>
        ))} 
        </div>)}
       {!isEditing && <Button onClick={handleEditClick}>Edit recipe</Button>}
    </div>
  );
}
function ShowIngredients({selectedIngredient,onEdit}){
  const[editedIngredient,setEditedIngredient]=useState(selectedIngredient);
  const [originalIngredient, setOriginalIngredient] = useState(selectedIngredient);
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    setEditedIngredient(selectedIngredient);
  }, [selectedIngredient]);
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Save the edited recipe, for example, by sending it to an API or updating state.
    if (editedIngredient) {
      onEdit(editedIngredient);
      setOriginalIngredient(editedIngredient);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedIngredient(originalIngredient);
    setIsEditing(false);
  };
  return(
    <div className="recipe">
      <h2>Here are the all ingredients needed for making {selectedIngredient.name}</h2>
      {isEditing ? (
        <div>
          <textarea rows="20" cols="80"
            type="text"
            value={editedIngredient ? editedIngredient.ingredients : ''}
            onChange={(e) => setEditedIngredient({ ingredients: e.target.value })}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
      <div>
     {editedIngredient &&
            editedIngredient.ingredients &&
            editedIngredient.ingredients.split('\n').map((step, index) => (
              <li key={index}>{step.trim()}</li>
            ))}
        </div>)}
        {!isEditing &&<Button onClick={handleEditClick}>Edit ingredients</Button>}
    </div>
  );
}