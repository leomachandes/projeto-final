import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { PessoaContextProvider } from "../contexts/PessoaContext";
import PessoaInput from "./PessoaInput";
import PessoaList from "./PessoaList";

const Pessoas = () => {
  return (
    <View style={styles.container}>
      <PessoaContextProvider>
        <PessoaInput />
        <PessoaList />
      </PessoaContextProvider>
    </View>
  );
};

export default Pessoas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
