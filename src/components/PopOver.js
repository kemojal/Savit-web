import React from 'react'
import styled from 'styled-components'
import { Profile } from './Profile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn, faReply } from '@fortawesome/free-solid-svg-icons'

const PopOverComponent  = styled.div`
    width: 230px;
    height:200px;
    border: 1px solid #DDE2E8;
    position: absolute;
    border-radius: 7px;
    background-color: white;
    transform: ${({ pop }) => (pop ? "scale(1)" : "scale(0.5)")} ; 
    top: ${({ pop }) => (pop ? "30px" : "-30px")};
    right: ${({ pop }) => (pop ? "150px" : "100px")};
    opacity: ${({ pop }) => (pop ? "1" : "0")};
`

const PopHeader = styled.div`
    padding: 14px 0;
    border-bottom: 1px solid #DDE2E8;
    display: flex;
`
const PopHeaderRight  = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 0.75;
    align-items: flex-start;
    padding-left: 10px;
    height:100%;
    .userName{
        font-size: 18px;
        font-weight: bold;
        color: var(--fontBlack);
        letter-spacing: 1px;
    }
    .userTitle{
        font-size: 16px;
        font-weight: normal;
        color:#909090;
    }
`
const PopHeaderLeft  = styled.div`
    height:100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-grow: 0.25;
`
const PopBody   = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content:  center;
padding: 10%;
.item {
    font-size: 16px;
    padding:  10px 0;
    color: var(--fontBlack);
    display: flex;
    align-items: center;
    justify-content: center;
    span{
        padding-left: 10px;
    }
}
.round{
    width: 32px;
    height: 32px;
    background: #4A4A4A;
    color: white;
    border-radius: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
}
`
export const PopOver = ({pop}) => {
    console.log(pop);
    return (
        <PopOverComponent pop={pop}>
            <PopHeader>
                <PopHeaderLeft>
                    <Profile/>
                </PopHeaderLeft>
                <PopHeaderRight>
                    <span className="userName">Martin Philips</span>
                    <span className="userTitle">Councilor Member</span>
                </PopHeaderRight>
            </PopHeader>
            <PopBody>
                <div className="item left">
                    <FontAwesomeIcon icon={faToggleOn} size="lg" />
                    <span>Account Settings</span></div>
                <div className="item right">
                    <div className="round"><FontAwesomeIcon icon={faReply} size="lg"/></div>
                    <span>Log Out</span>
                    </div>
            </PopBody>
        </PopOverComponent>
    )
}
