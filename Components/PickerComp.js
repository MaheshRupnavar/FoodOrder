import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {TouchableOpacity} from 'react-native-gesture-handler';

const PickerComp = ({city}) => {
  const [pickerValue, setPickerValue] = useState('Pune');

  const LocationPicker = () => {
    setPickerValue(city);
    if (city == 'Pune') {
      (lat = 18.516726), (long = 73.856255);
    }
  };

  return (
    <View style={styles.container}>
      <Picker
        style={styles.picker}
        selectedValue={pickerValue}
        onValueChange={(item)=>setPickerValue(item)}>
        <Picker.Item label="Pune" value="Pune" />
        <Picker.Item label="Mumbai" value="Mumbai" />
        <Picker.Item label="Delhi" value="Delhi" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  picker: {
    width: 200,
    height: 40,
    borderColor: 'black',
    borderWidth: 4,
  },
});

export default PickerComp;
