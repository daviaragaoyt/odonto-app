import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Alert,
  Text,
  StatusBar,
  Image,
} from "react-native";
import { useRouter } from "expo-router"; // Importar o hook useRouter
import { useFonts, LilitaOne_400Regular } from "@expo-google-fonts/lilita-one";
import CustomText from "../components/CustomText";
import Body from "../components/Body";
import { styles } from "./styles";

export default function Index() {
  const router = useRouter(); // Inicializar o hook useRouter

  const [id, setId] = useState("");
  const [nome, setNome] = useState("");

  // Inicializando as notas dos dentes
  const [opcoesDentes, setOpcoesDentes] = useState([
    { id: 1, dente: "V11", nota: null },
    { id: 2, dente: "V16", nota: null },
    { id: 3, dente: "V26", nota: null },
    { id: 4, dente: "V31", nota: null },
    { id: 5, dente: "L36", nota: null },
    { id: 6, dente: "L46", nota: null },
  ]);

  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar a visibilidade do modal dos dentes
  const [selectedDenteIndex, setSelectedDenteIndex] = useState(-1); // Estado para armazenar o índice do dente selecionado (-1 indica nenhum dente selecionado)

  const handleSubmit = async () => {
    if (!id || !opcoesDentes ) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return("index");
    }
    
    try {
      const response = await fetch('http://192.168.1.5:3535/teste', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cod_paciente: id,
          dentinho:opcoesDentes[1].id,
        }),
      });
  
        console.log(id,opcoesDentes)
    
    } catch (error) {
      console.error('Erro ao cadastrar paciente:', error);
      Alert.alert('Erro', 'Erro ao cadastrar paciente. Por favor, tente novamente.');
    }
  };


  let [fontsLoaded] = useFonts({
    LilitaOne_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View>
        <CustomText>Carregando...</CustomText>
      </View>
    );
  }

  // Função para abrir o modal e selecionar o dente
  const handleOpenModal = (index: any) => {
    setSelectedDenteIndex(index);
    setModalVisible(true);
  };

  // Função para atualizar a nota de um dente específico
  const handleSelecionarNotaDente = (nota: any) => {
    if (selectedDenteIndex !== -1) {
      const novasOpcoesDentes = [...opcoesDentes];
      novasOpcoesDentes[selectedDenteIndex] = {
        ...novasOpcoesDentes[selectedDenteIndex],
        nota,
      };
      setOpcoesDentes(novasOpcoesDentes);
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <Body />
      <TouchableOpacity
        style={styles.smallSquareButton}
        onPress={() => router.back()}
      >
        <CustomText style={styles.smallSquareButtonText}>←</CustomText>
      </TouchableOpacity>
      <View style={styles.overlayContent}>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <CustomText style={styles.text}>NOME: </CustomText>
            <TextInput
              style={styles.input}
              onChangeText={setNome}
              value={nome}
            />
          </View>
          <View style={styles.inputContainer}>
            <CustomText style={styles.text}>CÓDIGO:</CustomText>
            <TextInput
              keyboardType="numeric"
              style={styles.input}
              onChangeText={setId}
              value={id}
            />
          </View>
          <CustomText style={styles.title}>DENTES</CustomText>

          <View style={styles.denteContainer}>
            {opcoesDentes.map((dente, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleOpenModal(index)}
                style={styles.selectButtonContainer}
              >
                <CustomText style={styles.text}>{dente.dente}</CustomText>
                <Image
                  source={require("../../../assets/images/Group.png")}
                  style={styles.image}
                />
                <View style={styles.inputDente}>
                  <CustomText>{dente.nota !== null ? ` ${dente.nota}` : ""}</CustomText>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Modal para seleção de notas dos dentes */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                {[1, 2, 3].map((nota) => (
                  <TouchableOpacity
                    key={nota}
                    onPress={() => handleSelecionarNotaDente(nota)}
                  >
                    <Text style={styles.modalText}>{`Nota ${nota}`}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </Modal>

          {/* Botão de resultado */}
          {opcoesDentes.every(dente => dente.nota !== null) && (
            <TouchableOpacity style={styles.inputSubmit} onPress={handleSubmit}>
              <CustomText style={styles.buttonText}>RESULTADO</CustomText>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}