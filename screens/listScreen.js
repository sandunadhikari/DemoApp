import React, { useState } from 'react';
import { FlatList,Button, View, Text,TextInput,TouchableOpacity,Image } from 'react-native';
import { Card } from "react-native-elements";
import  HeaderBar  from './component/headerBar';
import CustomListview from './component/CustomListview'
    
    function listScreen({ navigation }) {
      const [itemList, setitemList]= useState( 
        [
          {
            key: 1, 
            title: 'Carrot',
            description: 'Rs. 100.00',
            quantity: '1 kg',
            image_url: 'https://essstr.blob.core.windows.net/essimg/105x/915007.png'
          },
          {
            key: 2,
            title: 'Amberella',
            description: 'Rs. 100.00',
            quantity: '1 kg',
            image_url: 'https://essstr.blob.core.windows.net/essimg/105x/916002.png'
          },
          {
            key: 3, title: 'Batana',
            description: 'Rs. 100.00',
            quantity: '1 kg',
            image_url: 'https://essstr.blob.core.windows.net/essimg/105x/914004.png'
          },
          {
            key: 4,
            title: 'Cabbage',
            description: 'Rs. 100.00',
            quantity: '1 kg',
            image_url: 'https://essstr.blob.core.windows.net/essimg/105x/915005.png'
          },
          {
           key: 5,
           title: 'Bell Pepper',
           description: 'Rs. 100.00',
           quantity: '1 kg',
           image_url: 'https://essstr.blob.core.windows.net/essimg/105x/913006.png'
         },
          {
            key: 6, 
            title: 'Beetroot',
            description: 'Rs. 100.00',
            quantity: '1 kg',
            image_url: 'https://essstr.blob.core.windows.net/essimg/105x/915002.png'
          },
          
          {
            key: 7, 
            title: 'Onion',
            description: 'Rs. 100.00',
            quantity: '1 kg',
            image_url: 'https://essstr.blob.core.windows.net/essimg/105x/914006.png'
          },
          {
            key: 8,
            title: 'Lime',
            description: 'Rs. 100.00',
            quantity: '1 kg',
            image_url: 'https://essstr.blob.core.windows.net/essimg/105x/914029.png'
          },
          {
            key: 9, title: 'Ginger',
            description: 'Rs. 100.00',
            quantity: '1 kg',
            image_url: 'https://essstr.blob.core.windows.net/essimg/105x/914016.png'
          },
          {
            key: 10,
            title: 'Bell Pepper',
            description: 'Rs. 100.00',
            quantity: '1 kg',
            image_url: 'https://essstr.blob.core.windows.net/essimg/105x/913007.png'
          },
        ]
       );
  

      return (
        <View style={{flex:1}}>
            <HeaderBar/>
            <CustomListview itemList={itemList}/>
        </View>
      );
    }
export default listScreen;