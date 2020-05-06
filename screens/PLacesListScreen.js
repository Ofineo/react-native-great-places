import React from "react";
import { View, Text, StyleSheet, Platform, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import { useSelector } from "react-redux";
import PlaceItem from "../components/PlaceItem";

const PlacesListScreen = (props) => {
  const places = useSelector((state) => state.places.places);

  return (
    <FlatList
      data={places}
      keyExtractor={(item => item.id)}
      renderItem={(itemData) => (
        <PlaceItem
          image={itemData.item.imageUri}
          title={itemData.item.title}
          address={null}
          onSelect={() =>
            props.navigation.navigate({
              routeName: "PlaceDetail",
              params: {
                placeTitle: itemData.item.tile,
                placeId: itemData.item.id,
              },
            })
          }
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

PlacesListScreen.navigationOptions = (navData) => {
  return {
    title: "All Places",
    headerRight: () => (
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
