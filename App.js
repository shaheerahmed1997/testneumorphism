
import React, { useState } from 'react';
import {

  StyleSheet,
  View,
  Text,
  TextInput,
 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {   Neomorph,NeomorphFlex } from 'react-native-neomorph-shadows';



const App= () => {
  const [salary,setsalary] = useState("")
  const [income,setincome] = useState("")
  const [loan,setloan] = useState("")
  return(
    <View style={styles.viewstyle}>
      <View style={{flexDirection:"row",justifyContent:"space-between",margin:10,marginTop:15}}>

              <Neomorph
          inner  = {false}// <- enable shadow inside of neomorph
          swapShadows  = {false}// <- change zIndex of each shadow color
          style={{
            shadowRadius: 10,
            borderRadius: 26,
            backgroundColor: '#eef0ef',
            width: 57,
            height: 55,
          }}
        >
      <Icon name="align-justify" size={30} color="#69CCC1" style={{margin:13}}/>
      </Neomorph>
    
      <Text style={{color:"grey",fontSize:17,marginTop:15}}>
       Mortgage Afordability Calculator
      </Text>
      </View>


       <View style={{marginLeft:20,marginTop:20}}>

        <Text style={{fontSize:15,color:"grey",marginBottom:5}}>Salary</Text>
         <NeomorphFlex
  inner = {true} // <- enable shadow inside of neomorph
  swapShadows = {true} // <- change zIndex of each shadow color
  style={{
    shadowRadius:3,
    borderRadius: 16,
    backgroundColor: '#eef0ef',
    width: 320,
    height: 50,
  }}
  lightShadowColor="#FFFFFF"
  darkShadowColor="black"

  
>
  <TextInput style={{ width:320,height:48,fontSize:20, marginLeft:5,color:"grey"}}
  value={salary}
    onChangeText={(value)=>{setsalary(value)}}
  />
</NeomorphFlex>  
      
</View>
<View style={{marginLeft:20,marginTop:20}}>
        <Text style={{fontSize:15,color:"grey",marginBottom:5}}>Other Income</Text>
         <NeomorphFlex
  inner = {true} // <- enable shadow inside of neomorph
  swapShadows = {true} // <- change zIndex of each shadow color
  style={{
    shadowRadius: 3,
    borderRadius: 16,
    backgroundColor: '#eef0ef',
    width: 320,
    height: 50,
  }}
  lightShadowColor="#FFFFFF"
  darkShadowColor="black"
 
>
<TextInput style={{ width:320,height:48,fontSize:20, marginLeft:5,color:"grey"}}
value={income}
onChangeText={(value)=>{setincome(value)}}
    />
</NeomorphFlex>  
      
</View>
<View style={{marginLeft:20,marginTop:20}}>
        <Text style={{fontSize:15,color:"grey",marginBottom:5}}>Credit Card & Loan Payment</Text>
         <NeomorphFlex
  inner = {true} // <- enable shadow inside of neomorph
  swapShadows = {true} // <- change zIndex of each shadow color
  style={{
    shadowRadius: 3,
    borderRadius: 16,
    backgroundColor: '#eef0ef',
    width: 320,
    height: 50,
  }}
  lightShadowColor="#FFFFFF"
  darkShadowColor="black"
  
>
<TextInput style={{ width:320,height:48,fontSize:20, marginLeft:5,color:"grey"}}
value={loan}
onChangeText={(value)=>{setloan(value)}}
    />
</NeomorphFlex>  
      
</View>

<View style={{marginLeft:20,marginTop:20}}>
        <Text style={{fontSize:20,color:"grey",marginBottom:10}}>Amount You Can Borrow</Text>
         <Neomorph
  inner = {false} // <- enable shadow inside of neomorph
  swapShadows = {false} // <- change zIndex of each shadow color
  style={{
    shadowRadius: 10,
    borderRadius: 13,
    backgroundColor: '#eef0ef',
    width: 320,
    height: 100,
  }}
  
>
<View style={{backgroundColor:"#69CCC1",width:250,heigh:10,margin:30,borderRadius:2}}>
  <Text style={{fontSize:3,color:"#69CCC1"}} >hello</Text>
  </View> 
  <Text style={{color:"grey"}}>{"\t\t 25,000 \t\t\t\t\t\t\t\t to \t\t\t\t\t\t\t\t 35,000 "}</Text>

</Neomorph> 

      
</View>
<View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",marginTop:80}}>
<Neomorph
          inner  = {false}// <- enable shadow inside of neomorph
          swapShadows  = {false}// <- change zIndex of each shadow color
          style={{
            shadowRadius: 10,
            borderRadius: 26,
            backgroundColor: '#eef0ef',
            width: 57,
            height: 55,
          }}
        >
      <Icon name="globe" size={30} color="#69CCC1" style={{margin:13,marginLeft:15}}/>
      </Neomorph>

      <Neomorph
          inner  = {false}// <- enable shadow inside of neomorph
          swapShadows  = {false}// <- change zIndex of each shadow color
          style={{
            shadowRadius: 10,
            borderRadius: 26,
            backgroundColor: '#eef0ef',
            width: 57,
            height: 55,
          }}
        >
      <Icon name="phone" size={30} color="#69CCC1" style={{margin:13,marginLeft:15}}/>
      </Neomorph>


    


</View>


    </View>

  ) 
}

const styles = StyleSheet.create({
  viewstyle:{
    flex:1,
    backgroundColor:"#eef0ef",
  },
  


})

export default App;
