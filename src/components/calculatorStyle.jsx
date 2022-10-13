import styled from "styled-components";

export const CalcContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  /* background-color: brown; */

  #light {
    background-color: green;
  }
  #dark {
    background-color: wheat;
  }
`;
export const CalcWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
`;

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
  padding: 0 5px;
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
  color: #9aa9ae;
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
    box-shadow: -0.3rem -0.3rem 0.6rem -0.2rem #ffffff1f;
    top: 0;
    right: 0;
    transition: 0.2s all;
  }

  &:active {
    box-shadow: 0.1rem 0.1rem 0.5rem -0.1rem #06070b;
    transform: translate(0.1rem, 0.1rem);
  }

  ${({ operation }) =>
    operation &&
    `
    color:#108b64; 
    background-color:#212121;
    font-size: 3rem; 
    font-weight: 500;`}

  ${({ del }) =>
    del &&
    `
    font-size: 2.1rem;
    background-color:#108b64;
    color:#fff; `};

  ${({ equals }) =>
    equals &&
    `
    background-color:#108b64;
    color:#fff;
    grid-row: 4/ span 2;
    grid-column: 4;
    height: 13.5rem;
    `};

  ${({ clear }) =>
    clear &&
    ` 
    font-size: 2.3rem; 
    background-color:#108b64;
    color:#fff;`};

  ${({ decimal }) =>
    decimal &&
    `font-size: 3.5rem;
    color:#108b64;
    padding-bottom: 3rem; 
    font-size: 3rem; 
    font-weight: 500;`};
`;
