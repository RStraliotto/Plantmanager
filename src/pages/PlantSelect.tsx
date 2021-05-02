import { HeaderTitle } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
ActivityIndicator,
} from 'react-native';
import { EnviromentButton } from '../components/EnviromentButton';
import {Header} from '../components/Header';
import { PlantCardPrimary } from '../components/PlantCardPrimary';
import { Load } from '../components/Load';
import api from '../services/api';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnviromentProps {
    key: string;
    title: string;
}

interface PlantsProps {
    id: string;
    nome: string;
    about: string;
    water_tips: string;
    photo: string;
    enviroments: [string];
    frequency:{
        times:number,
        repeat_every:string;
    }
}

export function PlantSelect(){

    const [enviroments, setEnvirtoments] = useState<EnviromentProps[]>([]);
    const [plants, setPlants] = useState<PlantsProps[]>([]);
    const [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>([]);
    const [enviromentsSelected, setEnvimentSelected] = useState('all');
    //mudar para true para funcionar
    const [loading, setloading]=useState(false);

    const [page, setPage]= useState(1);
    const [loadingMore, setLoadingMore]= useState(true);
  


    function handleEnviromentSelected(enviroments: string){
        setEnvimentSelected(enviroments);
        // apresenta todos
        if(enviroments == 'all')
        return setFilteredPlants(plants);
        // apresenta por cat dos menus 
        const filtered = plants.filter(plant =>
            plant.enviroments.includes(enviroments)
            );
    
        setFilteredPlants(filtered);
    }

    async function fetchPlants(){
        const { data } = await api
        .get('plants?_sort=name&_order=asc&_page${page}&_limit=8');
        if(!data)
        return setloading(true);

        if(page > 1){

         setPlants(oldValue =>[... oldValue, ...data])
         setFilteredPlants(oldValue =>[... oldValue, ...data])   
        
        }else{

            setPlants(data)
            setFilteredPlants(data)   
           
                     }
        
        setPlants(data);
        setloading(false);
     }


    // função para carregar dados conforme o usuário rolar o scroll
    function handleFecthmore(distance:number) {

        if(distance < 1)
        return;
        
        setLoadingMore(true);
        setPage(oldValue => oldValue + 1);
        fetchPlants();
    }


       useEffect(() => {

        async function fetchEnviroment(){
            const { data } = await api
            .get('plants_enviroments?_sort=title&_order=asc');
            setEnvirtoments([{
                    key:'all',
                    title:'all',
            },
            ...data
            ]);

         }

         fetchEnviroment();
    },[])

    useEffect(() => {
         fetchPlants();
    },[])


    if(loading)
    return <Load/>

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Header />  

                <Text style={styles.title}>
                    Em qual ambiente 
                </Text>          
                <Text style={styles.subtitle}>
                    você quer colocar sua planta?
                </Text>

                </View>    
               
                <View>
                <FlatList
                     data={enviroments} 
                     keyExtractor={(item) => String(item.key)}
                     renderItem={({item}) => (
                     <EnviromentButton
                     title={item.title}
                     active={item.key == enviromentsSelected}
                     onPress={() => handleEnviromentSelected(item.key) }
                                                               
                     />

                    )}
                  
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.enviromentList}                  
                    /> 
                
                 </View> 

                 <View style={styles.plants}>
                 <FlatList
                     data={filteredPlants}
                     keyExtractor={(item) => String(item.id)}
                     renderItem={({item}) => (
                        <PlantCardPrimary data ={item} />
                     )}
                     showsVerticalScrollIndicator={false}
                     numColumns={2}
                     onEndReachedThreshold={0.1}
                     onEndReached={({distanceFromEnd}) =>
                     handleFecthmore(distanceFromEnd)
                    }

                    ListFooterComponent={
                        loadingMore
                        ? <ActivityIndicator color={colors.green} />
                        :<> </>        

                    }
                     
                 />
                  

            </View>

        </View>

    )
} 


const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:colors.background,
               
    },

    header:{
        paddingHorizontal:30
    },

    title:{
        
        fontSize:17,
        color:colors.heading,
        fontFamily: fonts.heading,
        lineHeight:20,
        marginTop:15

    },
    subtitle:{
        fontFamily:fonts.text,
        fontSize:17,
        lineHeight:20,
        color: colors.heading,

    },
    
    enviromentList:{
        height:40,
        justifyContent:'center',
        paddingBottom:5,
        marginLeft:32,
        marginVertical:32,
    
    },
    plants:{
        flex:1,
        paddingHorizontal:32,
        justifyContent: 'center'
    }

});
