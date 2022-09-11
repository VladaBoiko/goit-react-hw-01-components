import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  background-color: rgb(229, 226, 226);
  margin: 50px;
  margin-left: 0;
  padding: 0;
  list-style: none;
  display: flex;
  border: 1px solid black;
  height: 140px;
  width: 100%;
`;
export const Item = styled.li`
  margin: 0;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: rgb(75, 73, 73);
  font-size: 15px;
  &:not(:last-child) {
    border-right: 1px solid #000;
  }
  flex-basis: 20%;
  padding: 20px;
`;

export const Status = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  margin-bottom: 10px;
`;
export const Avatar = styled.img`
  display: block;
`;
export const Name = styled.p``;
