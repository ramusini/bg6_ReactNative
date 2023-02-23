import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// コンポーネント
import IconButton from '../components/IconButton'

export default function Home() {
  return (
    <View style={styles.container}>
      <IconButton icon="note-edit-outline"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
