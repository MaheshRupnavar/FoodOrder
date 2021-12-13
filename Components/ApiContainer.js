import React, {Component, useState} from 'react';
import axios from 'axios';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

class ApiContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      categoryIndex: 0,
    };
  }

  componentDidMount() {
    this.getapiData();
  }

  async getapiData() {
    let resp = await axios.get('http://103.13.113.58:9090/admin/menu-category');
    // console.warn(resp.data.data[0].name);
    this.setState({data: resp.data.data});
  }

  render() {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.categoryContainer}>
          {this.state.data.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => this.setState({categoryIndex: index})}>
              <Text
                style={[
                  styles.categoryText,
                  this.state.categoryIndex == index &&
                    styles.categoryTextSelected,
                ]}>
                {'   '}
                {item.name}
                {'   '}
              </Text>
            </TouchableOpacity>
          ))}

          {/* {this.state.data[0].name} */}

          {/* <Text>{this.state.data[1].name}</Text>
        <Text>{this.state.data[2].name}</Text>*/}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 10,
    justifyContent: 'space-between',
    marginLeft: 10,
    alignItems: 'center',
    opacity: 2,
  },
  categoryText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryTextSelected: {
    color: '#FF9800',
    paddingBottom: 10,
    borderBottomWidth: 3,
    borderColor: '#FF9800',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ApiContainer;
