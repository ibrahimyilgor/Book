import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './screens/Main';
import KitapEkleScreen from './screens/KitapEkle';
import KitaplarimScreen from './screens/Kitaplarim';
import IstatistiklerScreen from './screens/Istatistikler';
import AyarlarScreen from './screens/Ayarlar';

/*function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Second')}
      />
    </View>
  );
}*/

/*function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
    </View>
  );
}*/

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{ headerShown: false }} initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />        
        <Stack.Screen name="KitapEkle" component={KitapEkleScreen} />
        <Stack.Screen name="Kitaplarim" component={KitaplarimScreen} />
        <Stack.Screen name="Istatistikler" component={IstatistiklerScreen} />
        <Stack.Screen name="Ayarlar" component={AyarlarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
