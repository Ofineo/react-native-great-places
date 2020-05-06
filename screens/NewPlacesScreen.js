import React,{useState} from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
} from "react-native";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
import * as placesActions from "../store/actions/places";
import ImgPicker from "../components/ImgPicker";

const NewPLacesScreen = (props) => {
    const [titleValue, setTitleValue] =useState('');
    const [selectedImage, setSelectedImage]= useState(null);

    const dispatch = useDispatch();

    const savePlaceHandler=()=>{
        dispatch(placesActions.addPlace(titleValue, selectedImage));
        props.navigation.goBack();
    }
    const titleChangeHandler=(text)=>{
        //TODO Add validation
        setTitleValue(text);
    }
    const imageTakenHandler= imagePath=>{
        setSelectedImage(imagePath);
    }

  return (
    <ScrollView>
      <View style={styles.from}>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.textInput} onChangeText={titleChangeHandler} value={titleValue} />
        <ImgPicker onImageTaken={imageTakenHandler}/>
        <Button title="SAve PLace" color={Colors.primary} onPress={savePlaceHandler} />
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
