import axios from "axios";

const sendToKestra = async (formData) => {
  const URL = '/api/v1/executions/webhook/app.emails/special-letter/abcdefg';

  const requestData = {
    namespace: 'app.emails',
    flowId: 'special-letter',
    inputs: {
      text: formData.text, 
      open_at: formData.deliveryDate,  
    },
  };

  try {
    const response = await axios.post(URL, requestData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Data sent to Kestra:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error sending data to Kestra:", error.response?.data || error.message);
    throw error;
  }
};

export default sendToKestra;






