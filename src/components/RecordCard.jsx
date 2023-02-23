import * as React from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

export default function RecordTitle(props){
  const {records} = props;
  // propsのオブジェクトを切り出して受け取る。
  var Cards = [];
  for (let i = 0; i < records.length; i++) {
      Cards.push(
        <TouchableOpacity onPress={() => console.log(records[i])}>
          <Card.Title
            style={styles.item}
            title={records[i].title}
            subtitle={records[i].day}
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
            right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
          />
        </TouchableOpacity>
      );
  };

  return(
    <View>
      {Cards}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  }
})
