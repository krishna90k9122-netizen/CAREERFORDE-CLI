
import axios from "axios";

export async function fetchGitHubProfile(username) {
    try {
        const response = await axios.get(
        `https://api.github.com/users/${username}`
    );
        return response.data;
    } catch (error) {
        if (error.response?.status === 404) {
            return null;
        }

        throw new Error("Failed to fetch GitHub profile.");
    }
}

 export async function fetchRepositories(username)
    {
   try{
    const response= await axios.get(
       `https://api.github.com/users/${username}/repos`
    );
    return response.data;

   }catch(error){
    return[];
    }
    }