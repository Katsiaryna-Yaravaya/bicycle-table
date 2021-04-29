export interface BicycleState {
    bicycle: any[],
    stations: any[],
    id: null | string,
    loading: boolean,
    error: null | string
}

export enum BicecleActionTypes {
    FETCH_BICYCLE = "FETCH_BICYCLE",
    FETCH_BICYCLE_SUCCESS = "FETCH_BICYCLE_SUCCESS",
    FETCH_BICYCLE_BY_ID = "FETCH_BICYCLE_BY_ID",
    FETCH_BICYCLE_ERROR = "FETCH_BICYCLE_ERROR",
    FETCH_BICYCLE_SAVE_ID = 'FETCH_BICYCLE_SAVE_ID'
}

interface FetchBicycleAction {
    type: BicecleActionTypes.FETCH_BICYCLE;
}

interface FetchBicycleSuccessAction {
    type: BicecleActionTypes.FETCH_BICYCLE_SUCCESS;
    payload: any
}

interface FetchBicycleErrorAction {
    type: BicecleActionTypes.FETCH_BICYCLE_ERROR;
    payload: string
}

interface FetchBicycleById {
    type: BicecleActionTypes.FETCH_BICYCLE_BY_ID;
    payload: any
}

interface FetchBicycleSaveId {
    type: BicecleActionTypes.FETCH_BICYCLE_SAVE_ID,
    payload: string
}

export type BicycleActions =
    FetchBicycleAction
    | FetchBicycleErrorAction
    | FetchBicycleSuccessAction
    | FetchBicycleById
    | FetchBicycleSaveId
