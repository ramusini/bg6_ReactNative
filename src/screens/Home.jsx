import React from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, } from 'react-native';

// コンポーネント
import IconButton from '../components/IconButton';
import AppBar from '../components/AppBar';
import RecordCard from '../components/RecordCard';

export default function Home() {
  const [isExtended, setIsExtended] = React.useState(true);
  const onScroll = ({ nativeEvent }) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setIsExtended(currentScrollPosition <= 0);
  };
  return (
    <View style={styles.container}>
      <AppBar/>
      <SafeAreaView style={styles.scrollView}>
        <ScrollView onScroll={onScroll}>
          <RecordCard records={[
            {title:'ボードゲーム', day:"2023/2/23"},
            {title:'ボードゲーム2', day:"2023/2/24"},
            {title:'ボードゲーム3', day:"2023/2/24"},
            {title:'ボードゲーム4', day:"2023/2/24"},
            {title:'ボードゲーム5', day:"2023/2/24"},
            {title:'ボードゲーム6', day:"2023/2/24"},
            {title:'ボードゲーム7', day:"2023/2/24"},
            {title:'ボードゲーム8', day:"2023/2/24"},
            {title:'ボードゲーム9', day:"2023/2/24"},
            {title:'ボードゲーム10', day:"2023/2/24"},
          ]}/>
        </ScrollView>
      </SafeAreaView>
      <IconButton icon="note-plus-outline"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView:{
    flexGrow: 1,
  }
});
