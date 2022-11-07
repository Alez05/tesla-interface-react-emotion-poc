import styled from '@emotion/styled';

export const Background = styled.div`
  /* dimensions */
  height: 100vh;
  width: 100vw;
  padding: 32px;

  /* align */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  /* background */
  background-image: url(${({ image }) =>
    `/image/background/${image}-mobile.jpg`});
  background-size: cover;
  background-position: center;

  /* tablet and desktop */
  @media screen and (min-width: 768px) {
    background-image: url(${({ image }) => `/image/background/${image}.jpg`});
  }
`;
