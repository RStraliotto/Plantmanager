import React from 'react';
import { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
   
} from 'react-native';

import {Button}  from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmantion(){

    return(

        <SafeAreaView style={styles.container}>

            <View style={styles.content}>
                <Text style={styles.emoji}>
                        😇
                </Text>

                <Text style={styles.title}>
                    Prontinho
                </Text>

                <Text style={styles.subtitle}>
                    Agora vamos começar a cuidar das suas{'\n'}
                    plantinhas com muito cuidado.
                </Text>

                <View style={styles.footer}>
                <Button/>
            </View>
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

content:{

    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    padding: 30
    

},

title:{
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign:'center',
        color: colors.heading,
        lineHeight: 38,
        marginTop: 15

        },

subtitle:{
        fontSize: 16,
        fontFamily: fonts.text,
        textAlign:'center',
        paddingVertical: 20,
        color: colors.heading

},

emoji:{

    fontSize: 78
},

footer:{
    width:'100%',
    paddingHorizontal:50

}




});