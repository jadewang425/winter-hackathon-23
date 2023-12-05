import { createContext, useState, useEffect, useContext } from "react";
import axios from 'axios'

const PetContext = createContext()

export const PetProvider = ({children}) => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        checkToken();
    }, []);

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

    const getPetByType = async (petType) => {
    
        try {
          const response = await axios.get(
            "https://api.petfinder.com/v2/animals",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              params: {
                type: petType,
              },
            }
          );
    
          console.log("API Response:", response.data.animals);
    
          return response.data.animals;
        } catch (error) {
          console.error("Error fetching animals:", error);
          return [];
        }
      };

    const contextData = {
        token,
        getPetByType
    };

    return (
        <PetContext.Provider value={contextData}>
          {children}
        </PetContext.Provider>
      );
}

export const usePet = ()=> {return useContext(PetContext)}
export default PetContext;