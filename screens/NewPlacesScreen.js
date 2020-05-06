import React from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
} from "react-native";
import Colors from "../constants/Colors ";

const NewPLacesScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.from}>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.textInput} />
        <Button title="SAve PLace" color={Colors.primary} onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

NewPLacesScreen.navigationOptions = {
  title: "Add Place",
};

const styles = StyleSheet.create({
  form: { margin: 30 },
  label: { fontSize: 18, marginBottom: 15 },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});

export default NewPLacesScreen;
