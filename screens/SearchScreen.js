import React from 'react'
import { ScrollView,View, Text ,StyleSheet,Image,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Searchbar } from 'react-native-paper';
import Card1 from '../Components/Card1';
import Card2 from '../Components/Card2';
import Card3 from '../Components/Card3';

export default function SearchScreen({navigation}) {
    return (
        <SafeAreaView style={{ flex:1,padding:10}}>
        <View style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            style={styles.img}
            source={require('../assets/Images/Left_Arrow.png')}
          />
        </TouchableOpacity>
        <View style={{width:250,borderRadius:100,marginLeft:20}}>
       <Searchbar 
       inputStyle={{backgroundColor: 'white'}}
       round
       clearIcon
       placeholder="Pizza"
       searchIcon={{ size: 40 }}
       containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius:100}}
       />
       </View> 
      </View>
      <ScrollView>
      <TouchableOpacity onPress={()=>navigation.navigate('Details')}>
      <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              backgroundColor: "#ffff",
              marginRight: 10,
              borderRadius: 15,
              marginBottom: 30,
            }}
          >
            <Card3 />
          </View>
          <View style={{ backgroundColor: "#ffff", borderRadius: 15,marginBottom: 30, }}>
            <Card2 />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              backgroundColor: "#ffff",
              marginRight: 10,
              borderRadius: 15,
              marginBottom: 30,
            }}
          >
            <Card3 />
          </View>
          <View style={{ backgroundColor: "#ffff", borderRadius: 15 ,marginBottom: 30,}}>
            <Card2 />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              backgroundColor: "#ffff",
              marginRight: 10,
              borderRadius: 15,
              marginBottom: 70,
            }}
          >
            <Card3 />
          </View>
          <View style={{ backgroundColor: "#ffff", borderRadius: 15 ,marginBottom: 70,}}>
            <Card2 />
          </View>
        </View>
            </TouchableOpacity>
      </ScrollView>
        </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      
      
    },
    header: {
     flexDirection:'row',
      marginBottom: 20,
    },
    img: {
      width: 40,
      height: 40,
      marginRight: 20,
      marginTop: 10,
    },
  });