import { styled } from 'styled-components/native';

export const FlexCol = styled.View`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FlexRow = styled(FlexCol)`
  flex-direction: row;
`;
