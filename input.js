import React, {useState} from 'react'
import {Text, View, StyleSheet, TextInput} from 'react-native'

export default function Input(){

    const [number, onChange]= useState(null)
    const curhour = new Date().getHours()
    const curmin = new Date().getMinutes()
    const curDay = new Date().getDate() ;
    const curMonth = new Date().getMonth() + 1
    var curTime = new Date().getTime();
    
    

    //let dateStamp = new Date().toLocaleDateString()

    const convert = (hours) =>{
        
        //convert the given hour to ms, can also be expressed as hours*3600000
        hours = (hours*60*60*1000)

        const timeToEnd = new Date(hours + curTime).toString()

        console.log('can break fast at:' + timeToEnd)
        
    }

    
    
    //console.log(curhour, typeof curhour)
    //console.log(curmin)
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