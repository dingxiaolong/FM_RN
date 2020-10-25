import axios from 'axios'
import {Effect, Model, ReducersMapObjectWithEnhancer, SubscriptionsMapObject} from 'dva-core-ts'
import { ImageStore } from 'react-native'
// import {Reducer} from 'redux'
import { Reducer } from 'react';
import storage from '../config/storage'
import {load} from '../config/storage'
export interface ICategory {
    id: string,
    name: string,
    classify?: string,
    selected?: boolean
}

const CATEGORY_URL = '/mock/11/bear/carousel';


export interface CategoryModelState {
    myCategorys: ICategory[];
    categorys: ICategory[];
}
interface CategoryModel extends Model{
    namespace: string;
    state: CategoryModelState;
    reducers: {
        setState: Reducer<CategoryModelState>
    };
    effects: {
        loadData: Effect
    };
    subscriptions: SubscriptionsMapObject;
}

const initState = {
    myCategorys: [
        {
            id: 'home',
            name: '推荐'
        },
        {
            id: 'vip',
            name: 'vip'
        }
    ],
    categorys: []
}

const categoryModel: CategoryModel = {
    namespace: 'category',
    state: initState,
    effects: {
        *loadData({type,payload},{put,call,select}) {
    //         key: string;
	// id?: string;
	// autoSync?: boolean;
	// syncInBackground?: boolean;
	// syncParams?: any;
            const myCategorys = yield call(load,{key: 'myCategorys'})
            const categorys = yield call(load,{key: 'categorys'})
            console.log('进入到方法了');
            if(myCategorys) {
                yield put({
                    type: 'setState',
                    payload: {
                         myCategorys,
                        categorys
                    }
                })
            }else {
                yield put({
                    type: 'setState',
                    payload: {
                        categorys
                    }
                })
            }
        } 
    },
    reducers: {
        setState(state = initState,{payload,type}) {
            return {
                ...state,
                ...payload
            }
        }
    },
    subscriptions: {
        setup({dispatch}) {
            console.log('000000000');
            dispatch({type: 'loadData'})
        },
        asyncStore() {
            
            storage.sync.categorys = async () => {
                const data = await axios.get(CATEGORY_URL);
                console.log('同步获取到数据了');
                return data;
            },
            storage.sync.myCategorys = async () => {
                // const data = await Axios.get(CATEGORY_URL);
                console.log('我的收藏同步获取到数据了');
                return null;
            }
        }
    }
}

export default categoryModel;