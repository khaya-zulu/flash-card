import { type TouchableHighlightProps } from 'react-native';
import AnimatedView, { type AnimatedStyle } from 'react-native-reanimated';

import { FlexCol } from './flex';
import { theme } from '../theme';

type Props = TouchableHighlightProps & {
  animatedStyle: AnimatedStyle;
  variant?: 'white' | 'primary';
};

export const Card = ({
  children,
  animatedStyle,
  variant = 'white',
  ...props
}: Props) => {
  return (
    <AnimatedView.View
      {...props}
      style={[
        {
          backgroundColor:
            variant === 'white'
              ? theme.colors.slate500
              : theme.colors.primaryDark,
          flex: 1,
          borderRadius: 20,
          paddingBottom: 4,
        },
        props.style,
        animatedStyle,
      ]}
    >
      <FlexCol
        style={{
          backgroundColor:
            variant === 'white' ? theme.colors.white : theme.colors.primary,
          height: '100%',
          borderRadius: 20,
          borderColor: theme.colors.primaryDark,
          borderWidth: 1,
          padding: 50,
          justifyContent: 'space-between',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        {children}
      </FlexCol>
    </AnimatedView.View>
  );
};
