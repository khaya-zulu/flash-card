import { View, type ViewProps } from 'react-native';
import { FlexRow } from './flex';

export const InlineBlock = (props: ViewProps) => {
  return (
    <FlexRow style={{ flexWrap: 'wrap' }}>
      <View {...props} />
    </FlexRow>
  );
};
