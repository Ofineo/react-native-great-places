import { ADD_PLACE, GET_PLACES } from "../actions/places";
import Place from "../../models/place";

const initialState = {
  places: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const newPlace = new Place(
        action.placeData.id.toString(),
        action.placeData.title,
        action.placeData.image
      );
      return {
        ...state,
        places: state.places.concat(newPlace),
      };
    case GET_PLACES:
      return {
        ...state,
        places: action.places.map(
          (place) =>
            new Place(place.id.toString(), places.title, places.imageUri)
        ),
      };
    default:
      return state;
  }
};
