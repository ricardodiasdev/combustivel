import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Modal,
} from "react-native";
import React, { useState } from "react";

import logo from "./src/images/logo.png";
import gas from "./src/images/gas.png";

export default function App() {
  const [alcool, setAlcool] = useState(0);
  const [gasolina, setGasolina] = useState(0);
  const [calculo, setCalculo] = useState();
  const [isVisible, setIsVisible] = useState(false);

  const handleCalcular = () => {
    if (alcool > 0 && gasolina > 0) {
      setCalculo(alcool / gasolina);
      Keyboard.dismiss();
      setIsVisible(true);
    } else {
      alert("Preencha os valores dos combustíveis");
    }
  };

  const handleCalcularNovamente = () => {
    setIsVisible(false);
    setAlcool(0);
    setGasolina(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <Text style={styles.logoText}>Qual melhor opção?</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.fuelText}>Álcool (preço por litro)</Text>
          <TextInput
            style={styles.fuelTextInput}
            value={alcool}
            onChangeText={(e) => setAlcool(e)}
          />
        </View>
        <View>
          <Text style={styles.fuelText}>Gasolina (preço por litro)</Text>
          <TextInput
            style={styles.fuelTextInput}
            value={gasolina}
            onChangeText={(e) => setGasolina(e)}
          />
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={handleCalcular} style={styles.btn}>
          <Text style={styles.btnText}>Calcular</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.centeredView}>
        <Modal animationType="slide" visible={isVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.header}>
                <Image source={gas} />
                <Text style={{ color: "green", colorWeight: "bold" }}>
                  Compensa usar {calculo <= 0.7 ? "Álcool" : "Gasolina"}
                </Text>
              </View>
              <View>
                <Text style={styles.fuelText}>Com os preços:</Text>
                <Text style={styles.fuelText}>Álcool: R$ {alcool}</Text>
                <Text style={styles.fuelText}>Gasolina: R$ {gasolina}</Text>
              </View>
              <View style={styles.btnContainer}>
                <TouchableOpacity
                  onPress={handleCalcularNovamente}
                  style={styles.btn}
                >
                  <Text style={styles.btnText}>Calcula novamente</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
  inputContainer: {
    marginBottom: 20,
  },
  fuelTextInput: {
    backgroundColor: "#FFF",
    marginBottom: 20,
  },
  fuelText: {
    fontWeight: "bold",
    color: "#FFF",
  },
  btnContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "orange",
    width: 200,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderRadius: 15,
  },
  btnText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFF",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
