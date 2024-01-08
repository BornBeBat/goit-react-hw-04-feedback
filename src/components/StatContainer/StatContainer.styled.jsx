import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 26px;
  justify-content: center;
  margin-bottom: 15px;
`;

export const Item = styled.p`
  text-transform: capitalize;
  flex-basis: 25%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-style: oblique;
`;

export const Value = styled.span`
  font-style: normal;
`;
