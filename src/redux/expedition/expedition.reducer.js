import {ADD_EXPEDITION, EDIT_EXPEDITION, REMOVE_EXPEDITION} from './expedition.types';
import {expeditionsData} from '../../api/expeditionsData';

const initialState = {
    expeditions: expeditionsData,
}

export default function expeditionReducer(state = initialState, {type, payload}) {
    switch (type) {
        case ADD_EXPEDITION:
            return {
                ...state,
                expeditions: [...state.expeditions, payload],
            };
        case EDIT_EXPEDITION:
            return {
                ...state,
                expeditions: state.expeditions.map((expedition) => expedition.id !== payload.id ? expedition : payload),
            }
        case REMOVE_EXPEDITION:
            return {
                ...state,
                expeditions: state.expeditions.filter((expedition) => expedition.id !== payload),
            }
        default:
            return state;
    }
}