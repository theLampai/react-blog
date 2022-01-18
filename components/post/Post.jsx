import "./post.css"
import bookph1 from "../../assetss/bookph1.jpg"
import { Link } from "react-router-dom"

export default function Post() {
    return (
        <div className="post">
            <img
            className="postImg" 
            src={bookph1} 
            alt="" />
            <div className="postInfo">
                <div className="postCat">
                    <span className="postCat">Книги</span>
                    <span className="postCat">Филмови</span>
                </div>
                <span className="postTitle"><Link className="link" to="/post/:postId">Топ 3 книги за месец февруари</Link></span>
                <hr />
                <span className="postDate">пред 1 сат</span>
            </div>
            <p className="postDesc">
                Три одлични мотивирачки книги за да ја зголемите вашата продуктивност.
                Три одлични мотивирачки книги за да ја зголемите вашата продуктивност.
                Три одлични мотивирачки книги за да ја зголемите вашата продуктивност.
                Три одлични мотивирачки книги за да ја зголемите вашата продуктивност.
                Три одлични мотивирачки книги за да ја зголемите вашата продуктивност.
            </p>
        </div>
    )
}
