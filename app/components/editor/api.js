import axios from "axios";
import { LANGUAGE_IDS, LANGUAGE_VERSIONS } from "./constants";

const API = axios.create({
  baseURL: "https://ce.judge0.com",
});

export const executeCode = async (language_id, sourceCode) => {
  const response = await API.post("/submissions?wait=true", {
    source_code : sourceCode,
    language_id:language_id ,
    stdin : "",
  });
  return response.data;
};
