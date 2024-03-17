import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Blog.scss'

const BlogHeader = () => {
    return(
        <div className='blog-header'>
            <ul className='row'>
                <li className='col-auto mb-4 mb-md-0 col-md-auto'><NavLink to="/DatingTips" replace>Dating Tips</NavLink></li>
                <li className='col-auto mb-4 mb-md-0 col-md-auto'><NavLink to="/Matchmaking">Matchmaking</NavLink></li>
                <li className='col-auto mb-4 mb-md-0 col-md-auto'><NavLink
                to="/new-releases-blogList" replace>New Releases</NavLink></li>
                <li className='col-auto mb-4 mb-md-0 col-md-auto'><NavLink to="/SafeMatrimony">Safe Matrimony</NavLink></li>
                <li className='col-auto mb-4 mb-md-0 col-md-auto'><NavLink to="/wellness-blog-list">Wellness</NavLink></li>
            </ul>
        </div>
    )
}

export default BlogHeader;