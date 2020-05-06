import * as FileSystem from "expo-file-system";
import { insertPlace, fetchPlaces } from "../../helpers/db";

export const ADD_PLACE = "ADD_PLACE";
export const GET_PLACES = "GET_PLACES";

export const addPlace = (title, imageUri) => {
  return async (dispatch) => {
    const fileName = imageUri.split("/").pop();
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        from: imageUri,
        to: newPath,
      });
      const dbResult = await insertPlace(
        title,
        newPath,
        "dummy address",
        15.6,
        12.3
      );
      dispatch({
        type: ADD_PLACE,
        placeData: {
          id: dbResult.insertId,
          title: title,
          image: newPath,
        },
      });
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  };
};

export const loadPlaces = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchPlaces();
      dispatch({ type: GET_PLACES, places: dbResult.rows._array });
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  };
};
