import { NavLink } from 'react-router-dom';
const MainHeader = () =>{
    return <header>
        <nav>
            <ul>
                <li>
                    {/* a tag is rendered by Link and react-router-dom replaces the url internally without
                    requesting a new page */}
                    <NavLink activeClassName="active" to="/welcome">Welcome</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/products">Products</NavLink>
                </li>
            </ul>
        </nav>
    </header>
}
export default MainHeader;