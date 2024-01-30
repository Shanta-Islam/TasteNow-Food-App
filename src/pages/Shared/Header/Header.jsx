import cart from '../../../assets/images/Shopping Cart.png'
const Header = () => { 
    return (
        <nav className="nav">
            <input type="checkbox" id="nav-check" />
            <div className="nav-header">
                <div className="nav-title">
                    Taste now
                </div>
            </div>
            <div className="nav-btn">
                <label htmlFor="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <ul className="nav-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <img src={cart} alt="" />
            <button className='signup-btn'>Sign up</button>
        </nav>
    );
};

export default Header;