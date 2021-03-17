import React, { useState } from 'react';
import { FlatList,Button, View, Text,TextInput,TouchableOpacity,Image,ScrollView } from 'react-native';
import { Card } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons'
import { SliderBox } from "react-native-image-slider-box"
import  HeaderBar  from './component/headerBar';
    
    function HomeScreen({ navigation }) {
        const [imagesList, setValue]= useState( [
          require('../images/Mapp_slide1.jpg'),
          require('../images/Mapp_slide2.jpg'),
          require('../images/Mapp_slide8.jpg'),
          ] );

          const [categoriesList, setcategoriesList]= useState( [
            {
              imageUrl: 'https://essstr.blob.core.windows.net/uiimg/ShopByCategory/V.png',
              title: "Vegetables"
            },
            {
              imageUrl: 'https://essstr.blob.core.windows.net/uiimg/ShopByCategory/F.png',
              title: "Fruits"
            },
            {
              imageUrl: 'https://essstr.blob.core.windows.net/uiimg/ShopByCategory/M.png',
              title: "Meat"
            },
            {
              imageUrl: 'https://essstr.blob.core.windows.net/uiimg/ShopByCategory/S.png',
              title: "Fish"
            },
            {
              imageUrl: 'https://essstr.blob.core.windows.net/uiimg/ShopByCategory/K.png',
              title: "Bakery"
            },
            {
              imageUrl: 'https://essstr.blob.core.windows.net/uiimg/ShopByCategory/B.png',
              title: "Beverages"
            }
          ] );

          const [utilityList, setutilityList]= useState( [
            {
              imageUrl: 'https://essstr.blob.core.windows.net/uiimg/UC1.png',
              title: "Telecom"
            },
            {
              imageUrl: 'https://essstr.blob.core.windows.net/uiimg/UC2.png',
              title: "Insurance"
            },
            {
              imageUrl: 'https://essstr.blob.core.windows.net/uiimg/UC3.png',
              title: "Water"
            },
            {
              imageUrl: 'https://essstr.blob.core.windows.net/uiimg/UC4.png',
              title: "Electricity"
            }
          ] );

          const handleClick = (item) => {
            navigation.navigate('Utility',{ParamObject:item});
          } 
          const handleClick2 = (item) => {
            navigation.navigate('DetailList',{ParamObject:item});
          }  
          
          const [width, setWidth] = useState(0);
          const onLayout = (e) => setWidth(e.nativeEvent.layout.width);

      return (
        <View style={{flex:1}}>
            <HeaderBar/>
            <ScrollView>
            <View style={{paddingTop:15,backgroundColor:'#808080'}} onLayout={(e) => onLayout(e)}>
                <SliderBox images={imagesList}
                    sliderBoxHeight={150}
                    onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                    dotColor="#FFFFFF"
                    inactiveDotColor="#90A4AE"
                    paginationBoxVerticalPadding={20}
                    autoplay
                    circleLoop
                    imageLoadingColor='transparent'
                    resizeMethod={'resize'}
                    resizeMode={'cover'}
                    />
            </View>
            <View style={{flexDirection:'column',paddingTop:10}}>
                <View style={{backgroundColor:'#60ba46',height:120}}>
                    <Text style={{color:'white',fontSize:20,textAlign:'center',padding:10}}>Categories</Text>
                </View>
                <FlatList
                    style={{marginTop:-90,marginBottom:20}}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={categoriesList}
                    renderItem={({ item: rowData }) => {
                        return (
                            <TouchableOpacity onPress={() => handleClick2(rowData)}>
                                <Card borderRadius={10} containerStyle={{ padding: 0, width: 120,height:140 }}>
                                    <View style={{flex:1,flexDirection:'column',backgroundColor:'white',alignItems:'center'}}>
                                        <Image source={{uri:rowData.imageUrl}} style={{width:80,height:80,margin:5}}></Image>
                                        <View style={{flex:1}}>
                                            <Text>{rowData.title}</Text>
                                        </View>
                                    </View>
                                </Card>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />
            
            </View>

                <View style={{flexDirection:'column'}}>
                    <View style={{backgroundColor:'#45cadf',height:120}}>
                        <Text style={{color:'white',fontSize:20,textAlign:'center',padding:10}}>Utility Payment</Text>
                    </View>
                    <FlatList
                        style={{marginTop:-90,marginBottom:10}}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={utilityList}
                        renderItem={({ item: rowData }) => {
                        return (
                            <TouchableOpacity onPress={() => handleClick(rowData)}>
                                <Card borderRadius={10} containerStyle={{ padding: 0, width: 120,height:140 }}>
                                    <View style={{flex:1,flexDirection:'column',backgroundColor:'white',alignItems:'center'}}>
                                        <Image source={{uri:rowData.imageUrl}} style={{width:80,height:80,margin:5}}></Image>
                                        <View style={{flex:1}}>
                                            <Text>{rowData.title}</Text>
                                        </View>
                                    </View>
                                </Card>
                            </TouchableOpacity>
                        );
                        }}
                        keyExtractor={(item, index) => index.toString()}
                    />
            
                </View>
                </ScrollView>
        </View>
      );
    }
export default HomeScreen;