// export const NavBar = ()=>{
//     return <nav>
//         <div className="logo">Logo</div>
//         <div className="nav-items">
//           <div className="nav-item">Home</div>
//           <div className="nav-item">Home</div>
//           <div className="nav-item">Home</div>
//           <div className="nav-item">Home</div>
//           <div className="nav-item">Home</div>
//         </div>
//         <div className="menu">=</div>
//       </nav>


export const NavBar = () => {
    const NAV_ITEMS = [
        { label: 'SIGN UP', design:'sign', route: '' },
        { label: 'lOGIN', design:'amrdaka', route: '' },

    ];

    return (
        <nav>
            <div className="logo"><img src="https://vote.missnepalnorthamerica.com/guest/images/logo-v.svg" alt="" />
            </div>
            <div className="nav-items btn">
                {NAV_ITEMS.map((navItem, index) => (
                    <div className="nav-item btn" key={index}>
                        <button className={`${navItem.design}`}>{navItem.label}</button>
                    </div>
                ))}
            </div>
        </nav>
    );
}