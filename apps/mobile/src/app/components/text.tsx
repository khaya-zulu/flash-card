import styled from 'styled-components/native';

const fonts = {
  base: '16px',
};

export const Text = styled.Text<{ fontSize?: keyof typeof fonts }>`
  font-weight: 600;
  font-size: ${(props) => fonts[props.fontSize ?? 'base']};
`;
