import { View, TextInput, Button, StyleSheet } from "react-native";
import { useContext, useState } from "react";
import { PessoaContext } from "../contexts/PessoaContext";
import { addNewPessoa } from "../services/PessoaApi";

const PessoaInput = () => {
  const pessoaContext = useContext(PessoaContext);

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [idade, setIdade] = useState("");

  const onAddHandler = async () => {
    const newPessoa = {
      nome: nome,
      sobrenome:sobrenome,
      idade:idade,
     
    };
    try {
      const { data: newPessoaCreated } = await addNewPessoa(newPessoa);
      pessoaContext.addPessoa(newPessoaCreated);
      setNome("");
      setSobrenome("")
      setIdade("")
    } catch (e) {
      Alert.alert("Erro", "Erro ao salvar dados da pessoa");
      console.log(e)
    }
  };

  
  return (
    <View style={styles.pessoaInput}>
      <TextInput
        style={styles.pessoaTextInput}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={(valor) => setNome(valor)}
      />
      <TextInput
        style={styles.pessoaTextInput}
        placeholder="Digite seu sobrenome"
        value={sobrenome}
        onChangeText={(valor) => setSobrenome(valor)}
      />
      <TextInput
        style={styles.pessoaTextInput}
        placeholder="Digite sua idade"
        keyboardType='numeric'
        value={idade}
        onChangeText={(valor) => setIdade(valor)}
      />
     
      <Button title="Salvar" onPress={onAddHandler} />
    </View>
  );
};

export default PessoaInput;

const styles = StyleSheet.create({
  pessoaInput: {
    flex: 4.5,
    flexDirection: "column",
   
    backgroundColor: "white",
    paddingTop: 16,
  },
  pessoaTextInput: {
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 16,
    padding: 16,
    fontSize: 12,
   
    marginRight: 8,
    marginTop:8,
    marginBottom:8
  
  },
});
