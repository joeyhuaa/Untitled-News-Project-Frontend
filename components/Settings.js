import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Text, Button } from 'react-native-elements'

export default function Settings(){
    return(
        <View style={{alignItems:'center'}}>
            <Text h2 style={{textAlign:'center', marginTop:"20%"}}>Settings</Text>

            <Text h5 style={{marginTop:"5%"}}>View and edit your in-app experience</Text>

            <View style={{width:"50%", marginTop:"15%"}}>
            <Button title="Profile" buttonStyle={{backgroundColor:'mediumslateblue'}}/>
            <Button title="App Data" style={{marginTop:"10%"}} buttonStyle={{backgroundColor:'mediumslateblue'}}/>
            <Button title="Privacy" style={{marginTop:"10%"}} buttonStyle={{backgroundColor:'mediumslateblue'}}/>
            <Button title="Manage Content" style={{marginTop:"10%"}} buttonStyle={{backgroundColor:'mediumslateblue'}}/>
            </View>

        </View>
    )
}

const buttonColor = {
    marginTop:"10%", 
    borderWidth:1, 
    alignItems:'center',  
    justifyContent:'center', 
    borderColor:'mediumslateblue'
}