import axios from "axios";

const sendToKestra = async (formData) => {
  const URL = '/api/app.emails/special-letter/abcdefg';

  const requestData = {
    namespace: 'app.emails',
    flowId: 'special-letter',
    inputs: {
      email: formData.email,
      name: formData.name,
      messenger: formData.messenger,
    }
  };

  try {
    const response = await axios.post(URL, requestData, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log("Data sent to Kestra:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error sending data to Kestra:", error.response?.data || error.message);
    throw error;
  }
};

export default sendToKestra;





