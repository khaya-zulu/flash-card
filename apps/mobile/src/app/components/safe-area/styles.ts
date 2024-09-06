import { styled } from 'styled-components/native';

import { THEME } from '../../theme';

export type ThemeBackgroundColor = keyof (typeof THEME)['colors'];

export const SafeAreaView = styled.View<{ background?: ThemeBackgroundColor }>`
  ${(props) =>
    props.background
      ? `background-color: ${THEME.colors[props.background]}`
      : ''}
`;
