import React from 'react'
import { View, Text,Image ,TouchableOpacity,StyleSheet} from 'react-native'

export default function FCard2() {
    const pizza = "../assets/Images/burger_picture.png";
    return (
        <View style={styles.card2}>
        <View>
          <View style={{ right: -100 }}>
            <Image
              style={{ top: -5}}
              source={require("../assets/Images/favourites.png")}
            />
          </View>
          <Image
            source={require(pizza)}
            style={{
              top: -10,
              left: -5,
              width: 120,
              height: 90,
            }}
          />
          <Text
            style={{ top: -5, fontWeight: "bold", fontSize: 18, left: -20 ,color:'black'}}
          >
            Veggie Paradise
          </Text>
          <Text style={{ top: -2,color:'black'}}> Cheesy Pizza</Text>
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
            <Text style={{ fontWeight: "bold", top: 8, left: 5,color:'black' }}>02</Text>
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
