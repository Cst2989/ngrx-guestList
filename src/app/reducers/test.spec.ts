import types from '../constants/';
import { people } from './';


describe("Reducers", () => {
    const guest = 'John Johnington'
    it("should return the default state when nothing is passed", () => {
        expect(people(undefined, {})).toEqual([]);
    });
    it("should return new state when addGuest is dispached", () => {
        const action = {
            type: types.ADD_GUEST,
            payload: {
                id: 1
                guest
            }
        };
        const expectedState = [
            {
                id: 1,
                guest: guest
            }
        ];
        expect(people(undefined, action)).toEqual(expectedState);
    })
})
