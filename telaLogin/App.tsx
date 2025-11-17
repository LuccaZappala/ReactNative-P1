import { StatusBar } from "expo-status-bar";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import icon from "./assets/googleLogo.jpg";
import styles from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.image} />

      <Text style={styles.titulo}>Fazer Login</Text>

      <Text style={styles.descricao}>
        Use sua conta do Google. Ela será adicionada a este dispositivo e vai
        estar disponível para outros apps do Google.
      </Text>

      <TouchableOpacity>
        <Text style={styles.maisInformacoes}>
          Mais informações sobre como usar sua conta
        </Text>
      </TouchableOpacity>

      <TextInput
        placeholder="E-mail ou telefone"
        placeholderTextColor="#6e6e6e"
        style={styles.input}
      />

      <TouchableOpacity>
        <Text style={styles.esqueceu}>Esqueceu seu e-mail?</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.criar}>Criar conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoAvancar}>
        <Text style={styles.textoBotaoAvancar}>Avançar</Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </View>
  );
}
