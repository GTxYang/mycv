import React from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import SkillsSection from '../Components/SkillsSection'

function SkillPage() {
    return (
        <MainLayout>

            <SkillsPageStyled>

                <Title title={'Skills'} span={'Skills'} />

                <SkillsSection />
            </SkillsPageStyled>

        </MainLayout>
    )
}

const SkillsPageStyled = styled.div`


`;

export default SkillPage;