import { ChairColor, ChairMaterial, PillowColor } from "./state";

export enum ActionType {
  SetChairColor,
  SetChairMaterial,
  SetPillowColor,
}

export interface SetChairColor {
  type: ActionType.SetChairColor;
  payload: ChairColor;
}

export interface SetChairMaterial {
  type: ActionType.SetChairMaterial;
  payload: ChairMaterial;
}

export interface SetPillowColor {
  type: ActionType.SetPillowColor;
  payload: PillowColor;
}

export type AppActions = SetChairColor | SetChairMaterial | SetPillowColor;
