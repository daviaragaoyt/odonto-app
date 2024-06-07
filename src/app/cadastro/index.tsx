import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Modal, Text, TouchableHighlight, StatusBar, Alert } from 'react-native';
import { useRouter } from 'expo-router'; // Importar o hook useRouter
import { useFonts, LilitaOne_400Regular } from '@expo-google-fonts/lilita-one';
import CustomText from '../components/CustomText';
import Body from '../components/Body';
import { styles } from './styles';

export default function Index() {
  const router = useRouter(); // Inicializar o hook useRouter

  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCPF] = useState('');
  const [idade, setIdade] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [genero, setGenero] = useState('');

  const handleSubmit = () => {
    if (!id || !nome || !cpf || !idade || !genero) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    console.log('ID:', id);
    console.log('Nome:', nome);
    console.log('CPF:', cpf);
    console.log('Idade:', idade);
    console.log('Gênero:', genero);

    // Navegar de volta para a página inicial após o envio bem-sucedido
    router.replace('/');
  };

  let [fontsLoaded] = useFonts({
    LilitaOne_400Regular,
  });

  if (!fontsLoaded) {
    return <View><CustomText>Carregando...</CustomText></View>;
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Body />
      <TouchableOpacity style={styles.smallSquareButton} onPress={() => router.back()}>
        <CustomText style={styles.smallSquareButtonText}>←</CustomText>
      </TouchableOpacity>
      <View style={styles.overlayContent}>
        <CustomText style={styles.title}>CADASTRO</CustomText>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <CustomText style={styles.text}>CÓDIGO:</CustomText>
            <TextInput
              style={styles.input}
              onChangeText={setId}
              value={id}
            />
          </View>

          <View style={styles.inputContainer}>
            <CustomText style={styles.text}>NOME:</CustomText>
            <TextInput
              style={styles.input}
              onChangeText={setNome}
              value={nome}
            />
          </View>

          <View style={styles.inputContainer}>
            <CustomText style={styles.text}>CPF:</CustomText>
            <TextInput
              style={styles.input}
              onChangeText={setCPF}
              value={cpf}
            />
          </View>

          <View style={styles.inputContainer}>
            <CustomText style={styles.text}>IDADE:</CustomText>
            <TextInput
              style={styles.input}
              onChangeText={setIdade}
              value={idade}
            />
          </View>

          <View style={styles.inputContainer}>
            <CustomText style={styles.text}>SEXO:</CustomText>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.input}>
              <CustomText style={styles.textSelected}>{genero || 'Selecionar'}</CustomText>
            </TouchableOpacity>
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TouchableHighlight
                  onPress={() => {
                    setGenero('Masculino');
                    setModalVisible(false);
                  }}
                  style={styles.modalOption}
                >
                  <Text>Masculino</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => {
                    setGenero('Feminino');
                    setModalVisible(false);
                  }}
                  style={styles.modalOption}
                >
                  <Text>Feminino</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => setModalVisible(false)}
                  style={styles.modalOption}
                >
                  <Text>Cancelar</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>

        <TouchableOpacity style={styles.inputSubmit} onPress={handleSubmit}>
          <CustomText style={styles.buttonText}>CADASTRAR </CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
}


