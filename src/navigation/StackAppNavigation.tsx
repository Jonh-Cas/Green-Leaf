import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import { Platform, StyleSheet, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import NewCountScreen from '../screens/NewCountScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator()

const StackAppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackground: () => (<View style={styles.backgroundStyles} />),
        headerTitle: item => (<HeaderTitle title={item.children} />),
        headerTitleAlign: 'center',
        headerMode: 'float',
        cardStyle: {
          backgroundColor: '#259C00'
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <Icon 
          name='arrow-undo' 
          color='#fff' 
          size={30} 
          style={{ marginLeft: Platform.OS === 'ios' ? 10 : 0 }} />)
      }}
    >
      <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ title: 'Login', headerShown: false }} />
      <Stack.Screen name='NewCountScreen' component={NewCountScreen} options={{ title: 'Nueva Cuenta', headerShown: true, cardStyle: { backgroundColor: '#fff' } }} />
    </Stack.Navigator>
  )
}

export default StackAppNavigation;

const styles = StyleSheet.create({
  backgroundStyles: {
    flex: 1,
    backgroundColor: '#48AB00',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },

})