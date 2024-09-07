import { type ReactNode } from 'react';
import { Pressable } from 'react-native';
import { theme, ThemeColors } from '../theme';

export const CircleButton = ({
  height,
  width,
  backgroundColor,
  borderColor,
  children,
  disabled,
}: {
  height: number;
  width: number;
  backgroundColor?: ThemeColors;
  children: ReactNode;
  disabled?: boolean;
  borderColor?: ThemeColors;
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
    >
      {children}
    </Pressable>
  );
};
