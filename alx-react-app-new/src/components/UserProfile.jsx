const UserProfile = (props) => {
    return (
      <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px'}}>
        <h2 style={{color: 'blue', fontSize: '24px', marginBottom: '10px', backgroundColor: 'gray'}}>{props.name}</h2>
        <p>Age: <span style={{fontWeight: 'bold', marginBottom: '10px',}}> {props.age}</span></p>
        <p>Bio: {props.bio}</p>
      </div>
    );
  };

  export default UserProfile;