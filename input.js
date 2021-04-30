import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

export default function Input() {
  const [number, onChange] = useState(null);
  let inputGiven = false;
  const curhour = new Date().getHours();
  const curmin = new Date().getMinutes();
  const curDay = new Date().getDate();
  const curMonth = new Date().getMonth() + 1;
  var curTime = new Date().getTime();
  let timeToEnd;

  //let dateStamp = new Date().toLocaleDateString()

  const convert = (hours) => {
    //convert the given hour to ms, can also be expressed as hours*3600000
    hours = hours * 60 * 60 * 1000;

    timeToEnd = new Date(hours + curTime).toString();
    inputGiven = true;

    console.log("can break fast at:" + timeToEnd);
    console.log(curTime.toString());
    console.log(typeof timeToEnd);
  };

  //console.log(curhour, typeof curhour)
  //console.log(curmin)
  return (
    <>
      <Text>
        The Current Date is {curMonth}/{curDay} at {curhour}:{curmin}
      </Text>
      <Text>
        I want to fast for{" "}
        <TextInput
          style={styles.input}
          value={number || 0}
          keyboardType="number-pad"
          placeholder="number of"
          onChangeText={onChange}
          onSubmitEditing={convert(number)}
        />
        hours
      </Text>
      {inputGiven ? (
        <Text>You can break your fast at {timeToEnd}</Text>
      ) : (
        <Text>Please enter the hours you'd like to fast</Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: "4.2rem",
  },
});
