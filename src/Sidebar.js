import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css';

function Sidebar() {
    const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">
                #
            </span>
            <p>{topic}</p>
        </div>
    )








    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80" alt="backgound" />
                <Avatar src={user.photoUrl} className="sidebar__avatar" >{user.email[0]}</Avatar>
                <h2>{user.displayname}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,448</p>
                </div>
            
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('nodejs')}
                {recentItem('angular')}
                {recentItem('mongoDB')}
                {recentItem('python')}
                {recentItem('machine learning')}
                </div>
        </div>
    )
}

export default Sidebar
