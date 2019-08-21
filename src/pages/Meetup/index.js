import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { MdAddCircleOutline } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import BannerInput from './BannerInput';
import DateInput from './DateInput';
import { Container } from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function Meetup({ match }) {
  const [meetup, setMeetup] = useState({});
  const [banner, setBanner] = useState({});

  useEffect(() => {
    const { id } = match.params;

    async function loadMeetup() {
      const response = await api.get(`meetups/${id}`);

      setMeetup(response.data);
      setBanner(response.data.banner);
    }

    if (id) {
      loadMeetup();
    }
  }, [match.params]);

  async function handleMeetup(data) {
    const { id } = match.params;

    if (id) {
      try {
        await api.put(`meetups/${id}`, data);
        toast.success('Meetup atualizado com sucesso');
        history.push('/dashboard');
      } catch (err) {
        toast.error('Não foi possível atualizar o Meetup');
      }
    } else {
      try {
        await api.post(`meetups`, data);
        toast.success('Meetup criado com sucesso');
        history.push('/dashboard');
      } catch (err) {
        toast.error('Não foi possível criar o Meetup');
      }
    }
  }

  return (
    <>
      <Container>
        <Form initialData={meetup} onSubmit={handleMeetup}>
          <BannerInput name="banner_id" />
          <Input name="title" placeholder="Título do Meetup" />
          <Input
            name="description"
            multiline
            rows={10}
            placeholder="Descrição completa"
          />
          <DateInput
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={60}
            name="date"
            placeholder="Data do meetup"
          />
          <Input name="localization" placeholder="Localização" />
          <button type="submit">
            <MdAddCircleOutline
              style={{ marginRight: 10 }}
              size={20}
              color="#ffffff"
            />{' '}
            Salvar meetup
          </button>
        </Form>
      </Container>
    </>
  );
}
