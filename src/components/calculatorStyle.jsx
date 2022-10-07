import styled from "styled-components";

export const Wrapper = styled.section`
  width: 40rem;
  margin: 15rem auto;
  background: #1b1c22;
  border-radius: 4rem;
  box-shadow: 0.6rem 0.9rem 0.5rem 0.3rem #06070b;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 4rem;
    box-shadow: -0.5rem -0.6rem 0.5rem 0rem #ffffff1f;
  }
`;
export const Container = styled.div`
  padding-top: 0.5rem;
`;

export const Screen = styled.div`
  height: 12rem;
  margin: 3rem;
  color: #fff;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 5px;
  box-shadow: -0.6rem -0.6rem 0.5rem -0.1rem #06070b;
  border-radius: 1rem;
  word-wrap: break-word;
  word-break: break-all;
  text-align: right;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    box-shadow: 0.5rem 0.5rem 0.6rem -0.2rem #ffffff1f;
  }
`;

export const Keypad = styled.div`
  padding: 2rem;
  border-radius: 2rem;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 8rem);
  grid-template-rows: repeat(5, 8rem);
  column-gap: 0.8rem;
  width: 100%;
`;

export const Previous = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 2rem;
`;

export const Current = styled.div`
  color: #fff;
  font-size: 3rem;
`;

export const Button = styled.button`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 1rem;
  font-size: 2.5rem;
  cursor: pointer;
  border: none;
  background-color: #191a1f;
  color: #586063;
  box-shadow: 0.6rem 0.8rem 0.3rem 0.1rem #06070b;
  position: relative;
  position: relative;
  transition: 0.2s all;

  @media only screen and (max-width: 56.25em) {
    cursor: default;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    box-shadow: -0.5rem -0.5rem 0.6rem -0.2rem #ffffff1f;
    top: 0;
    right: 0;
    transition: 0.2s all;

    &:active {
      box-shadow: 0.1rem 0.1rem 0.5rem -0.1rem #06070b;
      transform: translate(-0.1rem, -0.1rem);
    }
  }

  &:active {
    box-shadow: 0.1rem 0.1rem 0.5rem -0.1rem #06070b;
    transform: translate(-0.1rem, -0.1rem);
  }

  ${({ operation }) => operation && `color:#ec904c;`};
  ${({ del }) =>
    del && `background-color:#bd0f0f7e; font-size: 2.1rem; color:#ccc;`};
  ${({ equals }) => equals && `background-color:#b46d3b;color:#000;`};
  ${({ clear }) =>
    clear && `background-color:#bd0f0f7e; font-size: 2.3rem; color:#ccc;`};
  ${({ decimal }) =>
    decimal && `font-size: 3.5rem;color:#ec904c;padding-bottom: 3rem;`};
`;
