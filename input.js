import React, {useState} from 'react'
import {Text, View, StyleSheet, TextInput} from 'react-native'

export default function Input(){

    const [number, onChange]= useState(null)
    const curhour = new Date().getHours()
    const curmin = new Date().getMinutes()
    const curDay = new Date().getDate() ;
    const curMonth = new Date().getMonth() + 1

    //let dateStamp = new Date().toLocaleDateString()

    const convert = (hours) =>{
        let dayCount = 0;
        let hourCount = 0;
        while(hours >= 24){
            dayCount++;
            hours -=24;
        }
        hourCount += hours;


        console.log(`You can break the fast in ${dayCount} days, ${hourCount} hours`)
        
    }

    
    
    console.log(curhour, typeof curhour)
    console.log(curmin)
    return(
        <>
        <Text>The Current Date is {curMonth}/{curDay} at {curhour}:{curmin}</Text>
        <Text>I want to fast for <TextInput style={styles.input} 
        value={number} 
        keyboardType='number-pad' 
        placeholder="number of"
        onChangeText={onChange} 
        onSubmitEditing={convert(number)}/> 
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