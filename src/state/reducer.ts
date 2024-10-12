import {
  ActionType,
  AppActions,
  SetChairColor,
  SetChairMaterial,
  SetPillowColor,
} from "./actions";
import { AppState, ChairColor, ChairMaterial, PillowColor } from "./state";

export function appReducer(state: AppState, action: AppActions): AppState {
  switch (action.type) {
    case ActionType.SetChairColor:
      return { ...state, chairColor: action.payload };

    case ActionType.SetChairMaterial:
      return { ...state, chairMaterial: action.payload };

    case ActionType.SetPillowColor:
      return { ...state, pillowColor: action.payload };

    default:
      return state;
  }
}

export const setChairColor = (chair: ChairColor): SetChairColor => {
  return {
    type: ActionType.SetChairColor,
    payload: chair,
  };
};

export const setChairMaterial = (material: ChairMaterial): SetChairMaterial => {
  return {
    type: ActionType.SetChairMaterial,
    payload: material,
  };
};

export const setPillowColor = (pillowColor: PillowColor): SetPillowColor => {
  return {
    type: ActionType.SetPillowColor,
    payload: pillowColor,
  };
};
