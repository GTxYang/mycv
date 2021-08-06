import React from 'react';
import styled from 'styled-components';
import GitHub from '@material-ui/icons/GitHub';
//Có thể nói đây ví dụ như là 1 hàm có tham số là 1 chuỗi data
function Menu({ menuItem }) {
    return (
        <MenuItemStyled>
            {
                //dùng hàm map để map các data trong tham số đó, để get 
                //các dữ liệu ra
                menuItem.map((item) => {
                    return (
                        <div className="grid-item" key={item.id}>
                            <div className="project-content">
                                <div className="project-image">
                                    <img src={item.image} />
                                    <ul>
                                        <li>
                                            <a target="_blank" href={item.link} >
                                                <GitHub />
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                                <h6>{item.title}</h6>
                                <p>{item.text}</p>

                            </div>
                        </div>
                    )
                })
            }
        </MenuItemStyled>
    )
}


const MenuItemStyled = styled.div`
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap: 2rem;
        @media screen and (max-width: 920px){
            grid-template-columns: repeat(2,1fr);
        }
        @media screen and (max-width: 620px){
            grid-template-columns: repeat(2,1fr);
        }
        .grid-item{
           
            .project-content{
                .p{
                    font-size: medium !important;
                }
                display: block;
                position: relative;
                overflow: hidden;
                h6{
                    font-size: 1.3rem;
                }
                
                img{
                    //có thể bỏ width này đi
                    width:100%; 
                     height:30vh;
                    //height:22vh;
                    object-fit:cover;
                }
                ul{
               
                    transform: translateY(-600px);
                    transition: all.4s ease-in-out;
                    position: absolute;
                    left: 50%;
                    top: 40%;
                    opacity: 0;
                        li{
                            background-color: var(--border-color);
                            display:flex;
                            align-items: center;
                            justify-content: center;
                            padding: 1rem;
                            border-radius: 50%;
                            width: 3rem;
                            height: 3rem;
                            transition: all.4s ease-in-out;
                            &:hover{
                                background-color: var(--primary-color);
                            }
                            a{
                                display:flex;
                                align-items: center;
                                justify-content: center;
                            }
                        }
                }
                .project-image{
                    &::before{
                        content: "";
                        position: absolute;
                        left: 2%;
                        top: 4%;
                        height: 0;
                        width: 0;
                        transition: all .4s ease-in-out;
                    }
                    
                }
                .project-image:hover{
                    ul{
                        transform: translateY(0);
                    
                        transform: translate(-50%, -50%);
                        display:flex;
                        align-items: center;
                        justify-content: center;
                        transition: all.4s ease-in-out;
                        opacity:1;
                        li{
                           
                            transition: all.4s ease-in-out;
                            &:hover{
                                background-color: var(--primary-color);
                            }
                            a{
                                display:flex;
                                align-items: center;
                                justify-content: center;
                            }
                        }

                        li:hover{
                            svg{
                                color: var(--white-color);
                            }
                        }
                        svg{
                            font-size: 2rem;
                        }
                    }
                    &::before{
                        height:calc(100% - 32%);
                        width:calc(100% - 4%);
                        background-color: white;
                        opacity: 0.9;
                        transform-origin: left;
                        transition: all .4s ease-in-out;
                    }  
                }
            }
        }
 `;

export default Menu;