import React from 'react';
import {
  MailOutline,
  Phone,
  Room,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: #F3F3F3;
  padding: 75px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h3`
  color: #f50057;
`;

const Desc = styled.p`
  margin: 15px 0px;
  max-width: 400px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
  color: #f50057;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 40%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Shack AIO</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Philippines
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +63 949 146 8933
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> @shack.aio
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;