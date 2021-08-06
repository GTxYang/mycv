import React from 'react';
import styled from 'styled-components';
import resume from '../img/avatar.jpg';
import PrimaryButton from './PrimaryButton';
function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} />
            </div>
            <div className="right-content">

                <h4>Hi there, My name is <span> Duong Gia Tien</span></h4>
                <p className="paragraph">
                    - I am currently living in Ho Chi Minh City. I am a final year student,
                    I have been studying IT for three years at HongBang International University.
                    My familiar language is
                    <span className="java"> Java </span>
                    with
                    <span className="java"> Spring framework </span>
                    for website development.

                </p>
                <p className="paragraph">
                    - To describe myself, I can say that I am a hard worker and have gained a lot of skills over the years and
                    Learning new languages and technologies is something I'm passionate about. I'm considered a team player because I
                    love helping others. You can find some projects in my portfolio or Github. I am currently looking for an opportunity
                    to dedicate my skills and enthusiasm. I hope I will have the opportunity to hone my programming skills at the company.
                </p>


                <PrimaryButton title={'Download CV'} />
            </div>

        </ImageSectionStyled>

    )
}

const ImageSectionStyled = styled.div`
    display:flex;
    margin-top:5rem;

    @media screen and (max-width: 1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }

    @media screen and (max-width: 1903px){
        .left-content{
            width: 100%;
            img{
                width: 90% !important;
                height: 100%; !important;
                object-fit:cover !important;
            }
        }
    }
 
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit:cover;
        }

        clip-path: polygon(0 0, 0 200%, 100% 100%, 100% 25%, 75% 0);
    }

    .right-content{
        //padding-bottom: 1.4rem;
        width:100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;           
               
            }
            
        }
        .paragraph{
            padding: 1rem 0;
        }

        .java{
            color: var(--white-color);
        }


        
    }
   
`;
export default ImageSection;