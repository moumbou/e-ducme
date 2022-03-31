import React from 'react'
import headerStyle from '../css/HeaderStyle.module.css'
import Avatar from 'react-avatar'
import { FaBars } from 'react-icons/fa'
import { IoNotificationsSharp } from 'react-icons/io5'
import { AiFillCaretDown } from 'react-icons/ai'

function Header() {
  return (
    <div className={headerStyle.style}>
        <div target="left-side">
            <FaBars />
        </div>

        <div target="right-side">
            <IoNotificationsSharp size={32} />
            <Avatar src='https://avatars.githubusercontent.com/u/60050570?v=4' size="42" round={true} />
            <div target="user-profile-side">
                <span>user name</span>
                <AiFillCaretDown />
            </div>
        </div>
    </div>
  )
}

export default Header