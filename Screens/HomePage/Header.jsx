import React from "react";
import { DrawerActions } from "@react-navigation/native";
import { View,Text,StyleSheet,TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { myColors } from "../../Config/Color";
import {Ionicons} from "@expo/vector-icons"


const Header = () =>{
    const navigation = useNavigation();
    console.log(navigation);
    return(
        <View style={Styles.Header}>
            <Ionicons name="menu-outline" size={32} color={myColors.secondary} 
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />
        </View>
    )
}

const Styles = StyleSheet.create({
    Header:{
        flex:1,
        margin:2,
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:myColors.tertiary,
        padding:12
    }
})

export default Header;