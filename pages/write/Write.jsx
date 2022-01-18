import "./write.css"
import writeph from "../../assetss/bookph1.jpg"
export default function Write() {
    return (
        <div className="write">
            <img 
            className="writeImg" src={writeph} alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Напиши нешто..." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Постирај</button>
            </form>
        </div>
    )
}
