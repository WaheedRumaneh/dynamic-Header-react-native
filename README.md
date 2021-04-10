# dynamic-header-react-native
A react native dynamic header with simple animation (work on scroll down &amp; up) with dynamic design and data to scroll the page

## installation 
npm i dynamic-header-react-native

## preview
![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/45339873/114274948-609a6580-9a29-11eb-858e-4e06d8f78c0e.gif)


## support for grow up
<a href="https://www.buymeacoffee.com/WaheedRumane" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

## props 
Name | Default | Description
------------ | ------------- | -------------
backgroundColor | '#fff' | the background color of main header
taps | [] | an array of object that contain **title** and **refName**
duration | 1000 | the animation duration of hide & show header in ms
headerStyle | {} | custom main header style
notActiveHeaderItem | {} | the style of non active header item
notActiveHeaderText | {} | the style of non active header text 
activeHeaderText | {} | the style of active header text 
mainPageSections | '' | all sections in main page as component with the same **Ref** as **Taps Ref**
appearAndHideHight | 300 | the height when the header should appear
mainSectionsRef | {} | object of **Ref Name** that set for sections
WidthAdded | -130 | the width added to header item when scroll to set active tab
HightAdded | -200 | the height added to main page section when scroll to set active tab

## example 
```javascript
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
```

## Anyone can edit or customize the package as well 
