import {
  pillowColorOptions,
  seatColorOptions,
  seatMaterialOptions,
} from "@/utils/static";

export interface AppState {
  chairColor: ChairColor;
  chairMaterial: ChairMaterial;
  pillowColor: PillowColor;
}

export interface ChairColor {
  id: number;
  color: string;
  name: string;
  info: string;
}

export interface ChairMaterial {
  id: number;
  name: string;
  value: string;
  info: string;
}

export interface PillowColor {
  id: number;
  color: string;
  name: string;
  info: string;
}

export const initialAppState: AppState = {
  chairColor: seatColorOptions[0],
  chairMaterial: seatMaterialOptions[0],
  pillowColor: pillowColorOptions[0],
};
