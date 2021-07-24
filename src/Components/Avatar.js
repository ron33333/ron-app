import React from 'react';
import './Avatar.css';

const Avatar = (props) => {
    const {url} = props;
    return (
        <img src={url} alt='img' />
    )
}
export default Avatar;