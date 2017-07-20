import types from '../constants/';

let guestId = 0;

const nextId = () => {
    guestId += 1;
    return guestId;
};

const actions = {
    addGuest(name) {
        return {
            type: types.ADD_GUEST,
            payload: {
                id: nextId(),
                guest: name
            }
        }
    }

};

export default actions;
