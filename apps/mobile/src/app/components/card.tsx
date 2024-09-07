import { ViewProps, type TouchableHighlightProps } from 'react-native';
import AnimatedView, { type AnimatedStyle } from 'react-native-reanimated';

import { FlexCol } from './flex';
import { theme, ThemeColors } from '../theme';

type Props = TouchableHighlightProps & {
  animatedStyle?: AnimatedStyle;
  variant?: 'white' | 'primary';
  shadowColor?: ThemeColors;
  color?: ThemeColors;
  flexColStyle?: ViewProps['style'];
};

export const Card = ({
  children,
  animatedStyle,
  variant = 'white',
  shadowColor,
  color,
  flexColStyle,
  ...props
}: Props) => {
  const defaultShadowColor = shadowColor
    ? theme.colors[shadowColor]
    : undefined;

  const sC =
    defaultShadowColor ??
    (variant === 'white' ? theme.colors.gray : theme.colors.primaryDark);

  const defaultColor = color ? theme.colors[color] : undefined;

  const c =
    defaultColor ??
    (variant === 'white' ? theme.colors.white : theme.colors.primary);

  return (
    <AnimatedView.View
      {...props}
      style={[
        {
          backgroundColor: sC,
          flex: 1,
          borderRadius: 20,
          paddingBottom: 4,
        },
        props.style,
        animatedStyle,
      ]}
    >
      <FlexCol
        style={[
          {
            backgroundColor: c,
            height: '100%',
            borderRadius: 20,
            borderColor: sC,
            borderWidth: 1,
            padding: 50,
            justifyContent: 'space-between',
            alignItems: 'center',
            display: 'flex',
          },
          flexColStyle,
        ]}
      >
        {children}
      </FlexCol>
    </AnimatedView.View>
  );
};
