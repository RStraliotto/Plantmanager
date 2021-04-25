import React from 'react';
import {
    View, 
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    SafeAreaView 
} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';


export function Welcome(){

            const navigation = useNavigation();
            
            //função do botão incial
            function handleStart(){
                //direciona para tela user identificatio
                navigation.navigate('UserIdentification');
            }

    return(
            <SafeAreaView style={styles.container}>
               
               <View style={styles.wrapper}>
                                <Text style={styles.title}>
                                    Gerencie {'\n'}
                                    Suas Plantas {'\n'}
                                    de forma fácil
                                </Text>


                            <Image
                            source={wateringImg}
                            style={styles.image}
                            resizeMode ="contain"  
                            />
                    

                            

                                <Text style={styles.subtitle}>
                                    Gerencie Suas Plantas de forma fácil
                                    Não esqueça mais de regar suas plantas. 
                                    Nós cuidamos de lembrar você sempre que precisar.
                                </Text>

                                <TouchableOpacity 
                                style={styles.button} 
                                activeOpacity={0.7}                             
                                //ao clicar chama a funão handlestart
                                onPress={handleStart}
                                >
                                
                                
                                
                                <Entypo 
                                name="chevron-thin-right"
                                style={styles.buttonicons}
                                

                                />

                            
                    </TouchableOpacity> 
                </View>
            </SafeAreaView>
       )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    wrapper:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20    

    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily:fonts.heading,
        lineHeight: 34
    },
    
    subtitle:{

        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,       
        color: colors.heading,
        fontFamily:fonts.text


    },

    image:{
        
        height: Dimensions.get('window').width * 0.7

    },

    button:{

        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    
        buttonicons:{
                color: colors.white,
                fontSize: 22   
    
        }            

});