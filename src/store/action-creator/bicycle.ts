import {BicecleActionTypes, BicycleActions} from "../../types/bicycle";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchBicycle = () => {
    return async (dispatch: Dispatch<BicycleActions>) => {
        try {
            dispatch({type: BicecleActionTypes.FETCH_BICYCLE})
            const response = await axios.get('http://api.citybik.es/v2/networks')
            dispatch({type: BicecleActionTypes.FETCH_BICYCLE_SUCCESS, payload: response.data.networks})
        } catch (e) {
            dispatch({
                type: BicecleActionTypes.FETCH_BICYCLE_ERROR,
                payload: "Произошла ошибка при загрузке"
            })
        }
    }
}

export const fetchBicycleCompanyById = (id) => {
    return async (dispatch: Dispatch<BicycleActions>) => {
        try {
            const response = await axios.get(`http://api.citybik.es/v2/networks/${id}`)
            dispatch({type: BicecleActionTypes.FETCH_BICYCLE_BY_ID, payload: response.data.network.stations})
        } catch (e) {
            dispatch({
                type: BicecleActionTypes.FETCH_BICYCLE_ERROR,
                payload: "Произошла ошибка при загрузке"
            })
        }
    }
}

export const saveID = (id) => {
    return async (dispatch: Dispatch<BicycleActions>) => {
        try {
            dispatch({type: BicecleActionTypes.FETCH_BICYCLE_SAVE_ID, payload: id})
        } catch (e) {
            dispatch({
                type: BicecleActionTypes.FETCH_BICYCLE_ERROR,
                payload: "Произошла ошибка при загрузке"
            })
        }
    }
}