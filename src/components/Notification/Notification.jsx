import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  height: 35px;
  background-color: #F1C200;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = ({ content }) => {
  return <Container>{content}</Container>;
};

export default Announcement;