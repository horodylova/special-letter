import axios from "axios";

const sendToKestra = async (formData) => {
  const URL = 'http://localhost:8080/api/v1/flows/special-letter/execute';
  
  const requestData = {
    namespace: 'app.emails',
    flowId: 'special-letter',
    inputs: {
      executionId: formData.executionId,
      name: formData.name,
      email: formData.email,
      senderEmail: formData.senderEmail,
      letterName: formData.letterName,
      messenger: formData.messenger
    }
  };

  try {
    const response = await axios.post(URL, requestData, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log("Data sent to Kestra:", response.data);
  } catch (error) {
    console.log("Error sending data to Kestra:", error);
    throw error;
  }
};

export default sendToKestra;

