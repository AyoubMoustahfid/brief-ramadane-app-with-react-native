import React, {useState} from 'react'
import {View} from 'react-native'
import { StyleSheet, Text, TextInput, ImageBackground, Alert, TouchableOpacity} from 'react-native';


export default function AddBreakfast() {
  
  const [place, setPlace] = useState("")

 const  getAllBreakFest = async ()  => {
    const breakfast = firebase.firestore().collection('breackFest')
    const querySnapshot = await breakfast.get()
    const tempDoc = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() }
    })
    // console.log('====================================');
    // console.log(tempDoc);
    // console.log('====================================');
    const allAssistances = tempDoc;
 
    // console.log('********************************');
    // console.log(allAssistances);
    // console.log('********************************');
    return allAssistances;
}


  return (
        <View >
       <Text style={styles.title}>Afficher un aide place</Text>

       <View style={{marginRight: 5}}>

       <Text>Longtitude :</Text>
       <TextInput
       placeholder="Longtitude"
       style={styles.input}
     />

     
    <TouchableOpacity
     style={styles.someStyles}
   >
     <Text style={{color: 'white'}} >Add Breakfast</Text>
   </TouchableOpacity>


       </View>
        </View>
    )
}


const styles = StyleSheet.create({
  input: {
      width : 400,
      padding: 10,
      borderRadius:2,
      marginBottom: 5,
      borderWidth : 2,
      borderRadius: 5,
  },
  someStyles: {
    backgroundColor: '#2488EC',
    paddingHorizontal: 10, 
    paddingVertical: 12,
    marginHorizontal: 5,
    alignItems: 'center', 
    borderRadius: 4
  },
 title: {
   fontSize: 30,
   paddingVertical: 20
   
 }
});
