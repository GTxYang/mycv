import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import SkillsCard from './SkillsCard.js';
import ai from '../img/ai.svg';
import framework from '../img/framwork.svg';
import control from '../img/control.svg';
import database from '../img/database.svg';
function SkillsSection() {
    return (
        <InnerLayout>
            <SkillsSectionStyled>
                <div className="skills">
                    <SkillsCard
                        image={ai}
                        title={'Programming Languages'}
                        props={'Java'}
                        props2={'C# '}
                        props3={'Python'}
                        props4={'HTML / CSS'}
                    />

                    <SkillsCard
                        image={framework}
                        title={'Framework & Platfroms'}
                        props={'Spring'}
                        props5={'WebAPI / JSON.'}
                        props3={'Django'}
                        props4={'.NET'}
                        props2={'Swing'}
                    />

                    <SkillsCard
                        image={database}
                        title={'Database Management'}
                        props5={'Microsoft SQL Server '}
                        props3={'MySQL'}

                    />

                    <SkillsCard
                        image={control}
                        title={'Version Control'}
                        props5={'Git (Github)'}
                    />
                </div>


            </SkillsSectionStyled>

        </InnerLayout>



    )

}

const SkillsSectionStyled = styled.section`
        .skills{
            display:grid;
            grid-template-columns:repeat(4,1fr);
            grid-gap: 1rem; 
            //justify-content: space-between;
            @media screen and (max-width: 1000px){
                flex-direction:column;  
            }
            @media screen and (max-width: 950px){
                grid-template-columns:repeat(2,1fr);
            }
            @media screen and (max-width: 650px){
                grid-template-columns:repeat(1,1fr);
            }
           
        }

`;

export default SkillsSection;