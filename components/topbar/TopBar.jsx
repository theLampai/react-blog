import './TopBar.css'
import ph1 from '../../assetss/aboutph1.jpg'
import { Link } from 'react-router-dom';

export default function TopBar() {
    const user = true;
    return (
        <div className='top'>
            <div className="topLeft">
            <a href='https://www.facebook.com/alieskii'>
                <i className="topIcon fab fa-facebook-square"></i>
                </a>
                <a href='https://twitter.com/AlieskiIslam'>
                <i className="topIcon fab fa-twitter-square"></i>
                </a>
                <a href='https://www.instagram.com/islam.alieski/'>
                <i className="topIcon fab fa-instagram-square"></i>
                </a>
                <a href='https://www.linkedin.com/in/islam-alieski-2b053b21b/'>
                <i className="topIcon fab fa-linkedin"></i>
                </a>
            </div>
            
            <div className="topCenter">
                <ul className="topList">
                    <li className='topListItem'>
                        <Link className='link' to="/"  >ПОЧЕТНА</Link>
                    </li>
                    <li className='topListItem'><a className='link' href='https://www.alieski.com/'>  РЕЗИМЕ</a></li>
                    <li className='topListItem'><Link className='link' to="/"  >КОНТАКТ</Link></li>
                    <li className='topListItem'><Link className='link' to="/write"  >НАПИШИ</Link></li>
                    <li className='topListItem'>
                        {user && "ОДЈАВИ СЕ"}
                    </li>
                </ul>

            </div>
            <div className="topRight"><Link className='link' to="/settings">
                {
                    user ? (
                        <img  className='topImg'
                         src={ph1} 
                         alt="" /> 

                    ) : ( 
                            <ul className='topList'>
                            <li className='topListItem'>
                        <Link className='link' to="/login">НАЈАВА</Link>
                        </li>
                        
                            
                            <li className='topListItem'>
                        <Link className='link' to="/register">РЕГИСТРАЦИЈА</Link>
                                </li>
                            </ul>
                    )
                }</Link>
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
