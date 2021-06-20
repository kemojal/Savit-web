// import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import './styles.css';

import { useSelector } from 'react-redux';

import { NavBar } from './components/Layout/NavBar';
import { Header } from './components/Layout/Header';
import ActionLayout from './components/Layout/ActionLayout';
import { TransactionLayout } from './components/Layout/TransactionLayout';

const MainLayout = styled.div`
  background-color: #f4f8fa;
  width: 78vw;
  height: 100%;
  padding: 0 30px;
`;

export default function App() {
  // const Transactions  = useSelector((state) => state);
  // const amounts = Transactions.map(transaction => transaction.amount);
  // const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  // const expenses  = (amounts.filter(item=> item < 0).reduce( (acc, item)=>(acc += item), 0) * -1).toFixed(2);
  // const income  = (amounts.filter(item=> item > 0).reduce( (acc, item)=>(acc += item), 0)).toFixed(2);
  const transactions = useSelector((state) => state);

  return (
    <div className='App'>
      <MainLayout>
        <NavBar />
        <Header />
        <ActionLayout />
        <TransactionLayout transactions={transactions} />
      </MainLayout>
    </div>
  );
}
