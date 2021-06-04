import React from 'react';
import { ScrollView, View, Button } from 'react-native';
import Sura from './Sura';

const Home = (props) => {
    return (
        <ScrollView>
        <View style={{ flex: 2, justifyContent: 'center' }}>
           <Button
                title = "Home"
                onPress={
                    function () {
                      props.navigation.navigate("home")
                    }
                }
            />
            <Button
                title = "Sura"
                onPress={
                    function () {
                      props.navigation.navigate("sura")
                    }
                }
            />
       </View>
            <Sura/>
        </ScrollView>
    );
};

export default Home;