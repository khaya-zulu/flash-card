/* eslint-disable jsx-a11y/accessible-emoji */
import { type ReactNode } from 'react';
import {
  View,
  TouchableHighlight,
  Pressable,
  type AnimatableNumericValue,
} from 'react-native';
import { styled } from 'styled-components/native';
import { Check, House, X } from 'phosphor-react-native';

import { ScreenProps } from '../App.types';
import { THEME, ThemeColors } from '../theme';

import { SafeArea } from '../components/safe-area';
import { FlexCol, FlexRow } from '../components/flex';
import { InlineBlock } from '../components/inline-block';

import { Text } from '../components/text';

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

const CircleButton = ({
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
  const bg = backgroundColor ? THEME.colors[backgroundColor] : '#fff';
  const bColor = borderColor ? THEME.colors[borderColor] : '#fff';

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
        opacity: disabled ? 0.6 : 1,
        borderColor: bColor,
        borderWidth: 1,
      }}
      disabled={disabled}
    >
      {children}
    </Pressable>
  );
};

export const HomeScreen = ({ navigation }: ScreenProps<'Home'>) => {
  return (
    <FullScreenView style={{ backgroundColor: '#000' }}>
      <View style={{ flex: 1, backgroundColor: THEME.colors.secondary }} />
      <View style={{ flex: 1, backgroundColor: '#ebebec' }} />

      <AbsoluteSafeArea>
        <FlexCol
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 30,
          }}
        >
          <TouchableHighlight
            style={{
              backgroundColor: THEME.colors.primaryDark,
              flex: 1,
              borderRadius: 20,
            }}
          >
            <FlexCol
              style={{
                backgroundColor: THEME.colors.primary,
                height: '100%',
                transform: [{ translateY: -8 }],
                borderRadius: 20,
                borderColor: THEME.colors.primaryDark,
                borderWidth: 1,
                padding: 50,
                justifyContent: 'space-between',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              <View />
              <Text
                style={{
                  color: '#fff',
                  fontSize: 30,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}
              >
                What are the 3 types of cover on a motor plan?
              </Text>
              <FlexCol style={{ alignItems: 'center' }}>
                <Text style={{ color: '#fff' }}>10/20 completed</Text>
                <InlineBlock
                  style={{
                    backgroundColor: THEME.colors.primaryLight,
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 30,
                  }}
                >
                  <Text style={{ color: THEME.colors.secondary }}>
                    Motor Quiz | Question?
                  </Text>
                </InlineBlock>
              </FlexCol>
            </FlexCol>
          </TouchableHighlight>
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
            <CircleButton height={50} width={50} backgroundColor="secondary">
              <House color="#fff" size={14} />
            </CircleButton>
          </View>
        </FlexCol>
      </AbsoluteSafeArea>
    </FullScreenView>
  );
};
