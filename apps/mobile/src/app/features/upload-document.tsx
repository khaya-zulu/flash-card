import * as DocumentPicker from 'expo-document-picker';
import { Pressable, TextInput } from 'react-native';
import { useState } from 'react';

import { theme } from '../theme';

import { FilePdf } from 'phosphor-react-native';

import { FlexCol } from '../components/flex';
import { Text } from '../components/text';
import { Button } from '../components/button';

type Asset = DocumentPicker.DocumentPickerAsset;

export const UploadDocument = ({
  width,
  onComplete,
}: {
  width: number;
  onComplete: (response: any) => void;
}) => {
  const [selectedAsset, setSelectedAsset] = useState<Asset>();
  const [name, setName] = useState('');

  // todo-before-review: use toast.promise implementation.
  const [state, setState] = useState<'uploading' | 'timeout' | 'error'>();

  const onCreateDocumentHandler = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('POST', `/new/collection/${selectedAsset?.name}`);

    xhr.onload = () => {
      const response = JSON.parse(xhr.response);
      onComplete(response);
    };

    xhr.onerror = (e) => {
      // toast message
      setState('error');
    };

    xhr.ontimeout = (e) => {
      // toast message
      setState('timeout');
    };

    if (selectedAsset) {
      const formData = new FormData();

      // @ts-expect-error - this should not
      // be throwing an type error.
      formData.append('file', {
        uri: selectedAsset.uri,
        type: selectedAsset.mimeType ?? '',
        name: `${selectedAsset.name}.${selectedAsset.mimeType}`,
      });

      xhr.send(formData);

      xhr.upload.onprogress = ({ total, loaded }) => {
        const uploadProgress = loaded / total;
        console.log(uploadProgress);

        setState(undefined);
      };
    }
  };

  return (
    <Pressable
      disabled={!!selectedAsset}
      onPress={async () => {
        const file = await DocumentPicker.getDocumentAsync();

        if (!file.canceled) {
          const [singleAsset] = file.assets;
          setSelectedAsset(singleAsset);
        }
      }}
    >
      <FlexCol
        style={{
          borderWidth: 1,
          width: width - 100,
          height: 400,
          borderRadius: 20,
          marginTop: 62,
          borderColor: theme.colors.gray,
          borderStyle: 'dashed',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          paddingHorizontal: 20,
        }}
      >
        {state !== 'uploading' ? (
          <>
            <FilePdf size={30} />
            <Text>{selectedAsset?.name ?? 'Upload a document'}</Text>

            {selectedAsset ? (
              <FlexCol
                style={{
                  width: '100%',
                  borderColor: theme.colors.gray,
                  borderWidth: 1,
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
                <Button onPress={onCreateDocumentHandler}>Create</Button>
                <Button
                  variant="black-empty"
                  onPress={() => {
                    setSelectedAsset(undefined);
                  }}
                >
                  Re-upload document
                </Button>
              </FlexCol>
            ) : null}
          </>
        ) : null}
        {state === 'uploading' ? <Text>Uplaoding...</Text> : null}
      </FlexCol>
    </Pressable>
  );
};
