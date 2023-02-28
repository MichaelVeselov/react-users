const Success = (props) => {
  const { count } = props;
  return (
    <div className='success-block'>
      <img src='public/assets/success.svg' alt='Success' />
      <h3>Done!</h3>
      <p>An invitation has been sent to {count > 1 ? `${count} users` : `${count} user`}.</p>
      <a href='/'>
        <button className='send-invite-btn'>Back</button>
      </a>
    </div>
  );
};

export default Success;
