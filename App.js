import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PlacesNavigator from "./navigation/PlacesNavigator";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import placesReducer from "./store/reducers/places";
import { init } from "./helpers/db";

init()
  .then(() => console.log("initialized database"))
  .catch((err) => console.log("Init db failed", err));

const rootReducer = combineReducers({
  places: placesReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}
