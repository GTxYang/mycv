import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import avatar from '../img/avatar.jpg';

import FacebookIcon from '@material-ui/icons/Facebook'
import GithubkIcon from '@material-ui/icons/GitHub'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
function Navigation() {
    return (
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt="" />
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
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" activeClassName="active-class" exact>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName="active-class" exact>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/skill" activeClassName="active-class" exact>Skills</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/projects" activeClassName="active-class" exact>Projects</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" activeClassName="active-class" exact>Contact</NavLink>
                </li>
            </ul>
            <footer className="footer">

            </footer>

        </NavigationStyled>
    )
}


const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 8px solid var(--border-color);

    .avatar{
        width: 80%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 1rem 0;
        img{
            width: 90%;
            border-radius:50%;
            border: 8px solid var(--border-color);
        };
        .icons{
            display:flex;
            justify-content: center;
            margin-top:1rem;
            padding-botton:1rem;
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

    .nav-items{
        width: 100%;
        text-align: center;
        .active-class{
            background-color:var(--primary-color);
        }
        li{
            display: block;
            a{
                display:block;
                padding: .5rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight:600;
                letter-spacing:1px;
                &:hover{
                    cursor: pointer;
                    color: var(--white-color);
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width:0;
                    height: 50%;
                    background-color:var(--primary-color);
                   // transition: All 0.4s cubic-bezier(1,-0.27,.25,.96);
                   transition: All 0.4s cubic-bezier(.69,.06,.25,.96);
                   z-index: 3;
                   opacity: 0.21;
                }
            }

            a:hover::before{
                width: 100%;
                height: 100%;
            }
        }
    }

    footer{
        border-top: 1px solid var(--border-color);
        width: 100%;
        p{
            
            padding: 1rem 0 ;
            font-size: 1.1rem;
            display: block;
            text-align: center;
        }
        
    }
`;

export default Navigation;