export interface CounterState {
    count: number;
}

export interface ActionState {
    type: string
}

export enum Types {
    'INCREMENT_ASYNC' = 'INCREMENT_ASYNC',
    'INCREMENT' = 'INCREMENT',
    'DECREMENT_ASYNC' = 'DECREMENT_ASYNC',
    'DECREMENT' = 'DECREMENT'
}

export default Types;
