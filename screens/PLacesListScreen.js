import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const PlacesListScreen = (props) => {
  return <View><Text>PlacesListScreen</Text></View>;
};

const styles = StyleSheet.create({});

PlacesListScreen.navigationOptions = (navData) => {
  return {
    title: "All Places",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Add a place"
          iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
          onPress={() => navData.navigation.navigate({ routeName: "NewPlace" })}
        />
      </HeaderButtons>
    ),
  };
};

export default PlacesListScreen;
