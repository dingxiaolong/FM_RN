
import { Effect, Model } from 'dva-core-ts'
import { Reducer } from 'react';
import axios from 'axios'


export interface ICarousel {
    id: string,
    image: string,
    colors: [string, string]
}
export interface IGuess {
    id: string,
    image: string,
    title: string,
    remark: string,
    palyed: number,
    playing: number
}

export interface IChannel {
    id: string,
    image: string,
    title: string,
    remark: string,
    palyed: number,
    playing: number
}


export interface HomeStates {
    carousels: ICarousel[],
    guesses: IGuess[],
    channels: IChannel[],
}

interface HomeModel extends Model {
    namespace: string;
    state: HomeStates;
    reducers: {
        setStatus: Reducer<HomeStates>
    };
    effects?: {
        fetchCarousels: Effect,
        fetchGuess: Effect,
        fetchChannel: Effect,
    };
}


const CAROUSEL_URL = '/mock/11/bear/carousel';
const GUESS_URL = '/mock/11/bear/guess';
const CHANNEL_URL = '/mock/11/bear/channel';

const initialStates = { carousels: [], guesses: [], channels: [] };

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
        *fetchCarousels({ payload }, { call, put }) {
            // yield call(delay,1000);
            const benDiData = {
                "status": 100,
                "msg": "success",
                "data": [{
                    "id": "340000200611182443",
                    "image": "http://39.105.213.120/images/28.jpg",
                    "colors": ["#98f279", "#f279bc"]
                }, {
                    "id": "350000199604304859",
                    "image": "http://39.105.213.120/images/22.jpg",
                    "colors": ["#79dff2"]
                }, {
                    "id": "330000199810067213",
                    "image": "http://39.105.213.120/images/22.jpg",
                    "colors": ["#f2e179", "#be79f2", "#79f29b", "#f2797a"]
                }, {
                    "id": "210000198112139708",
                    "image": "http://39.105.213.120/images/23.jpg",
                    "colors": ["#799df2"]
                }, {
                    "id": "810000199802176705",
                    "image": "http://39.105.213.120/images/44.jpg",
                    "colors": ["#c1f279"]
                }]
            }
            yield put(
                {
                    type: 'setStatus',
                    payload: {
                        carousels: benDiData.data
                    }//传递一个对象payload给同步方法赋值
                }
            )
            console.log('轮播图数据本地===');
            const { data } = yield call(axios.get, CAROUSEL_URL)
            console.log('轮播图数据');
            // yield put(//put作用和首页的dispatch功能类似======
            //     {
            //         type: 'add',
            //         payload
            //     }
            // )
        },
        *fetchGuess({ payload }, { call, put }) {
            // yield call(delay,1000);
            const { data } = yield call(axios.get, GUESS_URL)
            // console.log(data);
            yield put(
                {
                    type: 'setStatus',
                    payload: {
                        guesses: data
                    }//传递一个对象payload给同步方法赋值
                }
            )
        },
        *fetchChannel({ payload }, { call, put }) {
            // yield call(delay,1000);
            const { data } = yield call(axios.get, CHANNEL_URL)
            console.log('获取频道列表数据', data);
            yield put(
                {
                    type: 'setStatus',
                    payload: {
                        channels: data
                    }//传递一个对象payload给同步方法赋值
                }
            )
        }
    }
}

export default homeModel;