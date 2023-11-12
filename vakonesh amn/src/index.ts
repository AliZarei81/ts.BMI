import { fetchData } from "./fetchData";

export async function safeFetch(): /* your type */ Promise<string> {

// your code ...
try {
    const data = await fetchData();
    return data;
  } catch (error) {
    console.error("Error occurred:", error);
    return 'error occurred';
  }

}
