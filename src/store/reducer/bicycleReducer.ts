import {BicecleActionTypes, BicycleActions, BicycleState} from "../../types/bicycle";

const initialState: BicycleState = {
    bicycle: [],
    id: null,
    stations: [],
    loading: false,
    error: null
}

export const bicycleReducer = (state = initialState, action: BicycleActions): BicycleState => {
    switch (action.type) {
        case BicecleActionTypes.FETCH_BICYCLE:
            return {
                loading: true,
                id: null,
                stations: [],
                error: null,
                bicycle: []
            }
        case BicecleActionTypes.FETCH_BICYCLE_SUCCESS:
            return {
                loading: false,
                id: null,
                stations: [],
                error: null,
                bicycle: action.payload
            }
        case BicecleActionTypes.FETCH_BICYCLE_ERROR:
            return {
                loading: false,
                id: null,
                stations: [],
                error: action.payload,
                bicycle: []
            }
        case BicecleActionTypes.FETCH_BICYCLE_SAVE_ID:
            return {
                ...state,
                id: action.payload
            }
        case BicecleActionTypes.FETCH_BICYCLE_BY_ID:
            return {
                ...state,
                stations: action.payload
            }
        default:
            return state
    }
}