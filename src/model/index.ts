import { DvaLoadingState } from 'dva-loading-ts';
import homeModel from './home'

const models = [homeModel];


export type RootStates = {
    home : typeof homeModel.state,
    loading: DvaLoadingState
}
export default models;