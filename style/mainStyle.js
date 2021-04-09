import React, { Component } from 'react';
import {
    StyleSheet, Dimensions, Platform

} from 'react-native';
export const { width: width, height: height } = Dimensions.get('window');
export default class MainStyle extends Component {
    static returnStyles(IS_RTL) {

        var styles = StyleSheet.create({
            mainHeaderStyle: {
                flexDirection: 'row',
                position: 'absolute',
                zIndex: 100,
            },
            mainTapHorizantalScroll: {
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center'
            },
            mainHeaderItem: {
                paddingVertical: 10,
                paddingHorizontal: 10,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center'
            },
        });

        return styles;
    }
}
