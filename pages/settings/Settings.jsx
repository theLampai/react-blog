import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
import me from "../../assetss/aboutph1.jpg"

export default function Setting() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Ажурирај го твојот акаунт</span>
                    <span className="settingsDeleteTitle">Избриши го твојот акаунт</span>
                </div>
                <form  className="settingsForm">
                    <label> Профилна слика</label>
                    <div className="settingsPP">
                        <img src={me} alt="" />
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon fas fa-user-circle"></i>
                        </label>
                        <input type="file"  id="fileInput" style={{display:"none"}} />
                    </div>
                    <label> Корисничко име</label>
                    <input type="text" placeholder="Ислам" />
                    <label> Е- маил</label>
                    <input type="email" placeholder="alieski2000@gmail.com" />
                    <label> Лозинка</label>
                    <input type="password"  />
                    <button className="settingsSubmitButton">Ажурирај</button>
                    
                </form>
            </div>
            <Sidebar />

        </div>
    )
}
