import styled from 'styled-components';

export const Header = styled.div`
  background: #28262e;
  height: 5rem;

  display: flex;
  align-items: center;

  padding: 2rem 4rem;

  border-bottom: 1px solid gray;

  img {
    width: 150px;
  }

  p {
    margin-left: 2rem;
    padding: 0.25rem 0 0.25rem 2rem;
    border-left: 1px solid gray;
  }
`;

export const ButtonSign = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  text-transform: capitalize;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 20px;
  align-items: center;

  h1 {
    align-items: center;
    padding: 10px 0 10px 0;
  }
`;
