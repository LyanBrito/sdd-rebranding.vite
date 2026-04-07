import {createGlobalStyle} from "styled-components";
import {Fonts} from "../util/variables.js";

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