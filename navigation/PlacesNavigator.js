import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import PlacesDetailScreen from "../screens/PlacesDetailScreen";
import PlacesListScreen from "../screens/PLacesListScreen";
import NewPlacesScreen from "../screens/NewPlacesScreen";
import MapScreen from "../screens/MapScreen";
import { Platform } from "react-native";
import Colors from "../constants/Colors";

const PlacesNavigator = createStackNavigator(
  {
    Places: PlacesListScreen,
    PlacesDetail: PlacesDetailScreen,
    NewPlace: NewPlacesScreen,
    Map: MapScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    },
  }
);

export default createAppContainer(PlacesNavigator);
