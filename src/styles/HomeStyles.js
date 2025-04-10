import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(to right, #000000, #0f0f10);
  color: #fff;
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  padding: 20px;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 20px;

  strong {
    font-weight: bold;
  }
`;

export const GitHubLogo = styled.img`
  width: 40px;
  height: 40px;
`;

export const SearchBox = styled.div`
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.2);
`;

export const Input = styled.input`
  padding: 12px;
  width: 300px;
  border: none;
  outline: none;
  font-size: 1rem;
`;

export const Button = styled.button`
  background-color: #007bff;
  border: none;
  color: white;
  padding: 0 20px;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorBox = styled.div`
  background-color: #e0e0e0;
  color: red;
  padding: 20px 30px;
  margin-top: 30px;
  border-radius: 12px;
  font-size: 1rem;
  text-align: center;
  max-width: 600px;
  font-weight: 500;
  border: 1px solid #ccc;
`;
