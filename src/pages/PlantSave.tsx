import React from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Platform,
    TouchableOpacity
} from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
//useroute para pegar valores vindo pela rota
import {useRoute} from '@react-navigation/core';
import {SvgFromUri} from 'react-native-svg';
import waterdrop from '../assets/waterdrop.png';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface Params{

        plant:{
            id: string;
            name: string;
            about: string;
            water_tips: string;
            photo: string;
            enviroments: [string];
            frequency:{
                times:number,
                repeat_every:string;
        }
    }

}
export function PlantSave(){

    const route = useRoute();
    const {plant} = route.params as Params;


    return(
        <View style={styles.container}>
                <View style={styles.plantInfo}>
                        <SvgFromUri 
                        uri={plant.photo}
                        height={150}
                        width={150}
                        />
                
                <Text style={styles.plantName}>
                    {plant.name}
                </Text>

                <Text style={styles.plantAbout}>
                    {plant.about}
                </Text>
                    
                </View>

                <View style={styles.controller}>
                    <View style={styles.tipoContainer}>
                        <Image 
                        source={waterdrop}
                        style={styles.tipoImage}
                        />

                        <Text style={styles.tipTexto}>
                            {plant.water_tips} 
                        </Text>
                    </View>

                    <Text style={styles.alertLabel}>
                        Escolha o melhor horário para ser lembrado:  
                    </Text>

                

            </View>
        
        </View>
    )    
}

const styles = StyleSheet.create({

    container:{

        flex:1,
        justifyContent:'space-between',
        backgroundColor:colors.shape,


    },
    plantInfo:{
        flex:1,
        paddingHorizontal:30,
        paddingVertical:50,
        alignItems:'center',
        justifyContent:'center',
        borderStartColor:colors.shape

    },

    controller:{
        backgroundColor:colors.white,
        paddingHorizontal:30,
       paddingTop:20,
       paddingBottom:getBottomSpace() || 20

    },

    plantName:{
        fontFamily:fonts.heading,
        fontSize:24,
        color:colors.heading,
        marginTop:15,
              
    },

    plantAbout:{
        textAlign:'center',
        fontFamily:fonts.text,
        color:colors.heading,
        fontSize:17,
        marginTop:10
    },

    
    tipoContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:colors.blue_light,
        padding:20,
        borderRadius:20,
        position:'relative',
        bottom:60
    },

    tipoImage:{
        width:56,
        height:56,


    },
    tipTexto:{

        flex:1,
        marginLeft:20,
        fontFamily:fonts.heading,
        color:colors.blue,
        fontSize:17,
        textAlign: 'justify',

    },

    alertLabel:{

        textAlign:'center',
        fontFamily:fonts.Complement,
        color:colors.heading,
        fontSize:12,
        marginBottom:5
    }


});