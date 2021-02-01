import React from 'react'
import { View, Image } from 'react-native'
import { Card, ListItem, Button, Icon, Text } from 'react-native-elements'
import {purple} from './Consts'

export default function Trending() {
    return (
        <View>
            <View>
                <Text h2 style={{ textAlign: 'center', marginTop: "10%", color: "black" }}>Trending</Text>
            </View>


            <View style={{ flex: 1, flexDirection: 'row', marginTop: "10%" }}>
                <View style={trendingCardStyle}>
                    <View style={circleStyle} />
                    <View style={{margin:"5%"}}>
                        <Text h3 style={trendingTextStyle}>Politics</Text>
                    </View>
                </View>

                <View style={trendingCardStyle}>
                    <View style={circleStyle} />
                    <View style={{margin:"5%"}}>
                        <Text h3 style={trendingTextStyle}>Science</Text>
                    </View>
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', paddingTop: "46%" }}>
                <View style={trendingCardStyle}>
                    <View style={circleStyle} />
                    <View style={{margin:"5%"}}>
                        <Text h3 style={trendingTextStyle}>Sports</Text>
                    </View>
                </View>

                <View style={trendingCardStyle}>
                    <View style={circleStyle} />
                    <View style={{margin:"5%"}}>
                        <Text h3 style={trendingTextStyle}>Entertainment</Text>
                    </View>
                </View>
            </View>


            <View style={{ flex: 1, flexDirection: 'row', marginTop: "46%" }}>
                <View style={trendingCardStyle}>
                    <View style={circleStyle} />
                    <View style={{margin:"5%"}}>
                        <Text h3 style={trendingTextStyle}>Technology</Text>
                    </View>
                </View>

                <View style={trendingCardStyle}>
                    <View style={circleStyle} />
                    <View style={{margin:"5%"}}>
                        <Text h3 style={trendingTextStyle}>Local Trends</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const darkMode = false

const trendingCardStyle = {
    width: "50%",
    backgroundColor: darkMode ? "#222323" : "white",
    height: 200,
    borderWidth: '1.5',
    borderColor: purple,
}

const circleStyle = {
    backgroundColor: purple,
    borderRadius: 100 / 2,
    width: "25%",
    height: "25%",
    margin: "2%"
}

const trendingTextStyle = {
    color: darkMode ? "white" : "black"
}