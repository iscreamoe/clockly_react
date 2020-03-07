import React from 'react';
import styled from 'styled-components';

const CommonButton = styled.button`
  font-size: 16px;
  background: transparent;
  border-radius: 40px;
  border: 2px solid palevioletred;
  color: #fff;
  margin: 24px;
  padding: 16px 24px;
  letter-spacing: 1px;
  display: inline-block;
  &:focus {
    outline:0
  };
  &:hover {
    background-color: rgb(197, 171, 172);
    border: none;
  };
`

const Button = (props) => {
  const { name } = props;
  return (
    <CommonButton>{name}</CommonButton>
  );
}

export default Button;