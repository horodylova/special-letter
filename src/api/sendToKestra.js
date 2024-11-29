export const sendToKestra = async(formData) => {

    const URL = '';
    
    const requestData = {
        email: formData.email,
        name: formData.name,
        senderEmail: formData.senderEmail,
        letterName: formData.letterName,
        messenger: formData.messenger,
    }

    try{
        const response = await axios.post(URL, requestData) 
        console.log("Sata sent to Kestra", response.data);
    }catch (error) {
        console.log("Some error with sending the data to Kestra", error);
        throw error
    }
}