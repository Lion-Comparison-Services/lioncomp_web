import React from 'react'
import logo from "../images/logo.png"

function HomePage() {
    const [compareMenuItems] = React.useState([{
        label: "Vehicle Insurance",
        action: ()=>{},
    },{
        label: "Life Insurance",
        action: ()=>{},
    },{
        label: "Funeral Insurance",
        action: ()=>{},
    }])

    return (
        <React.Fragment>
            <nav>
                <table>
                    <tr>
                        <td className='logo-wrapper'>
                            <img src={logo} alt="Lion Comp" />
                        </td>
                        <td className='logo-wrapper'>
                            <h4>Compare</h4>
                            <ul>
                                {compareMenuItems.map((e,idx)=>{
                                    <li key={idx}>{e}</li>
                                })}
                            </ul>
                        </td>
                    </tr>
                </table>
            </nav>
        </React.Fragment>
    )
}

export default HomePage
