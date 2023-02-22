import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function Home() {
    return (
        <View style={styles.container}>
            <Button
              icon="alpha-b-circle" mode="contained" onPress={() => console.log('Pressed')}>
                Press me
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});