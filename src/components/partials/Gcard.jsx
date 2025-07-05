export const GCard = () => {
  const girls = [
    { id: 1, title: 'aaryaa', address: 'Kathmanduo', totalvotes: '0', image: 'images/aarya-acharya.jpg' },
    { id: 2, title: 'aaryak', address: 'Kathmandu', totalvotes: '0', image: '/images/aarya-koirala.jpg' },
    { id: 3, title: 'ameesha', address: 'Pokhara', totalvotes: '0', image: '/images/Ameesha-bhandari.jpg' },
    { id: 4, title: 'hara', address: 'Kathmandu', totalvotes: '0', image: '/images/Hara-sang-Subedi.jpg' },
    { id: 5, title: 'krishma', address: 'Kathmandu', totalvotes: '0', image: '/images/Krishma-Subedi.jpg' },
  ];

  const deleteTask = (id) => {
      girls.filter(girl=> girl.id !==id );
  };



  const selectTask = (id) => {
    console.log("Select ID:", id);
  };

  return (
    <div className="card-container">
      {girls.map((girl) => (
        <div key={girl.id} className="todo-card card">
          <div className="card-title">{girl.title}</div>
          <div className="card-status ">
            <div className="badge">{girl.address}</div>
            
            <div className="badge">
            
              Votes: {girl.totalvotes}</div>
            <img
              src={girl.image}
              alt={girl.title}
              className="girl-img"
            />
          </div>
          <div className="card-btns ">
            <button
              onClick={() => deleteTask(girl.id)}
              className="outline btn"
            >
              Delete
            </button>


            <button
              onClick={() => selectTask(girl.id)}
              className="primary btn"
            >
              Vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};



//     const NAV_ITEMS = [
//         { label: 'SIGN UP', design:'sign', route: '' },
//         { label: 'lOGIN', design:'amritdaka', route: '' },

//     ];

//     return (
//         <nav>
//             <div className="logo"><img src="https://vote.missnepalnorthamerica.com/guest/images/logo-v.svg" alt="" />
//             </div>
//             <div className="nav-items btn">
//                 {NAV_ITEMS.map((navItem, index) => (
//                     <div className="nav-item btn" key={index}>
//                         <button className={`${navItem.design}`}>{navItem.label}</button>
//                     </div>
//                 ))}
//             </div>
//         </nav>
//     );
// }