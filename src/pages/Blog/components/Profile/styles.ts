import styled from "styled-components";

export const ProfileContainer = styled.section`
    margin-top: -5.5rem;

    width: 100%;
    min-height: 13.25rem;
    background: ${({theme}) => theme.colors["base-profile"]};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 2rem 2.5rem;
    display: flex;
    gap: 2rem;


    @media(max-width: 40.6rem){
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const ProfilePicture = styled.img`
    width: 9.25rem;
    height: 9.25rem;
    border-radius:8px;
    object-fit: cover;
`

export const ProfileDeatils = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    @media(max-width: 40.6rem){
        justify-content: center;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;

        @media(max-width: 40.6rem){
            flex-direction: column-reverse;
            gap: 1rem;
        }

        h1{
        font-size: ${({theme}) => theme.textSizes["title-title-l"]};
        color: ${({theme}) => theme.colors["base-title"]};
        line-height: 130%;
        }
    }

    ul{
        display: flex;
        align-items: center;
        gap:1.25rem;
        flex-wrap: wrap;
        margin-top: auto;

        li{
            display: flex;
            align-items: center;
            gap:0.5rem;

            svg{
                width: 1.25rem;
                height: 1.25rem;
                color: ${({theme}) => theme.colors["base-label"]}
            }
        }

        @media(max-width: 40.6rem){
            justify-content:center;

            li:last-child{
                display: none;
            }
        }
    }
`