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

import gas from "./src/images/gas.png";

export default function App() {
  const [alcool, setAlcool] = useState();
  const [gasolina, setGasolina] = useState();
  const [calculo, setCalculo] = useState();
  const [isVisible, setIsVisible] = useState(false);

  const handleCalcular = () => {
    if (alcool > 0 && gasolina > 0) {
      setCalculo(alcool / gasolina);
      Keyboard.dismiss();
      alert(String(calculo));
    } else {
      alert("Preencha os valores dos combustíveis");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={gas} />
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
});
