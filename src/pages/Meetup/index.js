import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { Container, Form } from './styles';

export default function Meetup() {
  return (
    <>
      <Container>
        <Form>
          <input type="text" placeholder="Título do Meetup" />
          <textarea rows={10} placeholder="Descrição completa" />
          <input type="text" placeholder="Data do meetup" />
          <input type="text" placeholder="Localização" />
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
