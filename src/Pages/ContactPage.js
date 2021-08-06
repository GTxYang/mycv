import React from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import ContactItems from '../Components/ContactItems';
//Icon
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';


function ContactPage() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />;
    const location = <LocationOnIcon />;
    return (
        <MainLayout>
            <ContactPageStyled>
                <Title title={'Contact'} span={'Contact'} />
                <InnerLayout className={'contact-section'}>

                    <div className="right-content">
                        <ContactItems icon={email} title={'Email'} contact1={'howl1542@gmail.com'} />
                        <ContactItems icon={phone} title={'Phone'} contact1={'(+84) 908 163 083'} />
                        <ContactItems icon={location} title={'Address'} contact1={'Tan Phu district, Ho Chi Minh city '} />
                    </div>




                </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
        .contact-section{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-column-gap: 2rem;
            .right-content{
                display: grid;
                grid-template-columns: repeat(1, 1fr);
                
            }
          
        }
       

`;

export default ContactPage;