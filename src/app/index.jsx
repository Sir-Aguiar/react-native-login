import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { DefaultInput } from "../constants/Input";
import Logo from "../../assets/logo.png";
import { useState } from "react";
export default function Home() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.viewContainer}>
      <Image source={Logo} style={{ width: 128, height: 128, marginVertical: 64 }} />
      <View style={styles.inputContainer}>
        <TextInput
          value={userName}
          onChangeText={(value) => setUserName(value)}
          style={{ ...DefaultInput }}
          placeholder="Nome de usuário"
        />
        <TextInput
          value={password}
          onChangeText={(value) => setPassword(value)}
          style={{ ...DefaultInput }}
          placeholder="Senha"
        />
      </View>

      <Link href="/signup" asChild>
        <Text style={styles.signUpLink}>Cadastrar</Text>
      </Link>

      <TouchableOpacity style={styles.sender}>
        <Text style={styles.senderText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    padding: 16,
    gap: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "100%",
    gap: 12,
  },
  sender: {
    width: "100%",
    padding: 14,
    borderRadius: 4,
    backgroundColor: "#222",
    marginVertical: 12,
  },
  senderText: {
    textAlign: "center",
    color: "#e3e3e3",
    fontSize: 16,
    fontWeight: "700",
  },
  signUpLink: {
    paddingHorizontal: 8,
    alignSelf: "flex-start",
    textDecorationLine: "underline",
    color: "#2979ff",
  },
});
