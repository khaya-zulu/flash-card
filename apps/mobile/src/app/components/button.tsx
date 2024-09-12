import { type ReactNode } from 'react';
import {
  Pressable,
  PressableProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { Text } from './text';

import { theme, type ThemeColors } from '../theme';

type Props = TouchableOpacityProps & {
  variant?: 'primaryDark' | 'primaryDark-empty' | 'black-empty';
};

export const Button = ({
  children,
  variant = 'primaryDark',
  ...props
}: Props) => {
  const isEmpty = variant?.includes('empty');

  return (
    <TouchableOpacity
      {...props}
      style={[
        {
          backgroundColor: isEmpty
            ? 'transparent'
            : theme.colors[variant as ThemeColors],
          paddingHorizontal: 20,
          paddingVertical: 15,
          borderRadius: 15,
        },
        props.style,
      ]}
    >
      <Text
        style={{
          color: !isEmpty
            ? '#fff'
            : theme.colors[variant?.replace('-empty', '') as ThemeColors],
          textAlign: 'center',
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export const CircleButton = ({
  height,
  width,
  backgroundColor,
  borderColor,
  children,
  disabled,
  onPress,
}: {
  height: number;
  width: number;
  backgroundColor?: ThemeColors;
  children: ReactNode;
  disabled?: boolean;
  borderColor?: ThemeColors;
  onPress?: PressableProps['onPress'];
}) => {
  const bg = backgroundColor ? theme.colors[backgroundColor] : '#fff';
  const bColor = borderColor ? theme.colors[borderColor] : '#fff';

  return (
    <Pressable
      style={{
        height,
        width,
        display: 'flex',
        backgroundColor: bg,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: disabled ? 0.4 : 1,
        borderColor: bColor,
        borderWidth: 1,
      }}
      disabled={disabled}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
};
