
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useEffect, useState } from 'react';
//import Router from 'next/router';
import Header from "../components/Header";
import {  } from "../shared/styles";
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import {
  Container, 
  Content,
  CalendarBox,
  TooltipBox,
  Buttons,
  CurrentMonth,
  TodayButton,
} from '../shared/pages/Calendar/styles';


require('moment/locale/pt.js');

const localizer = momentLocalizer(moment);

interface EventsProps {
  start: any;
  end: any;
  title: string;
}

export default function Home() {
  const [date, setDate] = useState(new Date(Date.now()));
  const [month, setMonth] = useState(new Date(Date.now()).getMonth());
  const [currentMonth, setCurrentMonth] = useState('');
  const [year, setYear] = useState(new Date(Date.now()).getFullYear());

  useEffect(() => {
    switch (month + 1) {
      case 0:
        setYear(year - 1);
        setMonth(11);
        break;

      case 1:
        setCurrentMonth('Janeiro');

        break;

      case 2:
        setCurrentMonth('Fevereiro');

        break;

      case 3:
        setCurrentMonth('Março');

        break;

      case 4:
        setCurrentMonth('Abril');

        break;

      case 5:
        setCurrentMonth('Maio');

        break;

      case 6:
        setCurrentMonth('Junho');

        break;

      case 7:
        setCurrentMonth('Julho');

        break;

      case 8:
        setCurrentMonth('Agosto');

        break;

      case 9:
        setCurrentMonth('Setembro');

        break;

      case 10:
        setCurrentMonth('Outubro');

        break;

      case 11:
        setCurrentMonth('Novembro');

        break;

      case 12:
        setCurrentMonth('Dezembro');

        break;

      case 13:
        setMonth(0);
        setYear(year + 1);

        break;

      default:
        break;
    }
  }, [month, year]);

 // const triggerAlert = (e: any) => {
 //   console.dir(e);

 //   Router.push('/Calendar/DayEvents');
 // };

  const event = [
    {
      title: 'evento 1',
      allDay: false,
      start: new Date(Date.now()),
      end: new Date(Date.now()),
    },
    {
      title: 'evento 2',
      allDay: false,
      start: new Date(Date.now()),
      end: new Date(Date.now()),
    }
  ];

  return(
    <Container>
      <Header />
      <Content>
      <TooltipBox>
        <Buttons onClick={() => setMonth(month - 1)}>
          <MdNavigateBefore />
        </Buttons>
        <CurrentMonth>
          {currentMonth} {year}
        </CurrentMonth>
        <Buttons onClick={() => setMonth(month + 1)}>
          <MdNavigateNext />
        </Buttons>
        <Buttons
          onClick={() => {
            setMonth(new Date(Date.now()).getMonth());
            setYear(new Date(Date.now()).getFullYear());
          }}
        >
          <TodayButton>Hoje</TodayButton>
        </Buttons>
      </TooltipBox>

      <CalendarBox>
        <Calendar
          events={event}
          selectable
          localizer={localizer}
          defaultDate={new Date(Date.now())}
          resourceIdAccessor="resourceId"
          resourceTitleAccessor="resourceTite"
         // onSelectSlot={e => triggerAlert(e)}
          view={Views.MONTH}
          toolbar={false}
          date={new Date(2022, month)}
        />
      </CalendarBox>
      </Content>
    </Container>
  )
}