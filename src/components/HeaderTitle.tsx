import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    title: string;
}

const HeaderTitle = ({ title }: Props ) => {
  return (
    <View style={styles.container } >

      <Icon 
        name='leaf'
        size={30}
        color='white'
      />

      <Text style={styles.titleText} >{ title }</Text>

      <Icon 
        name='leaf'
        size={30}
        color='white'
        style={{ 
          transform: [{ rotateY: '180deg' }],
          marginLeft: 10,
         }}

      />


    </View>
  )
}

export default HeaderTitle;

const styles = StyleSheet.create({

    container: {
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center',
 
    },

    titleText: {
        fontSize: 25  , 
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 10,
    }



})