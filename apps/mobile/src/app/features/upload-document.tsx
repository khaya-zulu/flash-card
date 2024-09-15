import * as DocumentPicker from 'expo-document-picker';

import * as FileSystem from 'expo-file-system';
import { Pressable, TextInput } from 'react-native';
import { useRef, useState } from 'react';

import styled from 'styled-components/native';
import { FilePdf } from 'phosphor-react-native';

import { theme } from '../theme';

import { FlexCol } from '../components/flex';
import { Text } from '../components/text';
import { Button } from '../components/button';

type Asset = DocumentPicker.DocumentPickerAsset;

const Container = styled(FlexCol)<{ width: number }>`
  height: 400px;
  width: ${(props) => props.width}px;
  border-width: 1px;
  border-radius: 20px;
  margin-top: 62px;
  border: ${theme.colors.gray};
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.white};
`;

export const UploadDocument = ({
  width,
  onComplete,
}: {
  width: number;
  onComplete: (response: any) => void;
}) => {
  const uploadTaskRef = useRef<FileSystem.UploadTask>();

  const [selectedAsset, setSelectedAsset] = useState<Asset>();
  const [name, setName] = useState('');

  // todo-before-review: use toast.promise implementation.
  const [state, setState] = useState<'uploading' | 'timeout' | 'error'>();

  const [progress, setProgress] = useState(0);

  const onUpload = async () => {
    if (selectedAsset) {
      const base64 = await FileSystem.readAsStringAsync(selectedAsset.uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
    }
  };

  return (
    <Pressable
      disabled={!!selectedAsset}
      onPress={async () => {
        const file = await DocumentPicker.getDocumentAsync({
          copyToCacheDirectory: true,
        });

        if (!file.canceled) {
          const [singleAsset] = file.assets;
          setSelectedAsset(singleAsset);
        }
      }}
    >
      <Container width={width - 100}>
        {state !== 'uploading' ? (
          <>
            <FilePdf size={30} />
            <Text>{selectedAsset?.name ?? 'Upload a document'}</Text>

            {selectedAsset ? (
              <FlexCol
                style={{
                  borderColor: theme.colors.gray,
                  borderTopWidth: 1,
                  borderRadius: 20,
                  marginTop: 10,
                  padding: 15,
                  gap: 0,
                }}
              >
                <TextInput
                  placeholder="Collection Name"
                  style={{
                    textAlign: 'center',
                    marginBottom: 30,
                    marginTop: 20,
                  }}
                  onChangeText={setName}
                  value={name}
                />
                <Button onPress={onUpload}>Create</Button>
                <Button
                  variant="black-empty"
                  onPress={() => {
                    setSelectedAsset(undefined);
                    setName('');
                  }}
                >
                  Re-upload document
                </Button>
              </FlexCol>
            ) : null}
          </>
        ) : null}
        {state === 'uploading' ? (
          <Pressable
            onPress={() => {
              void uploadTaskRef.current?.cancelAsync();
            }}
          >
            <Text>Uplaoding {progress}%...</Text>
          </Pressable>
        ) : null}
      </Container>
    </Pressable>
  );
};
