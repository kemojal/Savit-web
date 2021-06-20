import React from 'react'
import styled from 'styled-components'
const ProfileContainer = styled.div`
    height: 35px;
    width: 35px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F5F0FD;
    color: #AE7BFF;
    margin-left: 10px;
` 
export const Profile = () => {
    return (
        <ProfileContainer>MP</ProfileContainer>
    )
}
