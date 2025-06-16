import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function Acordeon(props) {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">MORENADA</AccordionHeader>
          <AccordionBody accordionId="1">
           La morenada es una danza tradicional del área andina suramericana, especialmente popular en Bolivia y Perú. Se caracteriza por el uso de trajes coloridos y pasos rítmicos, acompañados de música, que reflejan la vida cotidiana. En Bolivia, la morenada es una danza muy importante, declarada Patrimonio Cultural e Inmaterial del Estado Plurinacional.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">MOSEÑADA</AccordionHeader>
          <AccordionBody accordionId="2">
           La danza Moseñada es de origen aymara, es practicada durante la época de lluvia, también conocida como jallupacha. Sus participantes visten coloridos trajes originarios, elaborados artesanalmente con símbolos acordes a la naturaleza. La música que acompaña al baile es interpretada por el tuquru, una caña hueca que mide hasta 90 centímetros de largo.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">TAQUIRARI</AccordionHeader>
          <AccordionBody accordionId="3">
          El "taquirari" es una danza folclórica de la región oriental de Bolivia, específicamente de los departamentos de Santa Cruz y Beni. Es una expresión cultural que se caracteriza por su ritmo alegre y la influencia de la cultura moxeña (o beniana). El nombre "taquirari" proviene de la palabra moxeña "takirikire", que significa "flecha". 
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">TINKU</AccordionHeader>
          <AccordionBody accordionId="4">
           "Tinku" significa "encuentro" en quechua y se refiere a una danza y ritual folklórico de Bolivia, especialmente en el norte de Potosí y sur de Oruro. La palabra "tinku" también puede significar "ataque físico" en aymara. La práctica del Tinku implica encuentros, danzas y luchas rituales, con un fuerte componente de celebración y sincretismo cultural. 
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">SURI SICURI</AccordionHeader>
          <AccordionBody accordionId="5">
           Suri Sicuri es una danza del altiplano andino, de origen prehispánico, que representa la caza del ñandú (avestruz andino). La danza, que incluye música y baile, es acompañada por el sonido de los sikus (flautas de pan) y otros instrumentos, como bombos. Los danzantes imitan los movimientos del ñandú, utilizando pasos y gestos especiales. 
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Acordeon;