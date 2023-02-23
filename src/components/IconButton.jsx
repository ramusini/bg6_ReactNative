import * as React from 'react';
import { IconButton, MD3Colors } from 'react-native-paper';
import { StyleSheet } from 'react-native';


export default function MyComponent(props){
  const {icon} = props;
  return (
    <IconButton
      style={styles.iconButton}
      icon={icon}
      iconColor={MD3Colors.error50}
      containerColor={MD3Colors.error90}
      size={40}
      mode={'contained-tonal'}
      onPress={() => console.log('Pressed')}
    />
  )
}

const styles = StyleSheet.create({
  iconButton: {
    position: 'absolute',
    right: 30,
    bottom: 30,
  },
});


