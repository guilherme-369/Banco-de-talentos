import { createGlobalStyle } from "styled-components";
import back from "../assets/bg-body-star-wars.jpg";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
}
a{
    text-decoration: none;
}
:root{
    --color-yellow: #dba90d;
    --color-black: #1f1f1f;
    --color-white: #fff;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
    font-family: monospace;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
.actions{
    width: 90vw;
    margin: 0 auto;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
}
`;
