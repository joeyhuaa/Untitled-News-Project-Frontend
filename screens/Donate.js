import React from 'react'
import { View, TouchableOpacity} from 'react-native'
import { Text, Button} from 'react-native-elements'

export default function Donate(){
    return(
        <View style={{alignItems:'center'}}>
            <Text h2 style={{textAlign:'center', marginTop:"20%"}}>Donate</Text>

            <Text h5 style={{textAlign:'center', marginTop:"5%", width:"85%"}}>
                The News App is entirely free to ensure you are getting unbiased news from non-influential sources. But feel free to donate any amount you would like through the following sources to keep our servers running!
            </Text>

            <View style={{width:"50%", marginTop:"15%"}}>
            <Button title="Venmo" buttonStyle={{backgroundColor:'mediumslateblue'}}/>
            <Button title="Paypal" style={{marginTop:"10%"}} buttonStyle={{backgroundColor:'mediumslateblue'}}/>
            <Button title="CashApp" style={{marginTop:"10%"}} buttonStyle={{backgroundColor:'mediumslateblue'}}/>
            </View>
        </View>
    )
}