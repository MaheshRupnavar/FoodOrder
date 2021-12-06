import React from 'react';
import {View, Text, Button, FlatList,StyleSheet} from 'react-native';


const ApiView = props => {
  const {axiosData,renderItem} = props;

  return (
    <View style={styles.parentContainer}>
      <FlatList
        data={axiosData}
        renderItem={item => renderItem(item)}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};


const styles = StyleSheet.create({

    parentContainer: {
        flex: 1,
        justifyContent: 'center',
      },
      container: {
        backgroundColor: '#fff',
      },
      loader: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      list: {
        paddingVertical: 4,
        margin: 5,
        backgroundColor: '#fff',
      },
      lightText: {
        color: 'black',
      },
})

export default ApiView;
