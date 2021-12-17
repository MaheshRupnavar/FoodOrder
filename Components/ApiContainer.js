import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import ListItem from '../screens/ListItem';
import {useSelector, useDispatch} from 'react-redux';

const ApiContainer = () => {
  const [data, setData] = useState([]);
  const [feed, setFeed] = useState([]);
  const [categoryIndex, setCategoryIndex] = useState(0);

  useEffect(() => {
    getapiData();
    getMenusByCatgoryId(1);
  }, []);

  const getapiData = async () => {
    let resp = await axios.get('http://103.13.113.58:9090/admin/menu-category');
    setData(resp.data.data);
    console.log(resp.data.data);
  };

  const getMenusByCatgoryId = async categoryId => {
    const url =
      'http://103.13.113.58:9090/admin/menu/web/by-category?categoryId=' +
      categoryId;
    let resp = await axios.get(url);
    setFeed(resp.data.data);
    console.log(resp.data.data);
    /* fetch(url)
      .then(re => re.json())
      .then(re => {
        this.setState({feed: re.data});
        //console.log(re.data);
      }); */
  };

  return (
    <>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.categoryContainer}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => setCategoryIndex(index)}>
              <Text
                style={[
                  styles.categoryText,
                  categoryIndex == index && styles.categoryTextSelected,
                ]}>
                {'   '}
                {item.name}
                {'   '}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View>
        <FlatList
          data={feed}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <ListItem
              key={item.id}
              name={item.name}
              description={item.description}
              images={item.images}
              price={item.price}
              discountPrice={item.discountPrice}
            />
          )}
        />

        {/*  <FlatList
            data={this.state.feed}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <ListItem
                key={item.id}
                name={item.name}
                description={item.description}
                images={item.images}
                price={item.price}
              />
            )}
          /> */}
      </View>
      {/* {this.state.data[0].name} */}

      {/* <Text>{this.state.data[1].name}</Text>
        <Text>{this.state.data[2].name}</Text>*/}
    </>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
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
