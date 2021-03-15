import React, { Component } from 'react'
import { FlatList,Button, View, Text,TextInput,TouchableOpacity,Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import cartIcon from '../../images/Home_Cart.png'

const headerBar=()=> {
    return (
      <View style={{height:120,flexDirection:'column', backgroundColor:'#60ba46',justifyContent:'center',paddingHorizontal:10}}>
        <View style={{alignItems:'flex-end',marginVertical:10}}>
          <View style={{flexDirection:'row',paddingHorizontal:5}}>
            <Text style={{color:'white'}}>Rs. 0.00</Text>
            <Image source={cartIcon} style={{width:24,height:24,marginLeft:10}}></Image>
          </View>
        </View>
        <View style={{height:50,backgroundColor:'white',flexDirection:'row',padding:5,alignItems:'center',borderRadius:10}}>
          <Icon name="ios-search" style={{fontSize:24}}/>
          <TextInput placeholder="what are you looking for?" style={{fontSize:16,marginLeft:15}}/>
        </View>
      </View>
    );
}
export default headerBar;