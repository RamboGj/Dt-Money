import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./Components/NewTransactionModal"
import { TransactionsProvider } from './Hooks/useTransactions'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  
    function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
   }

   function handleClosenewTransactionModal() {
    setIsNewTransactionModalOpen(false);
   }

  return (
        <TransactionsProvider>

        <Header onOpenNewTransactionModal = {handleOpenNewTransactionModal}/>
        <Dashboard />

        <NewTransactionModal 
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleClosenewTransactionModal}
        />
        <GlobalStyle />
        </TransactionsProvider>
  );
}

export default App;
