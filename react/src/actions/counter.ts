import Types from '../types/counter';


export const increment = () => ({
    type: Types.INCREMENT_ASYNC,
});

export const decrement = () => ({
    type: Types.DECREMENT_ASYNC
});
