import React, { Component } from 'react';
import { Dimensions, View, Image, Text, TouchableOpacity, ScrollView, I18nManager, Platform } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Container, Content } from 'native-base';
import MainStyle, { height } from '../style/mainStyle';
var IS_RTL = I18nManager.isRTL;
const styles = MainStyle.returnStyles(IS_RTL);
export default class DynamicHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: this.props.backgroundColor == undefined || this.props.backgroundColor == null ? '#fff' : this.props.backgroundColor,
            taps: this.props.taps == undefined ? [] : this.props.taps,
            duration: this.props.duration == undefined || this.props.duration == null ? 1000 : this.props.duration,
            headerStyle: this.props.headerStyle == undefined || this.props.headerStyle == null ? {} : this.props.headerStyle,
            notActiveHeaderItem: this.props.notActiveHeaderItem == undefined || this.props.notActiveHeaderItem == null ? {} : this.props.notActiveHeaderItem,
            activeHeaderItem: this.props.activeHeaderItem == undefined || this.props.activeHeaderItem == null ? {} : this.props.activeHeaderItem,
            notActiveHeaderText: this.props.notActiveHeaderText == undefined || this.props.notActiveHeaderText == null ? {} : this.props.notActiveHeaderText,
            activeHeaderText: this.props.activeHeaderText == undefined || this.props.activeHeaderText == null ? {} : this.props.activeHeaderText,
            mainPageSections: this.props.mainPageSections == undefined || this.props.mainPageSections == null ? '' : this.props.mainPageSections,
            appearAndHideHight: this.props.appearAndHideHight == undefined || this.props.appearAndHideHight == null ? 300 : this.props.appearAndHideHight,
            mainSectionsRef: this.props.mainSectionsRef == undefined || this.props.mainSectionsRef == null ? {} : this.props.mainSectionsRef,
            hideHEader: true,
            WidthAdded: this.props.WidthAdded == undefined || this.props.WidthAdded == null ? -130 : this.props.WidthAdded,
            HightAdded: this.props.HightAdded == undefined || this.props.HightAdded == null ? -200 : this.props.HightAdded,
            activeHeaderTap: '',
        };
        this._handleScroll = this._handleScroll.bind(this)
        this._handleOnMomentumScrollEnd = this._handleOnMomentumScrollEnd.bind(this)
    }
    changeActiveHeaderTab(value, name) {
        const HightAdded = this.state.HightAdded;
        this.setState({
            activeHeaderTap: value,
            scrollValue: this.props.mainSectionsRef[name].y + HightAdded,
        })
        this._scrollView.scrollTo({ y: this.props.mainSectionsRef[name].y + HightAdded, animated: true })
    }
    changeActiveTab(nativeEvent, tapBtn) {
        const WidthAdded = this.state.WidthAdded;
        var activeHeaderName = '';
        var closeToBottom = false
        this.state.taps.map((data, index) => {
            if (this.props.mainSectionsRef[data.refName].y - this.props.activeBtnOnSectionHeight <= nativeEvent.contentOffset.y) {
                activeHeaderName = data.refName
            } else if (
                index == Object.keys(this.state.taps).length - 1
            ) {
                nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >= nativeEvent.contentSize.height - 20;
                if (closeToBottom) {
                    {
                        this._scrollViewTab.scrollTo({ x: this[`${this.state.taps[this.state.taps.length - 1]['refName']}_btn`].x + WidthAdded, animated: true });
                        this.setState({
                            activeHeaderTap: this[`${this.state.taps[this.state.taps.length - 1]['refName']}_btn`],
                        })
                    }

                }
            }
        })
        if (this._scrollViewTab != undefined) {
            if (activeHeaderName != '')
                this._scrollViewTab.scrollTo({ x: this[`${activeHeaderName}_btn`].x + WidthAdded, animated: true });
        }
        if (!closeToBottom) {
            this.setState({
                activeHeaderTap: this[`${activeHeaderName}_btn`],
            })
        }
    }
    getTapsView(data, index) {
        return (
            <View
                key={index}
                onLayout={event => this[`${data.refName}_btn`] = event.nativeEvent.layout}
            >
                <TouchableOpacity
                    style={[styles.mainHeaderItem,
                    this.state.activeHeaderTap == this[`${data.refName}_btn`] ? [this.state.activeHeaderItem] : [this.state.notActiveHeaderItem]]}
                    onPress={() => this.changeActiveHeaderTab(this[`${data.refName}_btn`], data.refName)}
                >
                    <Text
                        style={[this.state.activeHeaderTap == this[`${data.refName}_btn`] ? [this.state.activeHeaderText] : [this.state.notActiveHeaderText]]}
                    >
                        {data.title}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
    _handleScroll(event) {
        const scop = this;
        var check = false;
        event.persist()
        if (event.nativeEvent.contentOffset.y >= (this.state.appearAndHideHight) && this.state.hideHEader) {
            check = true;
            this.setState({
                hideHEader: false,
            }, function () {
                if (event.nativeEvent != null && (event.nativeEvent.contentOffset.y == this.state.scrollValue))
                    this.changeActiveTab(event.nativeEvent)
            })
        } else if (event.nativeEvent.contentOffset.y < (this.state.appearAndHideHight) && !this.state.hideHEader) {
            check = true;
            this.setState({
                hideHEader: true,
            }, function () {
                if (event.nativeEvent != null && (event.nativeEvent.contentOffset.y == this.state.scrollValue))
                    this.changeActiveTab(event.nativeEvent)
            })
        }
        if (!check) {
            if (event.nativeEvent != null && (event.nativeEvent.contentOffset.y == this.state.scrollValue))
                this.changeActiveTab(event.nativeEvent)
        }
    }
    _handleOnMomentumScrollEnd(event) {
        var event = event;
        if (event.nativeEvent != null)
            this.changeActiveTab(event.nativeEvent)
    }
    render() {
        return (
            <Container>
                <Animatable.View
                    animation={!this.state.hideHEader ? "fadeInDownBig" : "fadeOutUpBig"}
                    iterationCount={1} duration={this.state.duration} direction="alternate"
                    style={[styles.mainHeaderStyle, [this.state.headerStyle],]}>
                    <ScrollView
                        decelerationRate={'normal'}
                        nestedScrollEnabled={true}
                        ref={view => this._scrollViewTab = view}
                        horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}
                        contentContainerStyle={[styles.mainTapHorizantalScroll]}
                        style={[IS_RTL && Platform.OS == 'ios' && { direction: 'ltr' }]}
                    >
                        {this.state.taps.map((data, index) => this.getTapsView(data, index))}
                    </ScrollView>
                </Animatable.View>
                <ScrollView
                    showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}
                    decelerationRate={'normal'}
                    onScroll={this._handleScroll}
                    onScrollAnimationEnd={this._handleScroll}
                    onMomentumScrollEnd={this._handleOnMomentumScrollEnd}
                    nestedScrollEnabled={true}
                    ref={view => this._scrollView = view}
                >
                    <View
                        style={{ backgroundColor: '#fff', marginBottom: 5, height: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold' }}>Start After This Section</Text>
                    </View>
                    {this.state.mainPageSections}
                </ScrollView>
            </Container >
        )
    }
}