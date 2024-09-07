/* eslint-disable jsx-a11y/accessible-emoji */
import { View } from 'react-native';
import { styled } from 'styled-components/native';
import { Check, House, X, ArrowsClockwise } from 'phosphor-react-native';

import { ScreenProps } from '../navigation';
import { theme } from '../theme';

import { CardFeature } from '../features/card';

import { SafeArea } from '../components/safe-area';
import { FlexCol, FlexRow } from '../components/flex';
import { CircleButton } from '../components/button';
import { useState } from 'react';

const FullScreenView = styled.View`
  flex: 1;
  flex-direction: column;
`;

const AbsoluteSafeArea = styled(SafeArea)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export const CollectionScreen = ({ navigation }: ScreenProps<'Collection'>) => {
  const [data, setData] = useState([
    { id: '123' },
    { id: '234' },
    { id: '567' },
  ]);

  return (
    <FullScreenView style={{ backgroundColor: '#000' }}>
      <View style={{ flex: 1, backgroundColor: theme.colors.primary }} />
      <View style={{ flex: 1.5, backgroundColor: theme.colors.grayLight }} />

      <AbsoluteSafeArea>
        <FlexCol
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 30,
          }}
        >
          <View style={{ flex: 1, position: 'relative' }}>
            {data.map((cardItem, idx) => (
              <CardFeature
                key={cardItem.id}
                idx={idx}
                id={cardItem.id}
                onScreenExit={() => {
                  setData((prevState) => {
                    // add a new item to the start
                    // and remove the last item.
                    const newList = [
                      { id: `${new Date().getMilliseconds()}` },
                      ...prevState.slice(0, -1),
                    ];
                    return newList;
                  });
                }}
                isSwipeable={idx === data.length - 1}
              />
            ))}
          </View>

          <View
            style={{
              paddingHorizontal: 8,
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <FlexRow>
              <CircleButton
                height={50}
                width={50}
                backgroundColor="red500"
                borderColor="red800"
                disabled
              >
                <X color="#fff" size={14} />
              </CircleButton>

              <CircleButton
                height={50}
                width={50}
                borderColor="slate500"
                disabled
              >
                <Check size={14} />
              </CircleButton>
            </FlexRow>
            <FlexRow style={{ alignItems: 'center' }}>
              <ArrowsClockwise />
              <CircleButton
                height={50}
                width={50}
                backgroundColor="secondary"
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <House color="#fff" size={14} />
              </CircleButton>
            </FlexRow>
          </View>
        </FlexCol>
      </AbsoluteSafeArea>
    </FullScreenView>
  );
};
