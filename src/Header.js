import React from 'react'
import './Header.css'
import { useDispatch } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { auth } from './firebase';
import { logout } from './features/userSlice';



function Header() {
    // const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const logoutofApp = () => {
        dispatch(logout())
        auth.signOut(logout);
    }






    return (
        <div className = 'header'>
          

            <div className="header__left">
                <img src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1616804495~hmac=b436e3f01e7b2804a19287c2198d0b74" alt="" />
                
                <div className="header__search">
                    {/* search icon */}
                    <SearchIcon />
                    <input type="text" placeholder="Search"/>
                    
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption avatar={true} onClick={logoutofApp} title="me"/>
            </div>





        </div>
    )
}

export default Header
