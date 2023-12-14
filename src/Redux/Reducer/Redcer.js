import { data } from '../../Assets/data';

const INITIAL_STATE = data;

function Reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        default:
            return state;
        case 'ADD_FAV':
            return { ...state, Favoris: [...state.Favoris, action.payload] };
        case 'DEL_FAV':
            return { ...state, Favoris: state.Favoris.filter(el => el.id !== action.payload) };
        case 'ADD_CART':
            return { ...state, AddCart: [...state.AddCart, action.payload] };
        case 'DEL_CART':
            return { ...state, AddCart: state.AddCart.filter(el => el.id !== action.payload) };
        case "Add_User":
            return { ...state, Users: [...state.Users, action.payload] }
        case "Update_User":
            return {
                ...state,
                Users: state.Users.map((user) => {
                    if (user.id === action.payload.id) {
                        return {
                            ...user,
                            nom: action.payload.nom,
                            email: action.payload.email,
                            function: action.payload.function,
                        };
                    }
                    return user;
                }),
            };
        case "Delete_User":
            return { ...state, Users: [...state.Users.filter((u) => u.id !== action.payload)] }
        case 'ADD_PRODUCT_COMPAGNE':
            return { ...state, Campagne: [...state.Campagne, action.payload] };
        case 'ADD_PRODUCT_Villes_emblematiques':
            return { ...state, Villes_emblematiques: [...state.Villes_emblematiques, action.payload] };
        case 'ADD_PRODUCT_Desert':
            return { ...state, Desert: [...state.Desert, action.payload] };
        case 'ADD_PRODUCT_Ville':
            return { ...state, Ville: [...state.Ville, action.payload] };
        case 'DEL_PRODUCT_COMPAGNE':
            return { ...state, Campagne: state.Campagne.filter(el => el.id !== action.payload) };
        case 'DEL_PRODUCT_Villes_emblematiques':
            return { ...state, Villes_emblematiques: state.Villes_emblematiques.filter(el => el.id !== action.payload) };
        case 'DEL_PRODUCT_Ville':
            return { ...state, Ville: state.Ville.filter(el => el.id !== action.payload) };
        case 'DEL_PRODUCT_Desert':
            return { ...state, Desert: state.Desert.filter(el => el.id !== action.payload) };
        case 'ADD_RESERVATION':
            return { ...state, Reservation: [...state.Reservation, action.payload] };
    }
}

export default Reducer;
