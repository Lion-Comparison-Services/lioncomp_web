import React from 'react';
import ListItem from '../generic/ListItem';
import logo from '../../components/images/logo.png'
import home_insurance from '../../components/images/h-ins.png'
import life_insurance from '../../components/images/l-ins.png'
import vehicle_insurance from '../../components/images/v-ins.png'
import funeral_insurance from '../../components/images/v-ins.png'
import DropdownButton from '../generic/DropdownButton';

const FooterSection = () => {
    return (
        <section className='navigation-section'>
            <nav style={{ paddingTop: 50, paddingBottom: 50 }} className='application-main-navigation'>
                <table>
                    <tr>
                        <td className='menu-call-to-action'>
                            <img src={logo} alt='icon' />
                        </td>
                        <td>
                            <p>© 2024 LionComp. All rights reserved.</p>
                        </td>
                    </tr>
                </table>
            </nav>
        </section>
    );
};

export default FooterSection;