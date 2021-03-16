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

  const insurance = [
    { 
        key: 1,
        title: 'Union Assurance',
        image_url: 'https://essstr.blob.core.windows.net/uiimg/MApp/UPM/UPMN11.jpg'
    },
  ];

  const water = [
    { 
        key: 1,
        title: 'Water Bill',
        image_url: 'https://essstr.blob.core.windows.net/uiimg/UPMN54.jpg'
    },
  ];

  const electricity = [
    { 
        key: 1,
        title: 'LECO Bill',
        image_url: 'https://essstr.blob.core.windows.net/uiimg/UPMN53.jpg'
    },
    { 
      key: 1,
      title: 'CEB Bill',
      image_url: 'https://essstr.blob.core.windows.net/uiimg/UPMN55.jpg'
  },
  ];

  const numColumns = 3;

    function utilityScreen({ route,navigation }) {
      const { ParamObject } = route.params;
      const [utilityList, setutilityList]= useState([]);
      useEffect(() => {
        switch (ParamObject.title) {
          case "Telecom":
            setutilityList(telecom);
            break;
          case "Insurance":
            setutilityList(insurance);
            break;
          case "Water":
            setutilityList(water);
            break;
          case "Electricity":
            setutilityList(electricity);
            break;
        }
      });


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

          const formatData = (utilityList, numColumns) => {
            const numberOfFullRows = Math.floor(utilityList.length / numColumns);
          
            let numberOfElementsLastRow = utilityList.length - (numberOfFullRows * numColumns);
            while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
              utilityList.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
              numberOfElementsLastRow++;
            }
          
            return utilityList;
          };
        
          
            return (
                <View style={{flex:1}}>
            <HeaderBar/>
              <FlatList
                data={formatData(utilityList, numColumns)}
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