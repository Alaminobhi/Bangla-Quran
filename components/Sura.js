import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import bnsura from './data/sura.json'
import Suralist from './Suralist';
const Sura = () => {
const [surabn, setSurabn] = useState([])
   console.log(surabn);
   useEffect(() => {
       setSurabn(bnsura);
   }, [])

    return (
       <ScrollView style={styles.container}>
       <View style={styles.row}>
         <Text style={styles.col}>সুরা নং</Text>
         <Text style={styles.col}>সুরা নাম</Text>
         <Text style={styles.col}>পারা</Text>
         <Text style={styles.col}>আইয়াত</Text>
         <Text style={styles.col}>Sura Name</Text>
        </View>
        {
            bnsura.map((suraName)=> <Suralist suraName={suraName}></Suralist>)
        }
       </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { 
      flex: 1,
      padding: 5,
      paddingTop: 10,
      backgroundColor: '#ffffff',
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        flex: 5,
        padding: 10,
        borderWidth: 1,
        backgroundColor: 'gray',
      },
      col: {
        textAlign: 'center',
        width: 80,
        height: 30,
        fontStyle: 'bold',
        color: 'black',
      }
  });

export default Sura;