
import { Effect, Model } from 'dva-core-ts'
import { Reducer } from 'react';


export interface HomeStates {
    num: number
}

interface HomeModel extends Model {
    namespace: string;
    state: HomeStates;
    reducers: {
        add: Reducer<HomeStates>
    };
    effects?: {
        asyncAdd: Effect
    };
}

const initialStates = { num: 0 };

function delay(timeout: number) {
    return new Promise(
        resolve => {
            setTimeout(resolve, timeout);
        }
    )
}

const homeModel: HomeModel = {
    namespace: 'home',
    state: initialStates,
    reducers: {
        add(state = initialStates, { payload }) {
            return {
                ...state,
                num: state.num + payload.num
            }
        }
    },
    effects: {
        *asyncAdd({payload},{call,put}) {
            yield call(delay,1000);
            yield put(
                {
                    type: 'add',
                    payload
                }
            )
        }
    }
} 

export default homeModel;