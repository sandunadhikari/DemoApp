import React, { useState,useEffect } from 'react';
import { FlatList,Button, View, Text,TextInput,TouchableOpacity,Image } from 'react-native';
import { Card } from "react-native-elements";
import  HeaderBar  from './component/headerBar';
import CustomListview from './component/CustomListview'
    
const Vegetables = [
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
];

const Fruits = [
  {
    key: 1, 
    title: 'Apple',
    description: 'Rs. 100.00',
    quantity: '1 kg',
    image_url: 'https://essstr.blob.core.windows.net/essimg/105x/924000.png'
  },
  {
    key: 2,
    title: 'Banana',
    description: 'Rs. 100.00',
    quantity: '1 kg',
    image_url: 'https://essstr.blob.core.windows.net/essimg/105x/923010.png'
  },
  {
    key: 3, title: 'Grapes',
    description: 'Rs. 100.00',
    quantity: '1 kg',
    image_url: 'https://essstr.blob.core.windows.net/essimg/105x/924018.png'
  },
  {
    key: 4,
    title: 'Mango',
    description: 'Rs. 100.00',
    quantity: '1 kg',
    image_url: 'https://essstr.blob.core.windows.net/essimg/105x/923055.png'
  }
];

const Meat = [
  {
    key: 1, 
    title: 'Drumsticks',
    description: 'Rs. 100.00',
    quantity: '1 kg',
    image_url: 'https://essstr.blob.core.windows.net/essimg/105x/935005.png'
  },
  {
    key: 2,
    title: 'Mutton Cubes',
    description: 'Rs. 100.00',
    quantity: '1 kg',
    image_url: 'https://essstr.blob.core.windows.net/essimg/105x/65778.png'
  }
];

const Fish = [
  {
    key: 1, 
    title: 'Hendella',
    description: 'Rs. 100.00',
    quantity: '1 kg',
    image_url: 'https://essstr.blob.core.windows.net/essimg/105x/941015.png'
  },
  {
    key: 2,
    title: 'Linna',
    description: 'Rs. 100.00',
    quantity: '1 kg',
    image_url: 'https://essstr.blob.core.windows.net/essimg/105x/941024.png'
  },
  {
    key: 3, title: 'Sudaya',
    description: 'Rs. 100.00',
    quantity: '1 kg',
    image_url: 'https://essstr.blob.core.windows.net/essimg/105x/941063.png'
  }
];

const Bakery = [
  {
    key: 1, 
    title: 'Hamburger',
    description: 'Rs. 100.00',
    quantity: '1 kg',
    image_url: 'https://essstr.blob.core.windows.net/essimg/105x/952001.png'
  },
  {
    key: 2,
    title: 'Sandwich',
    description: 'Rs. 100.00',
    quantity: '1 kg',
    image_url: 'https://essstr.blob.core.windows.net/essimg/105x/951009.png'
  }
];

const Beverages = [
  {
    key: 1, 
    title: '7 Up Mega',
    description: 'Rs. 100.00',
    quantity: '1 kg',
    image_url: 'https://essstr.blob.core.windows.net/essimg/105x/108368.png'
  }
];

    function listScreen({ route,navigation }) {
      const { ParamObject } = route.params;
      const [itemList, setitemList]= useState([]);
      useEffect(() => {
        switch (ParamObject.title) {
          case "Vegetables":
            setitemList(Vegetables);
            break;
          case "Fruits":
            setitemList(Fruits);
            break;
          case "Meat":
            setitemList(Meat);
            break;
          case "Fish":
            setitemList(Fish);
            break;
          case "Bakery":
            setitemList(Bakery);
            break;
          case "Beverages":
            setitemList(Beverages);
            break;
        }
      });

      return (
        <View style={{flex:1}}>
            <HeaderBar/>
            <CustomListview itemList={itemList}/>
        </View>
      );
    }
export default listScreen;