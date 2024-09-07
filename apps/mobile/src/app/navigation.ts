import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  NavigationProp,
  useNavigation as useReactNavigation,
} from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Collection: { id: string };
};

export type ScreenProps<
  T extends keyof RootStackParamList,
  I extends string = ''
> = NativeStackScreenProps<RootStackParamList, T, I>;

export const useNavigation = useReactNavigation<
  NavigationProp<RootStackParamList>
>;
