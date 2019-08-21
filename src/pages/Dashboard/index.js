import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdChevronRight, MdAddCircleOutline } from 'react-icons/md';
import {
  Container,
  TopContainer,
  MeetupContainer,
  Title,
  DataContainer,
  Date,
} from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('schedules');

      const data = response.data.map(meetup => {
        const formtedDate = format(
          parseISO(meetup.date),
          "d 'de' MMMM 'às' H'h'",
          {
            locale: pt,
          }
        );

        return {
          ...meetup,
          date: formtedDate,
        };
      });

      setMeetups(data);
    }

    loadMeetups();
  }, []);

  function handleCreateMeetup() {
    history.push('/meetup');
  }

  return (
    <>
      <Container>
        <TopContainer>
          <p>Meus meetup</p>
          <button onClick={handleCreateMeetup} type="button">
            <MdAddCircleOutline
              style={{ marginRight: 10 }}
              color="#ffffff"
              size={20}
            />{' '}
            Novo meetup
          </button>
        </TopContainer>
        {meetups.map(meetup => (
          <MeetupContainer key={meetup.id}>
            <Title>{meetup.title}</Title>
            <DataContainer>
              <Date>{meetup.date}</Date>
              <Link to={`/details/${meetup.id}`}>
                <MdChevronRight
                  style={{ marginLeft: 10 }}
                  color="#ffffff"
                  size={24}
                />
              </Link>
            </DataContainer>
          </MeetupContainer>
        ))}
      </Container>
    </>
  );
}
