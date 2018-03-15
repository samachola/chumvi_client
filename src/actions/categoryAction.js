import categoryApi from '../api/categoryApi';
import { CATEGORIES_LOADED } from '../utils/types';

const getcategories = categories => ({
  type: CATEGORIES_LOADED,
  categories,
});
const getCategoriesRequest = () => dispatch => categoryApi.categories.get()
  .then((response) => {
    dispatch(getcategories(response));
  });

export default getCategoriesRequest;
