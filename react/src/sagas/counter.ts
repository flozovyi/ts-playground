import {put, takeEvery, fork} from 'redux-saga/effects'

import Types from '../types/counter'

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));


export function* incrementAsync() {
    yield delay(1000);
    yield put({type: Types.INCREMENT})
}

export function* watchIncrementAsync() {
    yield takeEvery(Types.INCREMENT_ASYNC, incrementAsync)
}

export function* decrementAsync() {
    yield delay(1000);
    yield put({type: Types.DECREMENT})
}

export function* watchDecrementAsync() {
    yield takeEvery(Types.DECREMENT_ASYNC, decrementAsync)
}

const counterSagas = [
    fork(watchIncrementAsync),
    fork(watchDecrementAsync)
];

export default counterSagas;
