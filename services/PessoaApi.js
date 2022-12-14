import axios from "axios";

const apiUrl = "http://10.0.2.2:3000/pessoas";

export const findAllPessoas = async () => {
  return await axios.get(apiUrl);
};

export const addNewPessoa = async (pessoa) => {
  return await axios.post(apiUrl, pessoa);
};

export const updatePessoa = async (pessoa) => {
  return await axios.put(`${apiUrl}/${pessoa.id}`, pessoa);
};

export const deletePessoa = async (pessoa) => {
  return await axios.delete(`${apiUrl}/${pessoa.id}`, pessoa);
};
