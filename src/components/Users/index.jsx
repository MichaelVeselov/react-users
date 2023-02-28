import Skeleton from './Skeleton';
import User from './User';

const Users = (props) => {
  const { items, isLoading, search, onChangeSearch, invitations, onClickInvitation, onClickSendInvitations } = props;
  return (
    <>
      <div className='search'>
        <svg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
          <path d='M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z' />
        </svg>
        <input value={search} onChange={onChangeSearch} type='text' placeholder='Find user...' />
      </div>
      {isLoading ? (
        <div className='skeleton-list'>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className='users-list'>
          {items
            .filter((user) => {
              const fullName = (user.first_name + user.last_name).toLowerCase();
              const email = user.email.toLowerCase();
              const filter = search.toLowerCase();
              return fullName.includes(filter) || email.includes(filter);
            })
            .map((user) => (
              <User
                key={user.id}
                isInvited={invitations.includes(user.id)}
                onClickInvitation={onClickInvitation}
                {...user}
              />
            ))}
        </ul>
      )}
      {invitations.length > 0 && (
        <button onClick={onClickSendInvitations} className='send-invite-btn'>
          Send Invitation
        </button>
      )}
    </>
  );
};

export default Users;
