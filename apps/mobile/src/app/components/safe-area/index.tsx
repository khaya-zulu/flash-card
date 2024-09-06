import { ReactNode } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SafeAreaView, ThemeBackgroundColor } from './styles';
import { ViewProps, type DimensionValue } from 'react-native';

import { PaddedView } from '../padded-view';

interface Props extends ViewProps {
  children: ReactNode;
  background?: ThemeBackgroundColor;
  paddingTop?: DimensionValue;
  paddingBottom?: DimensionValue;
  paddingLeft?: DimensionValue;
  paddingRight?: DimensionValue;
  isPadded?: boolean;
}

export const SafeArea = ({
  children,
  background,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  isPadded = true,
  ...props
}: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      {...props}
      background={background}
      style={{
        paddingTop: paddingTop ?? insets.bottom,
        paddingBottom: paddingBottom ?? insets.bottom,
        paddingLeft: paddingLeft ?? insets.left,
        paddingRight: paddingRight ?? insets.right,
        ...props.style,
      }}
    >
      {isPadded ? <PaddedView>{children}</PaddedView> : children}
    </SafeAreaView>
  );
};
