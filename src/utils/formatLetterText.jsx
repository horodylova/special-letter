const formatLetterText = (text) => {
    return text
      .split('\n')  
      .map((paragraph, index) => (
        
        <p key={index} style={{ marginBottom: paragraph.trim() ? '1em' : '0' }}>
          {paragraph}
        </p>
      ));
  };

  export default formatLetterText;