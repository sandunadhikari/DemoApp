import React, { useState,useEffect } from 'react';
import { FlatList,Button, View, Text,TextInput,TouchableOpacity,Image,StyleSheet,Dimensions } from 'react-native';
import { Card } from "react-native-elements";
import  HeaderBar  from './component/headerBar';
import CustomListview from './component/CustomListview'
const telecom = [
    { 
        key: 1,
        title: 'Airtel',
        image_url: 'https://essstr.blob.core.windows.net/uiimg/UPMN15.jpg'
    },
    { 
        key: 2,
        title: 'Dialog',
        image_url: 'https://essstr.blob.core.windows.net/uiimg/UPMN4.jpg'
    },
    { 
        key: 3,
        title: 'Hutch',
        image_url: 'https://essstr.blob.core.windows.net/uiimg/UPMN40.jpg'
    },
    { 
        key: 4,
        title: 'Mobitel',
        image_url: 'https://essstr.blob.core.windows.net/uiimg/UPMN2.jpg'
    },
    { 
        key: 5,
        title: 'Sri Lanka Telecom',
        image_url: 'https://essstr.blob.core.windows.net/uiimg/MApp/UPM/UPMN21.jpg'
    },
  ];

  const numColumns = 3;

    function utilityScreen({ route,navigation }) {
        const renderItem = ({ item, index }) => {
            if (item.empty === true) {
              return <View style={[styles.item, styles.itemInvisible]} />;
            }
            return (
              <View
                style={styles.item}
              >
                <Image source={{uri:item.image_url}} style={{width:80,height:80,margin:5}}></Image>  
                {/* <Text style={styles.itemText}>{item.key}</Text> */}
              </View>
            );
          };

          const formatData = (telecom, numColumns) => {
            const numberOfFullRows = Math.floor(telecom.length / numColumns);
          
            let numberOfElementsLastRow = telecom.length - (numberOfFullRows * numColumns);
            while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
                telecom.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
              numberOfElementsLastRow++;
            }
          
            return telecom;
          };
        
          
            return (
                <View style={{flex:1}}>
            <HeaderBar/>
              <FlatList
                data={formatData(telecom, numColumns)}
                style={styles.container}
                renderItem={renderItem}
                numColumns={numColumns}
              />
              </View>
            );
          
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          marginVertical: 20,
        },
        item: {
          backgroundColor: '#FFF',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          margin: 5,
          borderRadius:10,
          height: Dimensions.get('window').width / numColumns, // approximate a square
        },
        itemInvisible: {
          backgroundColor: 'transparent',
        },
        itemText: {
          color: '#fff',
          
        },
      });
export default utilityScreen;