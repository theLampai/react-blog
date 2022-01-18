import './sidebar.css'
import ph1 from '../../assetss/aboutph1.jpg'
import { Link } from 'react-router-dom'

export default function sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className='sidebarTitle'> РЕЗИМЕ</span>
                <img className="sidebarImg" src={ph1} alt="" />
                <p>
                    Јас сум Ислам Алиески, студент на Факултетот за информатички науки и компјутерско инженерство. Имам 21 година и живеам во село Лабуништа, општина Струга.
                </p>
            </div>
          <div className="sidebarItem">
          <span className='sidebarTitle'> КАТЕГОРИИ</span>
                <ul className="sidebarList">
              <li className="sidebarListItem"><Link className="link" to="/post/:postId">Книги</Link></li>
              <li className="sidebarListItem">Филмови</li>
              <li className="sidebarListItem">Наука</li>
              <li className="sidebarListItem">Политика</li>
              <li className="sidebarListItem">Спорт</li>
              <li className="sidebarListItem">Технологија</li>
          </ul>
          </div>
          <div className="sidebarItem">
          <span className='sidebarTitle'>СЛЕДЕТЕ МЕ</span>
          <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                <i className="sidebarIcon fab fa-linkedin"></i>
          </div>

          </div>
        </div>
    )
}
