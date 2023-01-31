import styled from "styled-components";

export const SearchStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .div-card{
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }

    .div-title{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        margin-bottom: 2rem;
        h1{
            font-size: 2rem;
            span{
                color: var(--color-yellow);
            }
        }
    }
`