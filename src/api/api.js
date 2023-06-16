import axios from "axios";

const baseUrl = 'https://api.spoonacular.com/';

const getData = async (URL, paramOptions ) => {    
    const params = {
        'apiKey': process.env.REACT_APP_SPOONACULAR_API_KEY,
        ...paramOptions
    }

    const options = {
        method: 'GET',
        url: URL,
        params: params,
        headers: {
          'Content-Type': 'application/json'
        }
    };

    try {
        return await axios.request(options);
    } catch (error) {
        return error
    }
}

export const getAutoCompleteRecipes = ( query='chicken', number=5 ) => {
    const url = baseUrl + `recipes/autocomplete`;
    return getData(url, {query, number});
}

export const getRecipesByfilter = (options) => {
    const url = baseUrl + 'recipes/complexSearch'
    return getData(url, options);
}

export const getRecipeInfo = (id) => {
    const url = baseUrl + `recipes/${id}/information`
    const options = {
        includeNutrition: true
    }
    return getData(url, options);
}

export const getRandomRecipes = (tags='', number=5) => {
    const url = baseUrl + 'recipes/random';
    return getData(url, { tags, number });
}

export const getSimilarRecipes = (id, number=5) => {
    const url = baseUrl + `recipes/${id}/similar`;
    return getData(url, { number });
}