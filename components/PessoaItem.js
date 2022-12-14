import { Pressable, View, Text, StyleSheet } from "react-native";

const PessoaItem = (props) => {
  return (
    <Pressable onPress={props.onPress}>
      <View style={styles.PessoaListItem}>
        <Text style={styles.PessoaListItemText}>
          "Nome:" {props.pessoa.nome}
        </Text>
        <Text style={styles.PessoaListItemText}>
          "Sobrenome: {props.pessoa.sobrenome}
        </Text>
        <Text style={styles.PessoaListItemText}>
          "Idade": {props.pessoa.idade}
        </Text>
        <Text style={styles.PessoaListItemText}>
          "Clique em mim para excluir"
        </Text>
      </View>
    </Pressable>
  );
};

export default PessoaItem;

const styles = StyleSheet.create({
  PessoaListItem: {
  
    padding: 16,
    border: 1,
    backgroundColor:"lightblue",
    borderRadius: 16,
    margin: 8,
  },
  PessoaListItemText: {
    
    fontSize: 12,
    
  },
});
