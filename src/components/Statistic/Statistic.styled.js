import styled from '@emotion/styled';
export const Statistics = styled.div`
  background-color: rgb(194, 194, 194);
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #000;
  margin-top: auto;
`;
export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`;
export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: rgb(194, 194, 194);
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
`;
export const Item = styled.li`
  margin: 0;
  align-items: center;
  text-align: center;
  color: rgb(75, 73, 73);
  font-size: 15px;
  padding: 10px;
  flex-basis: 20%;
  &:not(:last-child) {
    border-right: 1px solid #000;
  }
`;
export const Label = styled.span`
  display: flex;
  flex-direction: column;
  color: rgb(41, 38, 54);
  font-size: 20px;
`;
export const Percentage = styled.span`
  display: block;
  padding-top: 8px;
  margin-top: 8px;
  color: rgb(41, 38, 54);
  font-size: 18px;
  font-weight: 700;
`;
export const Box = styled.div`
  margin: 50px;
  margin-left: 0;
  width: 320px;
  height: 180px;
  border: 1px solid black;
  background-color: rgb(229, 226, 226);
  display: flex;
  flex-direction: column;
  width: 100%;
`;
