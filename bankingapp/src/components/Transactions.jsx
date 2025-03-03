import { useState } from 'react';
import '../styles/Transactions.css';

function Transactions() {
  const [userName, setUserName] = useState('Tony Jarvis');
  const [isEditing, setIsEditing] = useState(false);

  const accounts = [
    { id: 1, type: 'Checking', number: '8349', balance: 2082.79 },
    { id: 2, type: 'Savings', number: '6712', balance: 10928.42 },
    { id: 3, type: 'Credit Card', number: '8349', balance: 184.3 }
  ];

  const handleEditClick = () => setIsEditing(true);
  const handleSaveClick = () => setIsEditing(false);
  const handleNameChange = (event) => setUserName(event.target.value);

  return (
    <div className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back<br />
          {userName}!
        </h1>
        {isEditing ? (
          <div className="edit-name">
            <input type="text" value={userName} onChange={handleNameChange} />
            <button onClick={handleSaveClick}>Save</button>
          </div>
        ) : (
          <button className="edit-button" onClick={handleEditClick}>
            Edit Name
          </button>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      {accounts.map((account) => (
        <section key={account.id} className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">
              Argent Bank {account.type} (x{account.number})
            </h3>
            <p className="account-amount">${account.balance}</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Transactions;
