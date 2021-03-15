
import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button,Alert, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from "react-native-elements";
    
    function DetailListScreen({ route,navigation }) {
      const { ParamObject } = route.params;

      return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    style={styles.tinyLogo}
                    source={{uri: ParamObject.image_url}}/>
                <View style={styles.viewBackground}>
                    <View style={{flexDirection:'column',marginTop:30}}>
                        <View style={{  flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center'}}>
                            <Text style={{fontSize:30,fontWeight:'bold', color: '#5cba67',paddingHorizontal:20 }}>Price</Text>
                            <Text style={{fontSize:24, color: '#5cba67' ,paddingHorizontal:10}}>Rs. 100.00</Text>
                        </View>
                        <View style={{  flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center'}}>
                            <Text style={{fontSize:16,fontWeight:'bold', color: '#595959',paddingHorizontal:20}} >In Stock</Text>
                            <Text style={{fontSize:16, color: '#a6a6a6',paddingHorizontal:10 }}>per 1 KG</Text>
                        </View>
                        <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',marginTop:50}}>
                            <View style={{paddingHorizontal:20}}>
                                <Text style={{fontSize:14, color: '#a6a6a6', color: '#595959'}}>{ParamObject.title}</Text>
                                <Text style={{fontSize:30, color: '#a6a6a6',color: '#595959'}}>0 KG</Text>
                            </View>
                            <View style={{flexDirection:'row',paddingHorizontal:20}}>
                                  <View style={{ marginRight:10 ,width: 35}}>
                                      <Button title="-" color="#5cba67"></Button>
                
                                  </View>

                                  <View style={{marginLeft:10,width: 35}}>
                                        <Button title="+" color="#5cba67"></Button>
                
                                  </View>

                            </View>
                          </View>
                    </View>
           </View>
           <View style={{ height: 100, marginTop: 30, width: '90%'}} color="#00cc44">
         
             <Button
                  title="Add to cart"
                  color="#5cba67"
          
                  onPress={() => Alert.alert('Item is added')}
            />
           </View>
    </View>
    </ScrollView>
      );
    }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2'

  },
  tinyLogo: {
    width:200,
    height: 200,
    marginTop:50
  },
  button: {
    marginLeft:10,
    marginRight:10,
    width:200,
    height: 200,
    bottom: 10
  },
  viewBackground: {
    marginLeft:10,
    marginRight:10,
    marginTop:50,
    width:'90%',
    height: 250,
    borderRadius:20,
  backgroundColor: '#ffffff',

  }
});

export default DetailListScreen;