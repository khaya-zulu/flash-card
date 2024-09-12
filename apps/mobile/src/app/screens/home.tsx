/* eslint-disable jsx-a11y/accessible-emoji */
import { ScreenProps } from '../navigation';
import { theme } from '../theme';

import { FlatList, useWindowDimensions, View } from 'react-native';

import { ArrowRight, FilePdf, House, Trash } from 'phosphor-react-native';

import { UploadDocument } from '../features/upload-document';

import { SafeArea } from '../components/safe-area';
import { Text } from '../components/text';
import { Card } from '../components/card';
import { FlexCol, FlexRow } from '../components/flex';
import { CircleButton } from '../components/button';

import { useNavigation } from '../navigation';

const Folder = ({ width }: { width: number }) => {
  const navigation = useNavigation();

  return (
    <View style={{ height: 430, width: width - 100 }}>
      <View style={{ position: 'relative', height: 400 }}>
        {new Array(3).fill(null).map((_, idx) => {
          const top = 30 - 10 * idx;
          return (
            <Card
              key={'inner-card' + idx}
              style={{
                position: 'absolute',
                top,
                left: top - idx,
                height: 300,
                width: '90%',
              }}
            />
          );
        })}
        <Card
          shadowColor="primaryDark"
          color="primary"
          style={{
            position: 'absolute',
            width: '100%',
            height: '80%',
            bottom: -30,
            left: 0,
          }}
          flexColStyle={{
            padding: 30,
          }}
        >
          <FlexRow
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}
          >
            <CircleButton height={50} width={50}>
              <Trash />
            </CircleButton>
            <CircleButton
              height={50}
              width={50}
              onPress={() => {
                navigation.navigate('Collection', { id: '' });
              }}
            >
              <ArrowRight />
            </CircleButton>
          </FlexRow>
        </Card>
      </View>
    </View>
  );
};

export const HomeScreen = ({ navigation }: ScreenProps<'Home'>) => {
  const { width } = useWindowDimensions();

  return (
    <SafeArea style={{ backgroundColor: theme.colors.grayLight }}>
      <FlexCol style={{ height: '100%' }}>
        <FlexRow style={{ paddingHorizontal: 20 }}>
          <House />
          <Text fontSize="lg">Collections</Text>
        </FlexRow>

        <FlatList
          horizontal
          data={[{ id: '123' }, { id: '234' }, { id: '567' }]}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 30 }}
          ListHeaderComponent={() => <UploadDocument width={width} />}
          renderItem={() => (
            <FlexCol style={{ flex: 1, justifyContent: 'center', gap: 40 }}>
              <Folder width={width} />

              <FlexCol style={{ paddingHorizontal: 20 }}>
                <Text fontSize="lg">Periodic Table</Text>
                <Text>21/40 Lesson complete</Text>
              </FlexCol>
            </FlexCol>
          )}
        />
      </FlexCol>
    </SafeArea>
  );
};
