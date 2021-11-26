import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'

const burger = "../assets/Images/burger_picture.png";
export default function Card1() {
    return (

              <View style={styles.card1}>
               
                <View>
                  <View style={{right:-120}}>
                    <Image
                      style={{top:30}}
                      source={require("../assets/Images/favouritesTab.png")}
                    />

                  </View>
                  <Image
                    source={require(burger)}
                    style={{
                      justifyContent: "center",
                      top: -5,
                      width: 150,
                      height: 150,
                    }}
                  />
                  <Text
                    style={{
                      top: -30,
                      fontWeight: "bold",
                      fontSize: 18,
                      
                    }}
                  >
                    {"     "}HamBurger
                  </Text>
                  <Text style={{ top: -30 }}>{"        "}Double Patty</Text>
                  <Text style={{ top: -30, fontWeight: "bold", fontSize: 18 }}>
                    {"          "}$12.70
                  </Text>
                </View>
              </View>
            )
    }


    const styles = StyleSheet.create({
        card: {
          height: 40,
          marginLeft: 30,
          alignItems: "flex-end",
          justifyContent: "space-evenly",
          width: 230,
          marginHorizontal: 2,
          borderRadius: 10,
          marginBottom: 20,
          padding: 15,
        },
        card1: {
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "space-evenly",
            height: 200,
            borderRadius: 15,
            padding: 5,
            width: 175,
          },
        });