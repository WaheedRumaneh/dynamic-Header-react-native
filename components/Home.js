import React, { Component } from 'react';
import { Dimensions, View, Image, Text, TouchableOpacity, I18nManager, ScrollView } from 'react-native';
import DynamicHeader from './DynamicHeader';
var SectionArray = {
    first: '',
    second: '',
    third: '',
    forth: '',
    fifth: '',
}
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    mainPageSections() {
        return (
            <View>
                <View
                    onLayout={event => SectionArray['first'] = event.nativeEvent.layout}
                    style={{ backgroundColor: '#FFCCCC', marginBottom: 5, height: 500, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold' }}>FirstSection</Text>
                </View>
                <View
                    onLayout={event => SectionArray['second'] = event.nativeEvent.layout}
                    style={{ backgroundColor: '#EDCCFF', marginBottom: 5, height: 500, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold' }}>SecondSection</Text>
                </View>
                <View
                    onLayout={event => SectionArray['third'] = event.nativeEvent.layout}
                    style={{ backgroundColor: '#CCFFFA', marginBottom: 5, height: 500, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold' }}>ThirdSection</Text>
                </View>
                <View
                    onLayout={event => SectionArray['forth'] = event.nativeEvent.layout}
                    style={{ backgroundColor: '#CCFFDC', marginBottom: 5, height: 500, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold' }}>ForthSection</Text>
                </View>
                <View
                    onLayout={event => SectionArray['fifth'] = event.nativeEvent.layout}
                    style={{ backgroundColor: '#FAFFCC', marginBottom: 5, height: 500, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold' }}>FifthSection</Text>
                </View>
            </View>
        )
    }
    render() {

        return (
            // impotant flex: 1
            <View style={{ flex: 1 }}>
                <DynamicHeader
                    backgroundColor={'#fff'}
                    taps={
                        [
                            {
                                title: 'First Section',
                                refName: 'first',
                            },
                            {
                                title: 'Second Section',
                                refName: 'second',
                            },
                            {
                                title: 'Third Section',
                                refName: 'third',
                            },
                            {
                                title: 'Forth Section',
                                refName: 'forth',
                            },
                            {
                                title: 'Fifth Section',
                                refName: 'fifth',
                            },
                        ]
                    }
                    headerStyle={
                        {
                            backgroundColor: '#fff',
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 11,
                            },
                            shadowOpacity: 0.55,
                            shadowRadius: 14.78,

                            elevation: 22,
                        }
                    }
                    notActiveHeaderItem={
                        {
                            borderBottomColor: '#E9E8E8',
                            borderBottomWidth: 1,
                            height: 60,
                        }
                    }
                    activeHeaderItem={
                        {
                            borderBottomColor: '#135D81',
                            borderBottomWidth: 2,
                            height: 60,
                            backgroundColor: '#A1DFFE',
                            shadowColor: "#135D81",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.29,
                            shadowRadius: 4.65,

                            elevation: 7,
                        }
                    }
                    activeHeaderText={
                        {
                            fontSize: 14,
                            color: '#606060',
                            fontWeight: 'bold',
                        }
                    }
                    notActiveHeaderText={
                        {
                            fontSize: 14,
                            color: '#606060',
                        }
                    }
                    duration={1000}
                    mainPageSections={this.mainPageSections()}
                    mainSectionsRef={SectionArray}
                    appearAndHideHight={20}
                    activeBtnOnSectionHeight={200}
                />
            </View>
        )
    }
}