import {ADD_EXPEDITION, EDIT_EXPEDITION, REMOVE_EXPEDITION} from './expedition.types';

export const addExpedition = (expedition) => {
    return {
        type: ADD_EXPEDITION,
        payload: expedition
    }
}

export const editExpedition = (expedition) => {
    return {
        type: EDIT_EXPEDITION,
        payload: expedition
    }
}

export const removeExpedition = (expeditionId) => {
    return {
        type: REMOVE_EXPEDITION,
        payload: expeditionId
    }
} 