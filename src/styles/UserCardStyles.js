import styled from 'styled-components';

export const Card = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  background-color: #D9D9D9;
  padding: 10px 18px;
  border-radius: 16px;
  max-width: 700px;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.15);
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 24px;
  border: 2px solid #005cff;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h2`
  font-size: 1.3rem;
  color: #005cff;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Bio = styled.p`
  font-size: 0.9rem;
  margin-bottom: 12px;
  line-height: 1.5;
`;