// components/useNameAgeGenderCountry.js
import { useState } from 'react';

const useNameAgeGenderCountry = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (name) => {
    setLoading(true);
    setError('');

    try {
      const agifyResponse = await fetch(`https://api.agify.io?name=${name}`);
      if (!agifyResponse.ok) {
        throw new Error('Error fetching age data');
      }
      const agifyData = await agifyResponse.json();
      setAge(agifyData.age);

      const genderizeResponse = await fetch(`https://api.genderize.io?name=${name}`);
      if (!genderizeResponse.ok) {
        throw new Error('Error fetching gender data');
      }
      const genderizeData = await genderizeResponse.json();
      setGender(genderizeData.gender);

      const nationalizeResponse = await fetch(`https://api.nationalize.io?name=${name}`);
      if (!nationalizeResponse.ok) {
        throw new Error('Error fetching country data');
      }
      const nationalizeData = await nationalizeResponse.json();
      if (nationalizeData.country.length > 0) {
        // Assuming only one country is returned, you might want to handle multiple countries differently
        setCountry(nationalizeData.country[0].country_id);
      } else {
        setCountry('Unknown');
      }
    } catch (error) {
      setError('Error fetching data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return { name, setName, age, gender, country, loading, error, handleSubmit };
};

export default useNameAgeGenderCountry;
