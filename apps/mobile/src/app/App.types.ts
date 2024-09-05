import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
};

export type ScreenProps<
  T extends keyof RootStackParamList,
  I extends string = ''
> = NativeStackScreenProps<RootStackParamList, T, I>;
