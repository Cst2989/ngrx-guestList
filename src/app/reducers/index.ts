import types from '../constants/';

interface Action {
  type: string;
  payload: Object
};

export const people(state = [], action: Action) {
    switch(action.type) {
        case types.ADD_GUEST:
            return [
              ...state, {
                id: action.payload.id,
                guest: action.payload.guest,
              }
          ]
        default:
            return state;
    }
}
