import axios from "axios";
import { useContext, useEffect } from "react";
import { View, ScrollView, StyleSheet, Alert } from "react-native";
import { PessoaContext } from "../contexts/PessoaContext";
import { findAllPessoas,deletePessoa } from "../services/PessoaApi";

import PessoaItem from "./PessoaItem";

const PessoaList = () => {
  const pessoaContext = useContext(PessoaContext);

  const findAll = async () => {
    try {
      const response = await findAllPessoas();
      pessoaContext.setPessoas(response.data);
    } catch (e) {
      Alert.alert("Erro", "Erro ao carregar lista de dados de pessoas");
      console.log(e)
    }
  };
  
  useEffect(() => {
   
    
    findAll();
  }, []);

  const onFinishHandler = async (pessoa) => {


    try {
      await deletePessoa(pessoa);
      findAll();
    } catch (e) {
      Alert.alert("Erro", "Erro ao excluir dados da pessoa");
      console.log(e)
    }
  };

  return (
    <View style={styles.pessoaList}>
      <ScrollView>
        {pessoaContext.pessoaList.map((pessoa) => (
          <PessoaItem
            key={pessoa.id}
            pessoa={pessoa}
            onPress={() => onFinishHandler(pessoa)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default PessoaList;

const styles = StyleSheet.create({
  pessoaList: {
    flex: 6,
    backgroundColor: "write",
    paddingTop: 8,
  },
});
