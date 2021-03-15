import React from 'react';
import { View, FlatList, StyleSheet, Text,TouchableOpacity } from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomRow from './CustomRow';
import { CommonActions, useNavigation } from '@react-navigation/native'
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

const CustomListview = ({ itemList }) => {
    const navigation = useNavigation();
    return (
    <View style={styles.container}>
        <FlatList
                data={itemList}
                renderItem={({ item }) => {
                    return(
                        <TouchableOpacity onPress={() => navigation.navigate('Details',{ParamObject:item})}>
                            <CustomRow
                                title={item.title}
                                description={item.description}
                                image_url={item.image_url}
                            />
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={(item, index) => index.toString()}
            />

    </View>
    );
};

export default CustomListview;