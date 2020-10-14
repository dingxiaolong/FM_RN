
import { Effect, Model } from 'dva-core-ts'
import { Reducer } from 'react';
import axios from 'axios'


interface ICarousel {
    id: string,
    image: string,
    colors: [string, string]
}

export interface HomeStates {
    carousels: ICarousel[]
}

interface HomeModel extends Model {
    namespace: string;
    state: HomeStates;
    reducers: {
        setStatus: Reducer<HomeStates>
    };
    effects?: {
        fetchCarousels: Effect
    };
}


const CAROUSEL_URL = '/mock/11/bear/carousel'
const initialStates = { carousels: [] };

// function delay(timeout: number) {
//     return new Promise(
//         resolve => {
//             setTimeout(resolve, timeout);
//         }
//     )
// }

const homeModel: HomeModel = {
    namespace: 'home',
    state: initialStates,
    reducers: {
        setStatus(state = initialStates, { payload }) {
            return {
                ...state,
                ...payload
            }
        }
    },
    effects: {
        *fetchCarousels({payload},{call,put}) {
            // yield call(delay,1000);
            const {data} = yield call(axios.get, CAROUSEL_URL)
            console.log(data);
            yield put(
                {
                    type: 'setStatus',
                    carousels: data
                }
            )

            // yield put(//put作用和首页的dispatch功能类似======
            //     {
            //         type: 'add',
            //         payload
            //     }
            // )
        }
    }
} 

export default homeModel;