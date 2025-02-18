import styled from "styled-components";
 
export const PageContainer = styled.div`
width: 100%;
max-width: 1200px;
margin: 0 auto;
padding: 20px;
display: flex;
flex-direction: column;
min-height: calc(100vh - 80px);
position: relative;

@media (min-width: 1024px) {
  padding: 40px;
}
`;

export const ScrollableContainer = styled.div`
height: 100%;
  overflow-y: auto;
  padding: 20px;
  padding-bottom: 100px;
  position: relative;
  z-index: 1;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #e76f51;
    border-radius: 4px;
  }

  @media (min-width: 1024px) {
    padding: 30px;
    padding-bottom: 120px;
  }
`;

export const ContentWrapper = styled.div`
position: relative;
  height: calc(100vh - 200px);
  z-index: 1;
`;

export const YearFolder = styled.div`
margin-bottom: 30px;
position: relative;
z-index: 1;  

@media (min-width: 1024px) {
  margin-bottom: 50px;
}
`;

export const YearTitle = styled.h2`
color: #2a9d8f;
margin-bottom: 20px;
padding-bottom: 10px;
border-bottom: 2px solid #e76f51;
font-size: 1.5rem;

@media (min-width: 1024px) {
  font-size: 2rem;
  margin-bottom: 30px;
}
`;

export const CardContainer = styled.div`
gap: 20px;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
position: relative;
z-index: 1;

@media (min-width: 1024px) {
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

@media (min-width: 1440px) {
  grid-template-columns: repeat(4, 1fr);
}
`;

export const Card = styled.div`
background: #fff;
border-radius: 10px;
box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
width: 300px;
overflow: hidden;
transition: transform 0.2s;
position: relative;
z-index: 1;

&:hover {
  transform: scale(1.05);
}
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 15px;
  text-align: center;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin: 0 0 10px 0;
`;

export const CardDate = styled.p`
  font-size: 14px;
  color: #555;
`;

export const EmptyMessage = styled.p`
  font-size: 1.5rem;
  color: #555;
  margin: 50px 0;
`;

export const Button = styled.button`
  display: block;
  margin: 20px auto;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #e76f51;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d35400;
  }
`;

export const ButtonContainer = styled.div`
position: fixed;
bottom: 0;
left: 50%;
transform: translateX(-50%);
width: 100%;
max-width: 1200px;
padding: 20px;
background: linear-gradient(to top, white 60%, transparent);
z-index: 10;  
pointer-events: none; 

 button {
  pointer-events: auto;
}

@media (min-width: 1024px) {
  padding: 40px;
}
`;