import type { Bolo } from "../types/Bolo";
import axios from "axios";
export const getBolos = async (): Promise<Bolo[]> => {
try {
    const resposta = await axios.get("http://localhost:3000/bolos");
    return resposta.data
} catch (error) {
    console.error("Erro ao buscar dados: ", error );
    throw error;
    
}
}