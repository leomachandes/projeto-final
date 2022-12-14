import { createContext, useState } from "react";

export const PessoaContext = createContext({
  pessoaList: [],
  addPessoa: (pessoa) => {},
  updatePessoa: (pessoa) => {},
  setPessoa: (pessoa) => {},
});

export const PessoaContextProvider = ({ children }) => {
  const [pessoaList, setPessoaList] = useState([]);

 
  const addPessoa = (pessoa) => {
    setPessoaList((currentPessoaList) => [...currentPessoaList, pessoa]);
  };

  const updatePessoa = (pessoa) => {
    setPessoaList((currentPessoaList) => {
      const index = currentPessoaList.findIndex((p) => p.id === pessoa.id);
      currentPessoaList[index] = pessoa;
      return [...currentPessoaList];
    });
  };

  const setPessoas = (pessoas) => setPessoaList(pessoas);

  return (
    <PessoaContext.Provider value={{ pessoaList, addPessoa, updatePessoa, setPessoas }}>
      {children}
    </PessoaContext.Provider>
  );
};
