import styled, {createGlobalStyle} from "styled-components";
import {Colors, Fonts} from "../util/variables";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        scroll-behavior: smooth;
    }

    body {
        min-height: 100vh;
        line-height: 1.5;
    }

    h1, h2, h3, h4, h5, h6, p, a, span, button {
        font-weight: inherit;
        font-size: inherit;
        line-height: 1.2;
        font-family: ${Fonts.logoFF};
    }

    img,
    picture,
    video,
    canvas,
    svg {
        display: block;
        max-width: 100%;
        height: auto;
    }

    button,
    input,
    textarea,
    select {
        font: inherit;
        color: inherit;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul,
    ol {
        list-style: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    textarea {
        resize: vertical;
    }

    input:focus,
    textarea:focus,
    select:focus,
    button:focus {
        outline: none;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
    }
`

// App
export const PageContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    background-color: ${Colors.yellow};
`

export const HeroContent = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-top: 4px solid ${Colors.purple};
    background: ${Colors.purple};
    border-top: 4px solid ${Colors.black};
`
export const ContentWrapper = styled.div`
    display: flex;
    width: 100%;
    max-width: 46.484375%;
    padding: 60px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;
    flex: 1 0 0;
`
export const HeroTitle = styled.h1`
    color: ${Colors.white};
    font-family: ${Fonts.primalFF};
    font-size: ${Fonts.size3XL};
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.64px;
    width: 100%;
`

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 30px;
`