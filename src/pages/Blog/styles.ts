import styled from "styled-components";

export const PostsListContainer = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
    gap: 2rem;
    margin-bottom: 14rem;

    @media(max-width: 40.6rem){
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        
    }
`