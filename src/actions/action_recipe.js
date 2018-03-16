import ApiRecipe from '../api/ApiRecipe';
import { RECIPES } from '../utils/types';

const getrecipes = recipes => ({
  type: RECIPES,
  recipes,
});
const getRecipeRequest = () => dispatch => ApiRecipe.recipes.get()
  .then((response) => {
    dispatch(getrecipes(response));
  });

export default getRecipeRequest;
