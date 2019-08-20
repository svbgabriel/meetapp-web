import React from 'react';
import { MdEvent, MdPlace, MdEdit, MdDeleteForever } from 'react-icons/md';
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

export default function Details() {
  return (
    <>
      <Container>
        <TopContainer>
          <p>Meetup de React Native</p>
          <ButtonContainer>
            <Edit>
              <MdEdit style={{ marginRight: 10 }} size={20} color="#ffffff" />
              Editar
            </Edit>
            <Cancel>
              <MdDeleteForever
                style={{ marginRight: 10 }}
                size={20}
                color="#ffffff"
              />{' '}
              Cancelar
            </Cancel>
          </ButtonContainer>
        </TopContainer>
        <img
          src="http://www.factoriosp.com.br/wpfc/wp-content/uploads/2018/01/ambiente-salao-interno-factorio-sp.jpg"
          alt="banner"
        />
        <p>
          O Meetup de React Native é um evento que reúne a comunidade de
          desenvolvimento mobile utilizando React a fim de compartilhar
          conhecimento. Todos são convidados. Caso queira participar como
          palestrante do meetup envie um e-mail para
          organizacao@meetuprn.com.br.
        </p>
        <TextContainer>
          <DateContainer>
            <MdEvent style={{ marginRight: 10 }} size={20} color="#ffffff" />
            <p>24 de Junho, às 20h</p>
          </DateContainer>
          <AddressContainer>
            <MdPlace style={{ marginRight: 10 }} size={20} color="#ffffff" />
            <p>Rua Guilherme Gembala, 260</p>
          </AddressContainer>
        </TextContainer>
      </Container>
    </>
  );
}
