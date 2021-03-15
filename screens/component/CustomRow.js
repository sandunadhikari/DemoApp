import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
        height:120
    },

    title: {
        fontSize: 16,
        color: '#000',
        bottom: 20
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        top:10,
        justifyContent: 'center',
    },
    
    description: {
        bottom: 10,
        fontSize: 16,
       
    },
    quantity: {
        fontSize: 16,
       
    },
    photo: {
        height: 80,
        width: 80
    },
});

const CustomRow = ({ title, description, image_url, quantity }) => (
    <View style={styles.container}>
        <Image  source={{ uri: image_url }} style={styles.photo} />
        <View style={styles.container_text}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.description}>
                {description}
            </Text>

            <Text>
               1 KG
            </Text>
        </View>
        <View style={{ marginTop: 12, marginLeft: 10, marginRight: 0 ,width: 35, alignItems: 'center'}}>
            <Text style={{left: 68, fontSize: 16}}>
               0
            </Text>
            
        </View>
        <View style={{ marginTop: 50, marginLeft: 10, marginRight: 0 ,width: 35}}>
            <Button
            title="-"
            color="#60ba46"
            ></Button>
            
        </View>
        <View style={{ marginTop: 50, marginLeft: 10, marginRight: 5 ,width: 35}}>
            <Button
            title="+"
            color="#60ba46"
            ></Button>
            
        </View>

    </View>
);

export default CustomRow;