import Axios from 'axios'
import {Effect, Model, ReducersMapObjectWithEnhancer, SubscriptionsMapObject} from 'dva-core-ts'
import { ImageStore } from 'react-native'
import {Reducer} from 'redux'
import {load, storage} from '../config/storage'
interface ICategory {
    id: string,
    name: string,
    classify?: string,
}

const CATEGORY_URL = '/mock/11/bear/carousel';


interface CategoryModelState {
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
            if(myCategorys) {
                yield put({
                    type: 'setState',
                    payload: {
                        myCategorys: myCategorys,
                        categorys: categorys
                    }
                })
            }else {
                yield put({
                    type: 'setState',
                    payload: {
                        categorys: categorys
                    }
                })
            }
        } 
    },
    reducers: {
        setState(state,{payload,type}) {
            return {
                ...state,
                ...payload
            }
        }
    },
    subscriptions: {
        setup({dispatch}) {
            dispatch({type: 'loadData'})
        },
        asyncStore() {
            storage.sync.categorys = async () => {
                const data = await Axios.get(CATEGORY_URL);
                return data;
            },
            storage.sync.myCategorys = async () => {
                const data = await Axios.get(CATEGORY_URL);
                return data;
            }
        }
    }
}

export default categoryModel;