import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { MdAddCircleOutline } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import BannerInput from './BannerInput';
import DateInput from './DateInput';
import { Container } from './styles';
import api from '~/services/api';
import history from '~/services/history';

const schema = Yup.object().shape({
  title: Yup.string().required('O título do Meetup é obrigatório'),
  description: Yup.string().required('A descrição do Meetup é obrigatória'),
  date: Yup.date().required('A data do Meetup é obrigatória'),
  localization: Yup.string().required('A descrição do Meetup é obrigatória'),
});

export default function Meetup({ match }) {
  const [meetup, setMeetup] = useState({ banner: {} });
  const { id } = match.params;

  useEffect(() => {
    async function loadMeetup() {
      const { data } = await api.get(`meetups/${id}`);
      setMeetup(data);
    }

    if (id) {
      loadMeetup();
    }
  }, [id]);

  async function handleMeetup(data) {
    if (id) {
      try {
        console.tron.log(data);
        await api.put(`meetups/${id}`, data);
        toast.success('Meetup atualizado com sucesso');
        history.push('/dashboard');
      } catch (err) {
        toast.error('Não foi possível atualizar o Meetup');
      }
    } else {
      try {
        console.tron.log(data);
        await api.post('meetups', data);
        toast.success('Meetup criado com sucesso');
        history.push('/dashboard');
      } catch (err) {
        console.tron.log(err);
        toast.error('Não foi possível criar o Meetup');
      }
    }
  }
  // TODO: Valor do banner_id não está sendo retornado, verificar
  return (
    <>
      <Container>
        <Form schema={schema} initialData={meetup} onSubmit={handleMeetup}>
          <BannerInput name="banner_id" />
          <Input name="title" placeholder="Título do Meetup" />
          <Input
            name="description"
            multiline
            rows={10}
            placeholder="Descrição completa"
            value={meetup.description}
          />
          <DateInput
            showTimeSelect
            timeFormat="p"
            timeIntervals={60}
            dateFormat="Pp"
            timeCaption="Horário"
            name="date"
            placeholderText="Data do meetup"
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

Meetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
