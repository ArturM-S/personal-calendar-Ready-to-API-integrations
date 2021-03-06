import styled from '@emotion/styled';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
`;
export const Content = styled.div`
  height: 130vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;

  background-color: #222;
`;

export const CurrentMonth = styled.div`
  height: 45px;
  width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.875rem;
  color: #ed6464;
`;

export const TooltipBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 75px;
  margin-left: 150px;
  margin-top: 100px;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin: 0 16px;
  border-radius: 5px;
  transition: 0.3s;

  :hover {
    background-color: #ed64644d;
  }
  svg {
    height: 24px;
    width: 24px;
    color: #ed64644d;
    :hover{
        color: #222;
    }
  }
`;

export const TodayButton = styled.button`
all: unset;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
height: 30px;
width: 70px;
font-weight: 500;
font-size: 1rem;
line-height: 1.5rem;
color:   #ed64644d;

border: 1px solid #ed64644d;
transition: 0.3s;
:hover{
    background-color:  #ed64644d;
    color: #222;
    border: none;
}
`;

export const CalendarBox = styled.div`
  width: 832px;
  height: 472px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border: 1px solid var(--borderlineColor);
  box-shadow: 0px 4px 12px #0000004c;
  border-radius: 5px;
  color: white;
  //ABAIXO ESTÃO TODAS AS PROPRIEDADES DO REACT-BIG-CALENDAR,
  //FORAM INSERIDAS TODAS COM A FINALIDADE DE AGILIZAR O PROCESSO DE
  //ESTUDO DAS PROPRIEDADES E APLICAÇÃO DAS MESMAS.
  .rbc-agenda-view {
    display: flex;
    flex-direction: column;
    flex: 1 0 0;
    overflow: auto;
    table.rbc-agenda-table {
      width: 100%;
      border: 1px solid $cell-border;
      border-spacing: 0;
      border-collapse: collapse;
      tbody > tr > td {
        padding: 5px 10px;
        vertical-align: top;
      }
      .rbc-agenda-time-cell {
        padding-left: 15px;
        padding-right: 15px;
        text-transform: lowercase;
      }
      tbody > tr > td + td {
        border-left: 1px solid $cell-border;
      }
      .rbc-rtl & {
        tbody > tr > td + td {
          border-left-width: 0;
          border-right: 1px solid $cell-border;
        }
      }
      tbody > tr + tr {
        border-top: 1px solid $cell-border;
      }
      thead > tr > th {
        padding: 3px 5px;
        text-align: left;
        border-bottom: 1px solid $cell-border;
        .rbc-rtl & {
          text-align: right;
        }
      }
    }
  }
  .rbc-agenda-time-cell {
    text-transform: lowercase;
    .rbc-continues-after:after {
      content: ' »';
    }
    .rbc-continues-prior:before {
      content: '« ';
    }
  }
  .rbc-agenda-date-cell,
  .rbc-agenda-time-cell {
    white-space: nowrap;
  }
  .rbc-agenda-event-cell {
    width: 100%;
  }
  .rbc-event {
    border-radius: 50%;
    width: 8px;
    height: 9px;
    border: none;
    box-sizing: border-box;
    box-shadow: none;
    padding: $event-padding;
    background-color: #ed6464;
    border-radius: $event-border-radius;
    color: none;
    cursor: pointer;
    display: flex;
    .rbc-slot-selecting & {
      cursor: inherit;
      pointer-events: none;
    }
    &.rbc-selected {
      background-color: darken($event-bg, 10%);
    }
    &:focus {
      outline: 5px auto $event-outline;
    }
  }
  .rbc-event-label {
    @extend .rbc-ellipsis;
    font-size: 80%;
  }
  .rbc-event-overlaps {
    box-shadow: -1px 1px 5px 0px rgba(51, 51, 51, 0.5);
  }
  .rbc-event-continues-prior {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .rbc-event-continues-after {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .rbc-event-continues-earlier {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .rbc-event-continues-later {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .rbc-row {
    display: flex;
    flex-direction: row;
  }
  .rbc-row-segment {
    //DIV ONDE SE ENCONTRA A MARCAÇÃO DO EVENTO
    padding: 0 6px 1px 1px;
    display: flex;
    justify-content: flex-end;
    .rbc-event-content {
      @extend .rbc-ellipsis;
    }
  }
  .rbc-selected-cell {
    background-color: $date-selection-bg-color;
  }
  .rbc-show-more {
    @extend .rbc-ellipsis;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: $event-zindex;
    font-weight: bold;
    font-size: 85%;
    height: auto;
    line-height: normal;
    color: $event-bg;
    &:hover,
    &:focus {
      color: darken($event-bg, 10%);
    }
  }
  .rbc-month-view {
    position: relative;
    border: 1px solid #515151; //COR DA BORDA EXTERNA DO CALENDÁRIO
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    flex: 1 0 0;
    width: 100%;
    user-select: none;
    -webkit-user-select: none;
    background-color: #3b3b3b; //COR DO CALENDÁRIO
    height: 100%; // ie-fix
  }
  .rbc-month-header {
    display: flex;
    flex-direction: row;
  }
  .rbc-month-row {
    display: flex;
    position: relative;
    flex-direction: column;
    flex: 1 0 0; // postcss will remove the 0px here hence the duplication below
    flex-basis: 0px;
    overflow: hidden;
    height: 100%; // ie-fix
    & + & {
      border-top: 1px solid $cell-border;
    }
  }
  .rbc-date-cell {
    flex: 1 1 0;
    min-width: 0;
    padding-right: 5px;
    text-align: right;
    &.rbc-now {
      font-weight: bold;
    }
    > a {
      &,
      &:active,
      &:visited {
        color: inherit;
        text-decoration: none;
      }
    }
  }
  .rbc-month-row {
    border: 1px solid #515151;
  }
  .rbc-row-bg {
    @extend .rbc-abs-full;
    display: flex;
    flex-direction: row;
    flex: 1 0 0;
    overflow: hidden;
  }
  .rbc-day-bg {
    flex: 1 0 0%;
    & + & {
      border-left: 1px solid $cell-borde;
    }
    .rbc-rtl & + & {
      border-left-width: 0;
      border-right: 1px solid $cell-border;
    }
  }
  .rbc-overlay {
    position: absolute;
    z-index: $event-zindex + 1;
    border: 1px solid #e5e5e5;
    background-color: #fff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
    padding: 10px;
    > * + * {
      margin-top: 1px;
    }
  }
  .rbc-overlay-header {
    border-bottom: 1px solid #e5e5e5;
    margin: -10px -10px 5px -10px;
    padding: 2px 10px;
  }
  .rbc-btn {
    color: inherit;
    font: inherit;
    margin: 0;
  }
  button.rbc-btn {
    overflow: visible;
    text-transform: none;
    -webkit-appearance: button;
    cursor: pointer;
  }
  button[disabled].rbc-btn {
    cursor: not-allowed;
  }
  button.rbc-input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  .rbc-calendar {
    box-sizing: border-box;
    width: 784px;
    height: 408px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    font-family: 'Poppins';
  }
  .rbc-calendar *,
  .rbc-calendar *:before,
  .rbc-calendar *:after {
    box-sizing: inherit;
  }
  .rbc-abs-full {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .rbc-ellipsis {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .rbc-rtl {
    direction: rtl;
  }
  .rbc-off-range {
    color: $out-of-range-color;
  }
  .rbc-off-range-bg {
    background: #222; //COR DOS DIAS FORA DO MÊS EM QUESTÃO
  }
  .rbc-header {
    overflow: hidden;
    flex: 1 0 0%;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 3px;
    text-align: center;
    vertical-align: middle;
    min-height: 0;
    font-weight: 400;
    font-size: 12.8px;
    line-height: 19px;
    border: 1px solid #515151;
    /* neutralColors/secondaryTextColor */
    color: #cfcfcf;
    & + & {
      border-left: 1px solid $cell-border;
    }
    .rbc-rtl & + & {
      border-left-width: 0;
      border-right: 1px solid $cell-border;
    }
    & > a {
      &,
      &:active,
      &:visited {
        color: inherit;
        text-decoration: none;
      }
    }
  }
  .rbc-button-link {
    color: inherit;
    background: none;
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: text;
  }
  .rbc-row-content {
    position: relative;
    user-select: none;
    -webkit-user-select: none;
    z-index: 4;
    color: #f7f7f7;
  }
  .rbc-row-content-scrollable {
    display: flex;
    flex-direction: column;
    height: 100%;
    .rbc-row-content-scroll-container {
      height: 100%;
      overflow-y: scroll;
      /* Hide scrollbar for Chrome, Safari and Opera */
      &::-webkit-scrollbar {
        display: none;
      }
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
  }
  .rbc-today {
    background-color: #ed64644d; //COR DE FUNDO DO DIA ATUAL
  }
  .rbc-time-column {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    .rbc-timeslot-group {
      flex: 1;
    }
  }
  /* .rbc-timeslot-group {
  border-bottom: 1px solid $cell-border;
  min-height: 40px;
  display: flex;
  flex-flow: column nowrap;  const event = [{    >>>>ESTA PROPRIEDADE ESTÁ APONTANDO UM ERRO,<<<<
    title: 'iwvbsbfg',                           >>>>E QUANDO COMENTADA, NÃO ALTEROU, À PRINCÍPIO<<<<
    allDay: false,                               >>>>O FUNCIONAMENTO DO CALENDÁŔIO<<<<
    start:new Date (Date.now()),
    end:new Date (Date.now())
  }]
} */
  .rbc-time-gutter,
  .rbc-header-gutter {
    flex: none;
  }
  .rbc-label {
    padding: 0 3px;
  }
  .rbc-day-slot {
    position: relative;
    .rbc-events-container {
      bottom: 0;
      left: 0;
      position: absolute;
      right: 0;
      margin-right: 10px;
      top: 0;
      &.rbc-rtl {
        left: 10px;
        right: 0;
      }
    }
    .rbc-event {
      border: 1px solid $event-border;
      display: flex;
      max-height: 100%;
      min-height: 20px;
      flex-flow: column wrap;
      align-items: flex-start;
      overflow: hidden;
      position: absolute;
    }
    .rbc-background-event {
      @extend .rbc-event;
      opacity: 0.75;
    }
    .rbc-event-label {
      flex: none;
      padding-right: 5px;
      width: auto;
    }
    .rbc-event-content {
      width: 100%;
      flex: 1 1 0;
      word-wrap: break-word;
      line-height: 1;
      height: 100%;
      min-height: 1em;
    }
    .rbc-time-slot {
      border-top: 1px solid lighten($cell-border, 10%);
    }
  }
  .rbc-time-view-resources {
    .rbc-time-gutter,
    .rbc-time-header-gutter {
      position: sticky;
      left: 0;
      background-color: white;
      border-right: 1px solid $cell-border;
      z-index: 10;
      margin-right: -1px;
    }
    .rbc-time-header {
      overflow: hidden;
    }
    .rbc-time-header-content {
      min-width: auto;
      flex: 1 0 0;
      flex-basis: 0px;
    }
    .rbc-time-header-cell-single-day {
      display: none;
    }
    .rbc-day-slot {
      min-width: 140px;
    }
    .rbc-header,
    .rbc-day-bg {
      width: 140px;
      // min-width: 0;
      flex: 1 1 0;
      flex-basis: 0 px;
    }
  }
  .rbc-time-header-content + .rbc-time-header-content {
    margin-left: -1px;
  }
  .rbc-time-slot {
    flex: 1 0 0;
    &.rbc-now {
      font-weight: bold;
    }
  }
  .rbc-day-header {
    text-align: center;
  }
  .rbc-slot-selection {
    z-index: 10;
    position: absolute;
    background-color: $time-selection-bg-color;
    color: $time-selection-color;
    font-size: 75%;
    width: 100%;
    padding: 3px;
  }
  .rbc-slot-selecting {
    cursor: move;
  }
  .rbc-time-view {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    border: 1px solid #515151;
    min-height: 0;
    .rbc-time-gutter {
      white-space: nowrap;
      text-align: right;
    }
    .rbc-allday-cell {
      box-sizing: content-box;
      width: 100%;
      height: 100%;
      position: relative;
    }
    .rbc-allday-cell + .rbc-allday-cell {
      border-left: 1px solid $cell-border;
    }
    .rbc-allday-events {
      position: relative;
      z-index: 4;
    }
    .rbc-row {
      box-sizing: border-box;
      min-height: 20px;
    }
  }
  .rbc-time-header {
    display: flex;
    flex: 0 0 auto; // should not shrink below height
    flex-direction: row;
    &.rbc-overflowing {
      border-right: 1px solid $cell-border;
    }
    .rbc-rtl &.rbc-overflowing {
      border-right-width: 0;
      border-left: 1px solid $cell-border;
    }
    > .rbc-row:first-child {
      border-bottom: 1px solid $cell-border;
    }
    > .rbc-row.rbc-row-resource {
      border-bottom: 1px solid $cell-border;
    }
    // .rbc-gutter-cell {
    //   flex: none;
    // }
    // > .rbc-gutter-cell + * {
    //   width: 100%;
    // }
  }
  .rbc-time-header-cell-single-day {
    display: none;
  }
  .rbc-time-header-content {
    flex: 1;
    display: flex;
    min-width: 0;
    flex-direction: column;
    border-left: 1px solid $cell-border;
    .rbc-rtl & {
      border-left-width: 0;
      border-right: 1px solid $cell-border;
    }
    > .rbc-row.rbc-row-resource {
      border-bottom: 1px solid $cell-border;
      flex-shrink: 0;
    }
  }
  .rbc-time-content {
    display: flex;
    flex: 1 0 0%;
    align-items: flex-start;
    width: 100%;
    border-top: 2px solid $calendar-border;
    overflow-y: auto;
    position: relative;
    > .rbc-time-gutter {
      flex: none;
    }
    > * + * > * {
      border-left: 1px solid $cell-border;
    }
    .rbc-rtl & > * + * > * {
      border-left-width: 0;
      border-right: 1px solid $cell-border;
    }
    > .rbc-day-slot {
      width: 100%;
      user-select: none;
      -webkit-user-select: none;
    }
  }
  .rbc-current-time-indicator {
    position: absolute;
    z-index: 3;
    left: 0;
    right: 0;
    height: 1px;
    background-color: $current-time-color;
    pointer-events: none;
  }
  $active-background: darken($btn-bg, 10%);
  $active-border: darken($btn-border, 12%);
  .rbc-toolbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    font-size: 16px;
    .rbc-toolbar-label {
      flex-grow: 1;
      padding: 0 10px;
      text-align: center;
    }
    & button {
      color: $btn-color;
      display: inline-block;
      margin: 0;
      text-align: center;
      vertical-align: middle;
      background: none;
      background-image: none;
      border: 1px solid $btn-border;
      padding: 0.375rem 1rem;
      border-radius: 4px;
      line-height: normal;
      white-space: nowrap;
      &:active,
      &.rbc-active {
        background-image: none;
        box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
        background-color: $active-background;
        border-color: $active-border;
        &:hover,
        &:focus {
          color: $btn-color;
          background-color: darken($btn-bg, 17%);
          border-color: darken($btn-border, 25%);
        }
      }
      &:focus {
        color: $btn-color;
        background-color: $active-background;
        border-color: $active-border;
      }
      &:hover {
        color: $btn-color;
        background-color: $active-background;
        border-color: $active-border;
      }
    }
  }
  .rbc-day-bg + .rbc-day-bg {
    border-left: 1px solid #515151; //  COR BORDA COLUNAS
  }
  .rbc-btn-group {
    display: inline-block;
    white-space: nowrap;
    > button:first-child:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    > button:last-child:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    .rbc-rtl & > button:first-child:not(:last-child) {
      border-radius: 4px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    .rbc-rtl & > button:last-child:not(:first-child) {
      border-radius: 4px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    > button:not(:first-child):not(:last-child) {
      border-radius: 0;
    }
    button + button {
      margin-left: -1px;
    }
    .rbc-rtl & button + button {
      margin-left: 0;
      margin-right: -1px;
    }
    & + &,
    & + button {
      margin-left: 10px;
    }
  }
`;