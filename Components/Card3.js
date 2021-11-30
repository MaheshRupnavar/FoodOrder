import React from 'react'
import { View, Text,Image ,TouchableOpacity,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Fontisto';

export default function Card3({navigation}) {
    const pizza = "../assets/Images/PizzaD.png";
    const [show, setShow] = React.useState(false);
    
    return (
        <View style={styles.card2}>
        <View>
          <View style={{ right: -100 }}>
          <TouchableOpacity onPress={()=>setShow(!show)}>
          <Icon
          style={{top: -10}}
          name={show===false?'heart-alt':'heart'}
          size={24}
          />
          </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('Details')}>
          <Image
            source={require(pizza)}
            style={{
              top: -10,
              left: -5,
              width: 100,
              height: 90,
            }}
          />
          </TouchableOpacity>
          <Text
            style={{ top: -5, fontWeight: "bold", fontSize: 18, left: -20 ,color:'black'}}
          >
            Veggie Paradise
          </Text>
          <Text style={{ top: -2 ,color:'black'}}> Cheesy Pizza</Text>
          <Text style={{ top: -1, fontWeight: "bold", fontSize: 18 ,color:'black'}}>
            {"   "}$12.70
          </Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#FFD700",
                padding: 5,
                borderRadius: 10,
                left: -10,
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "bold",color:'black'}}> - </Text>
            </TouchableOpacity>
            <Text style={{ fontWeight: "bold", top: 8, left: 5 ,color:'black'}}>02</Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#FFD700",
                padding: 5,
                borderRadius: 10,
                left: 20,
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "bold" ,color:'black'}}> + </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
}


const styles=StyleSheet.create({
    card2: {
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "space-evenly",
        height: 250,
        borderRadius: 15,
        padding: 5,
        width: 175,
      },
}
)
