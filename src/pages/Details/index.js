import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { isBefore, parseISO } from 'date-fns';
import { MdEvent, MdPlace, MdEdit, MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';
import {
  Container,
  TopContainer,
  ButtonContainer,
  Edit,
  Cancel,
  TextContainer,
  DateContainer,
  AddressContainer,
} from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function Details({ match }) {
  const [meetup, setMeetup] = useState({});
  const [banner, setBanner] = useState({});
  const { id } = match.params;

  const isMeetupEditable = useMemo(
    () => isBefore(parseISO(meetup.date), new Date()),
    [meetup]
  );

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetups/${id}`);

      setMeetup(response.data);
      setBanner(response.data.banner);
    }

    loadMeetup();
  }, [id]);

  function handleEdit(meetupId) {
    history.push(`/meetup/${meetupId}`);
  }

  async function handleDelete(meetupId) {
    try {
      await api.delete(`meetups/${meetupId}`);
      toast.error('Meetup removido com sucesso');
      history.push('/dashboard');
    } catch (err) {
      toast.error('Não foi possível remover o Meetup');
    }
  }

  return (
    <>
      <Container>
        <TopContainer>
          <p>{meetup.title}</p>
          {!isMeetupEditable && (
            <ButtonContainer>
              <Edit onClick={() => handleEdit(meetup.id)}>
                <MdEdit style={{ marginRight: 10 }} size={20} color="#ffffff" />
                Editar
              </Edit>
              <Cancel onClick={() => handleDelete(meetup.id)}>
                <MdDeleteForever
                  style={{ marginRight: 10 }}
                  size={20}
                  color="#ffffff"
                />{' '}
                Cancelar
              </Cancel>
            </ButtonContainer>
          )}
        </TopContainer>
        <img src={banner.url} alt="banner" />
        <p>{meetup.description}</p>
        <TextContainer>
          <DateContainer>
            <MdEvent style={{ marginRight: 10 }} size={20} color="#ffffff" />
            <p>{meetup.date}</p>
          </DateContainer>
          <AddressContainer>
            <MdPlace style={{ marginRight: 10 }} size={20} color="#ffffff" />
            <p>{meetup.localization}</p>
          </AddressContainer>
        </TextContainer>
      </Container>
    </>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
