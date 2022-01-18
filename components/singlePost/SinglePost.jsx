import "./singlePost.css";
import singleph from "../../assetss/singleph1.jpg";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={singleph} alt="" />
        <h1 className="singlePostTitle">
          Клубот 5 наутро
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Автор: <b>Робин Шарма</b>
          </span>
          <span className="singlePostDate">пред 15 минути</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
          voluptate architecto maiores vero at enim eligendi praesentium, minima
          aliquam quo odio assumenda cum, modi eum. Quis, voluptates dicta.
          Nobis, non! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Laboriosam voluptate architecto maiores vero at enim eligendi
          praesentium, minima aliquam quo odio assumenda cum, modi eum. Quis,
          voluptates dicta. Nobis, non! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Laboriosam voluptate architecto maiores vero at enim
          eligendi praesentium, minima aliquam quo odio assumenda cum, modi eum.
          Quis, voluptates dicta. Nobis, non! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Laboriosam voluptate architecto maiores
          vero at enim eligendi praesentium, minima aliquam quo odio assumenda
          cum, modi eum. Quis, voluptates dicta. Nobis, non! Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Laboriosam voluptate
          architecto maiores vero at enim eligendi praesentium, minima aliquam
          quo odio assumenda cum, modi eum. Quis, voluptates dicta. Nobis, non!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
          voluptate architecto maiores vero at enim eligendi praesentium, minima
          aliquam quo odio assumenda cum, modi eum. Quis, voluptates dicta.
          Nobis, non! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Laboriosam voluptate architecto maiores vero at enim eligendi
          praesentium, minima aliquam quo odio assumenda cum, modi eum. Quis,
          voluptates dicta. Nobis, non! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Laboriosam voluptate architecto maiores vero at enim
          eligendi praesentium, minima aliquam quo odio assumenda cum, modi eum.
          Quis, voluptates dicta. Nobis, non! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Laboriosam voluptate architecto maiores
          vero at enim eligendi praesentium, minima aliquam quo odio assumenda
          cum, modi eum. Quis, voluptates dicta. Nobis, non! Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Laboriosam voluptate
          architecto maiores vero at enim eligendi praesentium, minima aliquam
          quo odio assumenda cum, modi eum. Quis, voluptates dicta. Nobis, non!
        </p>
      </div>

      <div className="ui-comments">
        <h3 className="ui-dividing-header">Коментари</h3>
        <div className="comment">
          <div className="avatar">
            <img src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
          </div>
          <div className="content">
            <a className="author">Ислам</a>
            <div className="metadata">
              <div>Денес во 17:30</div>
            </div>
            <div className="text">Прекрасно</div>
            <div className="actions">
              <a className="">Одговри</a>
            </div>
          </div>
        </div>
        <div className="comment">
          <div className="avatar">
            <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
          </div>
          <div className="content">
            <a className="author">Алиески</a>
            <div className="metadata">
              <div>Вчера во 3:27</div>
            </div>
            <div className="text">
              <p>Морам да ги прочитам</p>
            </div>
            <div className="actions">
              <a className="">Одговри</a>
            </div>
          </div>
          <div className="ui-comments">
            <div className="comment">
              <div className="avatar">
                <img src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
              </div>
              <div className="content">
                <a className="author">Сара</a>
                <div className="metadata">
                  <div>Во моментов</div>
                </div>
                <div className="text">Прекрасна обработка</div>
                <div className="actions">
                  <a className="">Одговори</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="comment">
          <div className="avatar">
            <img src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
          </div>
          <div className="content">
            <a className="author">Едо</a>
            <div className="metadata">
              <div>Пред 5 дена</div>
            </div>
            <div className="text">Перфектно</div>
            <div className="actions">
              <a className="">Одговри</a>
            </div>
          </div>
        </div>
        <form className="ui-reply-form">
          <div className="field">
            <textarea rows="3"></textarea>
          </div>
          <button className="ui-icon-primary-left-labeled-button">
            <i aria-hidden="true" className="edit-icon"></i>Дај одговор!
          </button>
        </form>
      </div>
    </div>
  );
}
