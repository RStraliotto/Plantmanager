import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View

} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import colors from '../styles/colors';
import userImg from '../assets/romulo.png';
import fonts from '../styles/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function Header(){

    const [userName, setUsername] = useState<string>();

    useEffect(() => {

        async function loadStorageUserName() {
           
            const user =await AsyncStorage.getItem('@plantmanager:user');
            setUsername(user || '');
        }

        loadStorageUserName();


    },[]);

    return(
            <View style={styles.container}>

                <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.name}>
                    {userName}
                    </Text>
                </View>

                <Image source={userImg} style={styles.img} />

            </View>
    )


}

const styles = StyleSheet.create({

    container:{
        width:'100%',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:20,
        marginTop:getStatusBarHeight(),
      
    },

    img:{
        width:70,
        height:70,
        borderRadius:40


    },
    greeting:{
            fontSize:32,
            color: colors.heading,
            fontFamily: fonts.text,


    },

    name:{
        fontSize:32,
        fontFamily:fonts.text,
        color: colors.heading,
        lineHeight:40,
        

    }
    
    
});