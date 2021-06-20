import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

import { PopOver } from '../PopOver';
import { Profile } from '../Profile';

const NavBarContainer = styled.div`
  border-bottom: 2px solid #dde2e8;
  background-color:var(--white);
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--red);
  padding: 0 120px;
  position: relative;
`;

const LeftNavBar = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;
`;
const RightNavBar = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;
const Badge = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: #3da1fc;
  position: absolute;
  top: -2px;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: bold;
  color: white;
`;
const ProfileButton = styled.button`
  background-color: transparent;
  /* height: 35px;
    width: 35px;
    border-radius: 20px; */
`;

export const NavBar = () => {
    const [pop, setPop] = useState(false);
    const showPop = () => setPop(!pop);
    return (
        <NavBarContainer>
        <LeftNavBar>Savit</LeftNavBar>
        <RightNavBar>
            <FontAwesomeIcon icon={faBell} size='lg' />
            <ProfileButton onClick={showPop}>
            <Profile />
            </ProfileButton>
            <Badge>2</Badge>
        </RightNavBar>
        <PopOver pop={pop}/>
        </NavBarContainer>
    );
};
