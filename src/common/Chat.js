
const Chat = () => {
  return (
    <div className="chat" data-cursor-style="off">
    <button className="btn-chat">
      <div className="btn-wrapper">
        <span>Hello?</span>
        <div className="container-img btn-top">
          <img
            src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709041132/utiles/svg/btn-chat-1_vet2hk.svg"
            data-preload
            className="media"
            alt=""
          />
        </div>
        <div className="bg-1"></div>
        <div className="container-img btn-middle">
          <img
            src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709041135/utiles/svg/btn-chat-2_e69rqr.svg"
            data-preload
            className="media"
            alt=""
          />
        </div>
        <div className="bg-2"></div>
        <div className="container-img btn-bottom">
          <img
            src="https://res.cloudinary.com/dzk0coq3y/image/upload/v1709041138/utiles/svg/btn-chat-3_d7gc5r.svg"
            data-preload
            className="media"
            alt=""
          />
        </div>
      </div>
    </button>
    <div className="container-chat">
      <div className="container-messages">
        <div className="message">
          <span>
            Hi, I'm the chatbot from Blueprint Studios. How can I help you?
          </span>
        </div>
        <div className="message message-sent">
          <span>Can I get a quote?</span>
        </div>
        <div className="message message-received">
          <span>Hello! Test</span>
        </div>
      </div>
      <form className="form-chat">
        <input type="hidden" name="assunto" value="[chat]" />
        <div className="container-textarea">
          <label htmlFor="chat">Type something...</label>
          <textarea id="chat" name="mensagem"></textarea>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Chat;