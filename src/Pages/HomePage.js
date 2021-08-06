import React from 'react';
import styled from 'styled-components';
import Particle from '../Components/Particles';
import FacebookIcon from '@material-ui/icons/Facebook'
import GithubkIcon from '@material-ui/icons/GitHub'
import LinkedinIcon from '@material-ui/icons/LinkedIn'

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Duong Gia Tien</span></h1>
                <p>I'm a final year student at HongBang International University. Currently, I'm studying in-depth about web back-end in
                    general and Spring framework in particular.
                </p>
                <div className="icons">

                    <a href="https://www.facebook.com/GtxYang/" target="_blank" className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://github.com/GTxYang/" target="_blank" className="icon i-github">
                        <GithubkIcon />
                    </a>
                    <a href="#" target="_blank" className="icon i-linked">
                        <LinkedinIcon />
                    </a>
                </div>
            </div>

        </HomePageStyled>

    )

}


const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .typography{
        position: absolute;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
        text-align: center;
        width:80%;

        .icons{
            display:flex;
            justify-content: center;
            margin-top:1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius:50%;
                transition: all .4s ease-in-out;
                cursor:pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right:1rem;
                    
                }
                svg{
                    margin: .5rem;

                }
            }
        }
    }
  
`;


export default HomePage;