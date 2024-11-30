import axios from "axios";

const sendToKestra = async (formData) => {
  const URL = 'http://localhost:8080/api/v1/flows/special-letter/execute';

  const requestData = {
    namespace: 'app.emails',
    flowId: 'special-letter',
    inputs: {
      name: formData.name,
      email: formData.email,
      senderEmail: formData.senderEmail,
      letterName: formData.letterName,
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

