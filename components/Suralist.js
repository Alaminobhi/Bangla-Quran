import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

const Suralist = ({suraName}) => {
    console.log(suraName);
    const {sura_no, sura_name, para, total_ayat, eng_name} = suraName;
    return (
        <View style={styles.row}>
         <Text style={styles.col}>{sura_no}</Text>
         <Text style={styles.col}>{sura_name}</Text>
         <Text style={styles.col}>{para}</Text>
         <Text style={styles.col}>{total_ayat}</Text>
         <Text style={styles.col}>{eng_name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({ 
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        flex: 5,
        padding: 10,
        borderWidth: 1,
        
      },
      col: {
        textAlign: 'center',
        width: 80,
        height: 30,
      }
  });

export default Suralist;