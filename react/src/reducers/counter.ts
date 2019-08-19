import {Types, ActionState, CounterState} from '../types/counter'
import {Reducer} from "redux";

export const INITIAL_STATE: CounterState = {
    count: 0
};

const counter: Reducer<CounterState, ActionState> = (state = INITIAL_STATE, action: ActionState) => {
    switch (action.type) {
        case Types.INCREMENT: {
            return {
                ...state,
                count: ++state.count > 10 ? 10 : state.count
            }
        }
        case Types.DECREMENT: {
            return {
                ...state,
                count: --state.count < 0 ? 0 : state.count
            }
        }
        default: {
            return state;
        }
    }
};
export default counter;
