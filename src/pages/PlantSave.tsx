import React, { useState } from 'react';
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
import DateTimePicker, {Event} from '@react-native-community/datetimepicker';
import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { format, isBefore } from 'date-fns';

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
    const [selectedDateTime, setSelectedDateTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(Platform.OS == 'ios');

    const route = useRoute();
    const {plant} = route.params as Params;

    function handleChangeTime(event: Event,dateTime: Date | undefined) {
        if(Platform.OS === 'android'){

            setShowDatePicker(oldState => !oldState);
        }

        //função isBefore lib date-fns, se existe alguma data antiga 
        if(dateTime && isBefore(dateTime, new Date())){
            setSelectedDateTime(new Date());
            return Alert.alert('Escolha uma hora no futuro!');
        }

        if(dateTime)
        setSelectedDateTime(dateTime);

    }

    function handleOpenDateTimePickerForAndroid(){
        setShowDatePicker(oldState => !oldState);
        
    }
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
                   {
                   showDatePicker &&( 
                   <DateTimePicker
                    value={selectedDateTime}
                    mode="time"
                    display="clock" 
                    onChange={handleChangeTime} 
                    />
                    )}
                    {
                        Platform.OS === 'android' && (
                            <TouchableOpacity
                            style={styles.dateTimePickerButton}
                            onPress={handleOpenDateTimePickerForAndroid}
                            >
                            <Text style={styles.dateTomePickerText}>
                                Mudar: {format(selectedDateTime, 'HH:mm')}
                            </Text>
                            </TouchableOpacity>
                        )
                    }
                    <Button 
                    title="Cadastrar planta"
                    onPress={() => {}}
                    />
                

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
    },

    dateTimePickerButton:{
        width:'100%',
        alignItems:'center',
        paddingVertical:40,
    },

    dateTomePickerText:{
        color:colors.heading,
        fontSize:24,
        fontFamily:fonts.text

    }


});