import types from '../constants/';
import actions from './';

describe("Actions", () => {
    const guest = 'John Johnington'
    it("should return a correct payload after addGuest() action is called", () => {
        const expected = {
            type: types.ADD_GUEST,
            payload: {
                id: 1,
                guest: guest
            }
        };
        expect(actions.addGuest(guest)).toEqual(expected);
    });
})
