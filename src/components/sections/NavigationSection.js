import React from 'react';
import ListItem from '../generic/ListItem';
import logo from '../../components/images/logo.png'
import home_insurance from '../../components/images/h-ins.png'
import life_insurance from '../../components/images/l-ins.png'
import vehicle_insurance from '../../components/images/v-ins.png'
import funeral_insurance from '../../components/images/v-ins.png'
import DropdownButton from '../generic/DropdownButton';

const NavigationSection = () => {
    return (
        <section className='navigation-section'>
            <nav className='application-main-navigation'>
                <table>
                    <tr>
                        <td className='menu-call-to-action'>
                            <img src={logo} alt='icon' />
                        </td>
                        <td>
                            <ul className='main-menu-items'>
                                <DropdownButton name="Compare">
                                    <ListItem icon={vehicle_insurance} name={"Vehicle Insurance"} />
                                    <ListItem icon={home_insurance} name={"Home Insurance"} />
                                    <ListItem icon={life_insurance} name={"Life Insurance"} />
                                    <ListItem icon={funeral_insurance} name={"Funeral Insurance"} />
                                </DropdownButton>
                                <ListItem name={"For brokers"} />
                            </ul>
                        </td>
                    </tr>
                </table>
            </nav>
        </section>
    );
};

export default NavigationSection;