import { DvaLoadingState } from 'dva-loading-ts';
import categoryModel from './category';
import homeModel from './home'

const models = [homeModel,categoryModel];


export type RootStates = {
    home : typeof homeModel.state,
    categoty: typeof categoryModel.state,
    loading: DvaLoadingState
}
export default models;