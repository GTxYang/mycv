import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';


function SkillsCard({ image, title, props, props2, props3, props4, props5 }) {


    return (
        <SkillsCardStyled>

            <div className="container">
                <img src={image} />
                <h4 >{title}</h4>
                <ul>
                    <li>  {props} </li>
                    <li>  {props2} </li>
                    <li>  {props3} </li>
                    <li>  {props4} </li>
                    <li>  {props5} </li>

                </ul>
            </div>
        </SkillsCardStyled>
    )
}

const SkillsCardStyled = styled.div`
    background-color:var(--background-dark-grey);
    margin: 0 10px;
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    border-top: 8px solid var(--border-color);
    transition: all .3s ease-in-out;
    &:hover{
        border-top: 8px solid var(--primary-color);
        transform: translateY(4px);
    }


    .container{
      padding: 1.2rem;
        h4{
            color: var(--white-color);
            font-size: 1.1rem;
            padding: 1rem 0;
            position: relative;
            padding-bottom: 1rem;
            
            
            &::after{
                content: "";
                width: 5rem;
                background-color: var(--border-color);
                height: 3px;
                position: absolute;
                left: 0;
                bottom: 0;
                border-radius: 10px;
            }
        }

        p{
            padding: .8rem 0 ;
        }

        img{
            margin-left:30%;
            width:30%;
        }
            
        ul{
            padding: .8rem 0 ;
            
        }

    }

`;

export default SkillsCard;