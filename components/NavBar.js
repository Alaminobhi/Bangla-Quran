import React from 'react';
import { Button, Text, View } from 'react-native';

const NavBar = (props) => {
    return (
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
    );
};

export default NavBar;