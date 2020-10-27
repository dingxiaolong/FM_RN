//import liraries
import React, { Component } from 'react';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import { View, Text, StyleSheet } from 'react-native';
import { isDate } from 'lodash';

interface Ipros {
    onpress: () => void,
    isEdit: boolean
}

// create a component
class HeadRightBtn extends Component<Ipros> {
    onSubmit = () => {
        const {onpress} = this.props;
        onpress();
    }
    state = {
        isEdit : this.props.isEdit
    }
    render() {
        const {onpress, isEdit} = this.props;
        
        return (
            <HeaderButtons>
                <Item title={this.props.isEdit ? '完成' : '编辑'} onPress={this.onSubmit}/>
            </HeaderButtons>
        );
    }

    setEdit = (edit: boolean) => {
        console.log('bei dianji');
        this.setState({
            isEdit: edit
        })
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default HeadRightBtn;
