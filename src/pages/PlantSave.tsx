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

import {SvgFromUri} from 'react-native-svg';
import waterdrop from '../assets/waterdrop.png';
import { Button } from '../components/Button';
import colors from '../styles/colors';

export function PlantSave() {

    return(
        <View style={styles.container}>
                <View style={styles.plantInfo}>
                        <SvgFromUri 
                        uri=""
                        height={150}
                        width={150}
                        />
                
                <Text style={styles.plantName}>
                    Nome Planta
                </Text>

                <Text style={styles.plantAbout}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet eius nihil illum voluptatem aspernatur alias,
                    necessitatibus ratione explicabo libero atque,
                    nemo commodi laudantium officia laborum distinctio at! Adipisci, vel repudiandae.
                </Text>
                    
                </View>

                <View style={styles.controller}>
                    <View style={styles.tipoContainer}>
                        <Image 
                        source={waterdrop}
                        style={styles.tipoImage}
                        />

                        <Text style={styles.tipoText}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        </Text>
                    </View>

                    <Text style={styles.alertLabel}>
                        Escolha o melhor horário para ser lembrado:  
                    </Text>

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
    plantName:{


    },

    plantAbout:{


    },

    controller:{

    },

    tipoContainer:{

    },

    tipoImage:{

    },
    tipoText:{

    },

    alertLabel:{

    }


});