import React from 'react';
import { Appbar } from 'react-native-paper';

export default function Header() {
  return (
    <Appbar.Header>
      <Appbar.Action icon="format-list-bulleted" onPress={() => {}}/>
      <Appbar.Content title="戦績" />
      <Appbar.Action icon="magnify" onPress={() => {}} />
    </Appbar.Header>
  );
}
