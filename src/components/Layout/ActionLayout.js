import React, { useState } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import AddTransactionDialogue from '../AddTransactionDialogue';
import Modal from '../Modal';

const LayoutContainer = styled.div`
  padding: 30px 120px;
  display: flex;

  .action-div {
    padding: 0 20px;
    padding-left: 0;
    display: flex;
    span {
      padding: 0 5px;
      padding-left: 0;
      color: #acb6c2;
      .number {
        color: black;
      }
    }
  }
  select {
    font-size: 16px;
    color: #444b53;
    background: transparent;
  }
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 0.5;
`;
const Right = styled.div`
  flex-grow: 0.5;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const AddTransactionButton = styled.button`
  border: none;
  background-color: #3da1fc;
  color: #b5dafe;
  font-size: 16px;
  padding: 13px 24px;
  border-radius: 3px;
  margin-right: 10px;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.05);
  span {
    padding-left: 10px;
    color: white;
  }
`;
const MoreButton = styled.button`
  border: none;
  background-color: white;
  color: #3da1fc;
  font-size: 16px;
  padding: 13px 24px;
  border-radius: 3px;
  box-shadow: 3px 3px rgba(0, 0, 200, 0.02);
  span {
    padding-right: 10px;
  }
`;
const ActionLayout = () => {
  const [TransactionDialogue, setTransactionDialogue] = useState(false);
  const ShowTransactionDialogue = () => toggleModal(!TransactionDialogue);
  const showAddTransactionDialogue = () => {
    alert('wow');
  };

  const [isModalOpen, toggleModal] = useState(false);

  return (
    <LayoutContainer>
      <Left>
        <div className='action-div'>
          <span className='number'>1824</span>
          <span>Transactions</span>
        </div>
        <div className='action-div'>
          <span>Sort by</span>
          <div>
            <select name='sorts' id='sorts'>
              <option value='volvo'>Highest</option>
              <option value='saab'>Lowest</option>
            </select>
          </div>
        </div>
        <div className='action-div'>
          <span>Filter</span>
          <div>
            <select name='filters' id='filters'>
              <option value='volvo'>Expenses</option>
              <option value='saab'>Income</option>
            </select>
          </div>
        </div>
      </Left>
      <Right>
        <AddTransactionButton onClick={ShowTransactionDialogue}>
          <FontAwesomeIcon icon={faPlus} />
          <span>Add Transaction</span>
        </AddTransactionButton>
        <MoreButton>
          <span>More</span>
          <FontAwesomeIcon icon={faEllipsisH} />
        </MoreButton>
      </Right>
      {/*  */}
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <h1>test</h1>
        <p>Other text that describes what is happening</p>
        {/* <AddTransactionDialogue  stateCondition = {TransactionDialogue}/> */}
        <button onClick={ShowTransactionDialogue}>toggle</button>
      </Modal>
    </LayoutContainer>
  );
};

export default ActionLayout;
