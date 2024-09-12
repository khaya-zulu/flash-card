import { useWindowDimensions, View } from 'react-native';

import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { theme } from '../theme';

import { Card } from '../components/card';
import { FlexCol } from '../components/flex';
import { InlineBlock } from '../components/inline-block';
import { Text } from '../components/text';
import { useCallback } from 'react';

export const CardFeature = ({
  idx,
  isSwipeable,
  onScreenExit,
  id,
}: {
  idx: number;
  isSwipeable?: boolean;
  id: string;
  onScreenExit: () => void;
}) => {
  // todo: make other elements rise up
  // left at this mark
  const translateX = useSharedValue(0);
  const direction = useSharedValue(0);

  const { width } = useWindowDimensions();

  const onScreenExitCallback = useCallback(() => {
    onScreenExit();
  }, []);

  const pan = Gesture.Pan()
    .onUpdate((e) => {
      if (isSwipeable) {
        // x is negative if the user swipes left.
        const isSwipeRight = e.translationX > 0;
        direction.value = isSwipeRight ? 1 : -1;

        translateX.value = e.translationX;
      }
    })
    .onEnd((e) => {
      if (isSwipeable) {
        // when the card is close enough to the end
        // or if its a fast swipe. remove it from the screen.
        if (Math.abs(e.translationX) > 150 || Math.abs(e.velocityX) > 1000) {
          const screenExitedXValue = (width + 100) * direction.value;

          translateX.value = withTiming(screenExitedXValue, {}, () => {
            // onScreenExit cannot be called directly in this function
            // assumption: this gets called on the UI thread, but still
            // doesn't make sense why it needs to be wrapped in a useCallback (todo: figure it out properly)
            // @see: https://docs.swmansion.com/react-native-reanimated/docs/threading/runOnJS
            runOnJS(onScreenExitCallback)();
          });
        } else {
          // snap it back
          translateX.value = withTiming(0, { duration: 500 });
        }
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    const rotateZ = interpolate(
      // given translateX output the rotation
      Math.abs(translateX.value),
      // input range - translateX should fall in this range (width of the screen)
      [0, width],
      // output range - rotate between 0 and 20
      [0, 20]
    );

    return {
      transform: [
        { translateX: translateX.value },
        { translateY: -13 * idx },
        { rotateZ: isSwipeable ? `${direction.value * rotateZ}deg` : '0deg' },
      ],
    };
  });

  return (
    <GestureDetector gesture={pan}>
      <Card
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        animatedStyle={animatedStyle}
      >
        <View />
        <Text
          style={{
            // color: '#fff',
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          This is card {id}
        </Text>
        <FlexCol style={{ alignItems: 'center' }}>
          <Text
            style={
              {
                // color: '#fff'
              }
            }
          >
            10/20 completed
          </Text>
          <InlineBlock
            style={{
              backgroundColor: theme.colors.primaryLight,
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 30,
            }}
          >
            <Text style={{ color: theme.colors.secondary }}>
              Test Notes | Question?
            </Text>
          </InlineBlock>
        </FlexCol>
      </Card>
    </GestureDetector>
  );
};
