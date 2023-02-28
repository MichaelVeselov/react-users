import './index.scss';

import { useState, useEffect } from 'react';

import Success from './components/Success';
import Users from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([]);
  const [invitations, setInvitations] = useState([]); // array with Id's
  const [success, setSuccess] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((response) => response.json())
      .then((json) => setUsers(json.data))
      .catch((error) => console.warn(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const onChangeSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  const onClickInvitation = (id) => {
    if (invitations.includes(id)) {
      setInvitations((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvitations((prev) => [...prev, id]);
    }
  };

  const onClickSendInvitations = () => {
    setSuccess(true);
  };

  return (
    <div className='App'>
      {!success ? (
        <Users
          items={users}
          isLoading={isLoading}
          search={search}
          onChangeSearch={onChangeSearch}
          invitations={invitations}
          onClickInvitation={onClickInvitation}
          onClickSendInvitations={onClickSendInvitations}
        />
      ) : (
        <Success count={invitations.length} />
      )}
    </div>
  );
}

export default App;
