import { createContext, useState, useEffect, useContext } from "react";
import axios from 'axios'

const BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL
const PetContext = createContext()

export const PetProvider = ({children}) => {
    const [token, setToken] = useState(null);
    const [homePets, setHomePets] = useState(null)

    useEffect(() => {
      const fetchData = async () => {
        await checkToken();
        if (token){
          const data = await getPetByType('', '71301');
          setHomePets(data)
        }
    };

    fetchData();
    }, [token]);

    const checkToken = async () => {
        const storedToken = localStorage.getItem("petfinderToken");
    
        if (storedToken) {
          setToken(storedToken);
        } else {
          await fetchToken();
        }
    };

    const fetchToken = async () => {
        try {
          const response = await axios.post(
            "https://api.petfinder.com/v2/oauth2/token",
            {
              grant_type: "client_credentials",
              client_id: import.meta.env.VITE_REACT_APP_API_KEY,
              client_secret: import.meta.env.VITE_REACT_APP_SECRET,
            }
        );
    
          const newToken = response.data.access_token;
          setToken(newToken);
    
          localStorage.setItem("petfinderToken", newToken);
        } catch (error) {
          console.error("Error fetching Petfinder token:", error);
        }
    };

    const getPetByType = async (petType, zipcode, gender, age, size) => {
        try {
          const response = await axios.post(`${BASE_URL}/api/v1/pets`, 
          {
            type: petType,
            location: zipcode,
            gender,
            age,
            size,
            token: token
          });
          return response.data;
        } catch (error) {
          console.error("Error fetching animals:", error);
          return [];
        }
    };

    const getPetById = async (petId) => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/pets/${petId}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        return response.data.animal;
      } catch (error) {
        console.error("Error fetching pet by ID:", error);
        return null;
      }
    };

    const contextData = {
        token,
        homePets,
        getPetByType,
        getPetById,
    };

    return (
        <PetContext.Provider value={contextData}>
          {children}
        </PetContext.Provider>
      );
}

export const usePet = ()=> {return useContext(PetContext)}
export default PetContext;