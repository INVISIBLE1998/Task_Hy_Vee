// lib/useClient.js
import dynamic from "next/dynamic";

// Import your custom hook
const useNameAgeGenderCountry = dynamic(() =>
  import("./useNameAgeGenderCountry")
);

// Export the custom hook
export default useNameAgeGenderCountry;
