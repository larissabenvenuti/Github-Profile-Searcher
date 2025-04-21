import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 80px;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const ContentBox = styled.div`
  background-color: #000;
  width: 100%;
  max-width: 1000px;
  height: 450px;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.7);
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: white;
  margin-bottom: 40px;
  font-weight: bold;
  gap: 10px;

  svg {
    width: 35px;
    height: 35px;
    fill: white;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 15px;
  background-color: white;
`;

export const Input = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: none;
  font-size: 16px;
  border-radius: 10px 0 0 10px;
  background-color: white;  

  &::placeholder {
    font-size: 16px;
    color: #000;                   
  }
`;

export const Button = styled.button`
  width: 50px;
  background: #005cff;
  border: none;
  cursor: pointer;
  border-radius: 0 10px 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;

  &:hover {
    background: #005cff;
  }
`;

export const ErrorBox = styled.div`
  background-color: #D9D9D9;
  color: #f82929;
  border-radius: 10px;
  padding: 20px;
  margin-top: 10px;
  width: 70%;
  text-align: center;
  font-size: 14px;
  animation: fadeIn 0.3s ease-in-out;
`;
