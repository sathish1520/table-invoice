import React from 'react'
import Faveicon from '../src/assets/images/unnamed-cloud.png'
import Profile from '../src/assets/images/download.jpg'

const Header = () => {
    return (
        <div>
            <div class='container-fluid header_background'>
                <div className='header_content'>
                    <div className='header_logo'>
                        <img src={Faveicon} width={65} height={50} />
                    </div>
                    <div className='header_list'>
                        <li>Main</li>
                        <li>Taxes</li>
                        <li>IDA Journal</li>
                        <li>Clients</li>
                    </div>
                    <div className='header_bttn_sec'>
                        <button className='new_invoice_bttn'><span><i class="fa fa-plus"></i></span>New Invoice</button>
                        <div className='notification_count'>
                            <i class="fa fa-bell notifi_icon" ></i>
                            <span class="badge">3</span>
                        </div>
                        <img src={Profile} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header;