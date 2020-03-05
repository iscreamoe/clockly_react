import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/es'; // 必要に応じて読み込み

const Time = () => {
  const timestamp = 1544911200 * 1000 // 2018/12/16 07:00:00
  return (
    <>
    <Title>TIME</Title>
    <Container>
      { dayjs(timestamp).format('YYYY/MM/DD HH:mm:ss') }
      {dayjs.locale('es')}
      {dayjs().utcOffset(120)}
    </Container>
    </>
  );
}

const Title = styled.div`
  font-size: 32px;
  letter-spacing: 1.5px;
  margin-top: 32px;
  text-align: center;
`
const Container = styled.div`
  margin-top: 50px;
  text-align: center;
`

export default Time;