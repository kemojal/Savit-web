import React, {useState} from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faUserFriends, faChartPie, faCalendarDay } from '@fortawesome/free-solid-svg-icons';

const HeaderContainer = styled.div`
 background-color:var(--white);
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 padding: 0 120px;
 padding-top: 60px;
`
const InputSearch  = styled.input`
    border: 1px solid #DDE2E8;
    width: 100%;
    padding: 20px 30px;
    border-radius: 8px;
    font-size: 15px;
    &::placeholder {
        color: #C4CED9;
        font-size: 15px;
}
`
const TabContainer = styled.div`
    display: flex;
    padding: 30px 0px;
    padding-bottom: 0;
    color: #88929D;
    .tab{
        padding: 10px 5px;
        margin: 0 25px;
        margin-left: 0px;
        span{
            padding-left: 10px;
        }   
    }
    .active {
            border-bottom: 1px solid var(--red);
            color: var(--red);
        }
    
`

const TabsList  = [
    {
        tabname: 'Today' ,
        index: 0,
    },
    {
        tabname: 'Categories' ,
        index: 1,
    },
    {
        tabname: 'Split' ,
        index: 2,
    },
    // {
    //     tabname: 'Unfullfilled' ,
    //     index: 3,
    // },

]
export const Header = () => {
    const [activeIndex, setActiveIndex]  = useState(0)
    const TabClick = (index) =>setActiveIndex(index)
    
    return (
        <HeaderContainer>
            <InputSearch placeholder="Start typing to search..."/>
            
            <TabContainer>
                {TabsList.map(
                    (tab, i) => {
                        let iconName   = null;
                        let isActiveClass  = tab.index === activeIndex? 'active' :'';
                        switch(tab.index){
                            case 0:
                                iconName  = faCalendarDay;
                                break;
                            case 1:
                                iconName  = faChartPie;
                                break;
                            case 2:
                                iconName  = faUserFriends;
                                break;
                            // case 3:
                            //     iconName  = faEnvelopeOpenText;
                            //     break;
                            
                        }
                        return(
                        <div 
                        key={tab.index} 
                        className={`tab ${isActiveClass}`} 
                        onClick={() =>TabClick(tab.index)}>
                            <FontAwesomeIcon icon={iconName}/>
                            <span>{tab.tabname}</span>
                        </div>)
                    }
                        )
                }
            </TabContainer>
        </HeaderContainer>
    )
}
