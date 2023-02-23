import React from 'react';
import { Appbar, MD3Colors } from 'react-native-paper';

export default function Header() {
  return (
    <Appbar.Header style={MD3Colors.error90}>
      <Appbar.Action icon="format-list-bulleted" onPress={() => {}}/>
      <Appbar.Content title="戦績" />
      <Appbar.Action icon="magnify" onPress={() => {}} />
    </Appbar.Header>
  );
}
