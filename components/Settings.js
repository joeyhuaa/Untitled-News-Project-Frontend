import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Text, Button } from 'react-native-elements'
import {purple} from './Consts'

export default function Settings(){
    return(
        <View style={{alignItems:'center'}}>
            <Text h2 style={{textAlign:'center', marginTop:"10%"}}>Settings</Text>

            <Text h5 style={{marginTop:"5%"}}>View and edit your in-app experience</Text>

            <View style={{width:"50%", marginTop:"15%"}}>
            <Button title="Profile" buttonStyle={{backgroundColor:purple}}/>
            <Button title="App Data" style={{marginTop:"10%"}} buttonStyle={{backgroundColor:purple}}/>
            <Button title="Privacy" style={{marginTop:"10%"}} buttonStyle={{backgroundColor:purple}}/>
            <Button title="Manage Content" style={{marginTop:"10%"}} buttonStyle={{backgroundColor:purple}}/>
            </View>

        </View>
    )
}
