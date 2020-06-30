import styled from "styled-components"

export const HamburgerButton = styled.div`
  img {
    position: fixed;
    display: block;
    z-index: 1000;
    right: 16px;
    top: 16px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: all 0.2s ease;

    :hover {
      transform: scale(1.2);
    }

    @media (min-width: 992px) {
      display: none;
    }
  }
`
