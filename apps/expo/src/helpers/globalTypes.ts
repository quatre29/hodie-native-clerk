import { RootStackParamList } from "../constants/routes";

export interface NavigationProp extends RootStackParamList {
  navigate: (screen: string, params?: { [key: string]: unknown }) => void;
}
