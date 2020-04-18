import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/mealsAction";

const initialState = {
    allMeals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal => action.mealId);
            if (existingIndex >= 0) {
                const updatedFavMeals = [...state.favoriteMeals];
                updatedFavMeals.splice(existingIndex, 1);
                return {
                    ...state,
                    favoriteMeals: updatedFavMeals
                };
            }
            else {
                const mealToAdd = state.allMeals.find(meal => meal.id === action.mealId);
                return {
                    ...state,
                    favoriteMeals: state.favoriteMeals.concat(mealToAdd)
                };
            }

        default:
            return state;
    };

    return state;
}

export default mealsReducer;