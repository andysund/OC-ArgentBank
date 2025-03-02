import { useState } from 'react';
import '../styles/Transactions.css';
function Transactions() {
  // État pour le nom de l'utilisateur
  const [userName, setUserName] = useState('Tony Jarvis');
  // État pour gérer le mode édition
  const [isEditing, setIsEditing] = useState(false);

  // Tableau des comptes (données mockées)
  const accounts = [
    {
      id: 1,
      type: 'Checking',
      number: '8349',
      balance: 2082.79
    },
    {
      id: 2,
      type: 'Savings',
      number: '6712',
      balance: 10928.42
    },
    {
      id: 3,
      type: 'Credit Card',
      number: '8349',
      balance: 184.3
    }
  ];

  /**
   * Handler pour passer en mode édition
   */
  const handleEditClick = () => {
    setIsEditing(true);
  };

  /**
   * Handler pour sauvegarder et quitter le mode édition
   */
  const handleSaveClick = () => {
    setIsEditing(false);
  };

  /**
   * Handler pour mettre à jour l'état du nom en fonction de la saisie
   */
  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div className="account-list-container">
        <div className='account-list-welcome'>
      <h2>Welcome back </h2>
      <h2>{userName}!</h2>
      </div>

      {/* Si on est en mode édition, on affiche un input et un bouton Save */}
      {isEditing ? (
        <div className="edit-name">
          <input
            type="text"
            value={userName}
            onChange={handleNameChange}
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        // Sinon, on affiche le bouton "Edit Name"
        <button className='edit-button' onClick={handleEditClick}>Edit Name</button>
      )}

      {/* Affichage dynamique des comptes */}
      <div className='account-div'>
      {accounts.map((account) => (
        <div key={account.id} className="account-item">
            <div className='account-type'>
          <h3>
            Argent Bank {account.type} (x{account.number})
          </h3>
          <h3>${account.balance}</h3>
          <p>Available Balance</p>
            </div>
            <div className='account-button'>
          <button>View transactions</button>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Transactions;
