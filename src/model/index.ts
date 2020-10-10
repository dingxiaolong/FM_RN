import homeModel from './home'

const models = [homeModel];


export type RootStates = {
    home : typeof homeModel.state
}
export default models;