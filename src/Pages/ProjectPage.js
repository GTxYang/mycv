import React, { useState } from 'react';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import projectsData from '../data/projectsData';
import Menu from '../Components/Menu';
import Button from '../Components/Button';

//Lấy dữ liệu category của projectdata vào button
const allButtons = ['All', ...new Set(projectsData.map(item => item.category))];


function ProjectPage() {
    //Đổ dữ liệu data từ projectData vào
    const [menuItem, setMenuItems] = useState(projectsData);
    const [button, setButtons] = useState(allButtons);


    const filter = (button) => {
        if (button === 'All') {
            setMenuItems(projectsData);
            return;
        }

        const filteredData = projectsData.filter(item => item.category === button);
        setMenuItems(filteredData);
    }
    return (
        < MainLayout >

            <Title title={'Projects'} span={'Projects'} />
            <InnerLayout>
                <Button filter={filter} button={button} />
                <Menu menuItem={menuItem} />

            </InnerLayout>
        </MainLayout >
    )
}

export default ProjectPage;