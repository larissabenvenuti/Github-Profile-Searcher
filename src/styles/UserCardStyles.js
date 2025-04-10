import styled from 'styled-components';

export const Card = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  background-color:#dedede;
  color: #000;
  padding: 20px;
  border-radius: 20px;
  max-width: 700px;
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.1);
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 24px;
  border: 4px solid #007bff;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h2`
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 8px;
`;

export const Bio = styled.p`
  font-size: 1rem;
  margin-bottom: 12px;
  line-height: 1.5;
`;

export const ProfileLink = styled.a`
  color: #007bff;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
