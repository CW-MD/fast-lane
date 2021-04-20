import React, {useState} from 'react'
import {Text, View, StyleSheet, TextInput} from 'react-native'

export default function Input(){

    const [number, onChange]= useState(null)
    const hour = new Date().getHours()
    const min = new Date().getMinutes()
    let dateStamp = new Date().toLocaleDateString()

    
    console.log(timeStamp)
    console.log(hour, typeof hour)
    console.log(min)
    return(
        <>
        <Text>The Current Date is {dateStamp} at {hour}:{min}</Text>
        <Text>I want to fast for <TextInput style={styles.input} 
        value={number} 
        keyboardType='number-pad' 
        placeholder="number of"
        onChangeText={onChange} 
        onSubmitEditing={console.log(number)}/> 
          hours</Text>
        </>
    )
}

const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
        width: '4.2rem'
    }
})