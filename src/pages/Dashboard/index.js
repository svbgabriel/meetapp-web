import React from 'react';
import { MdChevronRight, MdAddCircleOutline } from 'react-icons/md';
import Header from '../../components/Header';
import {
  Container,
  TopContainer,
  MeetupContainer,
  Title,
  DataContainer,
  Date,
} from './styles';

export default function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <TopContainer>
          <p>Meus meetup</p>
          <button type="button">
            <MdAddCircleOutline
              style={{ marginRight: 10 }}
              color="#ffffff"
              size={20}
            />{' '}
            Novo meetup
          </button>
        </TopContainer>
        <MeetupContainer>
          <Title>Meetup de React Native</Title>
          <DataContainer>
            <Date>24 de Junho, ás 20h</Date>
            <MdChevronRight
              style={{ marginLeft: 10 }}
              color="#ffffff"
              size={24}
            />
          </DataContainer>
        </MeetupContainer>
      </Container>
    </>
  );
}
