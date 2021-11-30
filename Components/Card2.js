import React,{useState} from 'react'
import { View, Text,Image ,TouchableOpacity,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Fontisto';

export default function Card2({navigation}) {
    const pizza = "../assets/Images/PizzaD.png";
    const [show, setShow] = useState(false);
    const [submitted,setSubmitted]=useState(false);
    const [increment,decrement]=useState(1);
    
    const onPressHandler=()=>{
      setSubmitted(!submitted);
    }

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
          <Text style={{ top: -2,color:'black' }}> Cheesy Pizza</Text>
          <Text style={{ top: -1, fontWeight: "bold", fontSize: 18 ,color:'black'}}>
            {"   "}$12.70
          </Text>
          <TouchableOpacity
            onPress={onPressHandler}
            style={{
              backgroundColor: submitted ? "#ffff" : '#FFD700',
              padding: 5,
              borderRadius: 15,
              left: -20,
              alignItems: "center",
            }}
          >
            {submitted ? (
              <View
                style={{
                  bottom: -10,
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={styles.btnTouchable}
                  onPress={() => decrement(increment - 1)}>
                  <Text style={styles.txt1}>-</Text>
                </TouchableOpacity>
                <Text
                  style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
                  {increment}
                </Text>
                <TouchableOpacity
                  style={styles.btnTouchable1}
                  onPress={() => decrement(increment + 1)}>
                  <Text style={styles.txt1}>+</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  Add to Cart
                </Text>
              </>
            )}
          </TouchableOpacity>
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
      btnTouchable:{
        alignItems:'center',
        height:25,
        width:25,
        backgroundColor:'#A9A9A9',
        borderRadius:5,
        justifyContent:'center',
        marginRight:15
      },
      btnTouchable1:{
        alignItems:'center',
        height:25,
        width:25,
        backgroundColor:'#FFD700',
        borderRadius:5,
        justifyContent:'center',
        marginLeft:15
      },
      txt:{
        fontWeight:'bold',
        fontSize:15,
        color:'black'
      },
      txt1:{
        fontWeight:'bold',
        fontSize:15,
        color:'black'
      },
})
