import axios from 'axios'
import {Model, Effect} from 'dva-core-ts'
import { Reducer } from 'react'


const ALBUMS_URL = "/mock/11/bear/album/list";

export interface IProgram {
    id: string,
    title: string,
    playNum: number,
    duration: string,
    date: string
}

export  interface IAutho {
    name: string,
    avator: string,
}

export interface IAlbumState {
    id: string,
    title: string,
    summary: string,
    thumbmailImg: string,
    intruduction: string,
    autho: IAutho,
    list: IProgram[]
}

interface IAlbumModel extends Model {
    namespace: string;
    state: IAlbumState;
    reducers: {
        setState: Reducer<IAlbumState>
    };
    effects: {
        fetchAlums:  Effect
    };
    // subscriptions?: SubscriptionsMapObject;
}

const initAlbumState = {
    id: "",
    title: '',
    summary: '',
    thumbmailImg: '',
    intruduction: '',
    autho: {
        name: '',
        avator: '',
    },
    list: []
}


const albummodel: IAlbumModel = {
    namespace: 'albums',
    state: initAlbumState,
    reducers: {
        setState(state = initAlbumState,{payload}) {
            return {
                ...state,
                ...payload
            }
        }
    },
    effects: {
        *fetchAlums({type,payload},{put,call}) {
            const {data} = yield call(axios.get,ALBUMS_URL);
            yield put(
                {
                    type: 'setState',
                    payload: data
                }
            )
        }
    },
}

export default albummodel;