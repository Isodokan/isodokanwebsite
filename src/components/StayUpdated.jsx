export default function StayUpdated() {
  return (
    <div className='stay-container'>
      <div>
        {" "}
        <h2>Stay updated</h2>
        <h4>
          Be the first to be notified on our latest <br></br>events and projects
        </h4>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input type='email' placeholder='Enter email address' />
        <button>Send</button>
      </div>
    </div>
  );
}
