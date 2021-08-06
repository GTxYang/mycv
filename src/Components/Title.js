import React from 'react'
import styled from 'styled-components';

function Title({ title, span }) {
    return (
        <TitleStyled>
            <h2>
                {title}
                <b>
                    <span>
                        {span}
                    </span>
                </b>

            </h2>

        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    position: relative;
    h2{
        color: var(--white-color);
        font-size: 3.5rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        padding-bottom: .2rem;
       
        @media screen and (max-width: 496px){
            font-size: 2.8rem;
        }
        @media screen and (max-width: 370px){
            font-size: 2rem;
        }
        &::before{
            content: "";
            position: absolute;
            bottom: 0;
            width: 7.4rem;
            height: .33rem;
            background-color: var(--background-light-color2);
            border-radius: 15px;
        }
        &::after{
            content: "";
            position: absolute;
            bottom: 0;
            width: 3.5rem;
            height: .33rem;
            background-color: var(--primary-color);
            border-radius: 15px;
            left:0;
        }
        span{
            font-weight: 400;
            //color: rgba(25,29,43,.44);
            color: rgba(179,177,175,0.2);
            font-size: 5rem;
            position: absolute; 
            padding-left:10px;
            left:0;
            top: 40%;
            z-index:-1;
            @media screen and (max-width: 620px){
                font-size: 4rem;
            }
            @media screen and (max-width: 496px){
                font-size: 3rem;
               
            }
            @media screen and (max-width: 370px){
                font-size: 2rem;
            }
        }
    }


`;
export default Title;