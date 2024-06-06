function App() {
    const sendToQrPage = (evt) => {
        evt.preventDefault();
        window.location.replace("/qr?input="+evt.target[0].value)
    }
    return (
      <div className="background">
        <div class="blur">
          <div className="base">
            <div className="form-style">
              <form onSubmit={sendToQrPage} className="form-content">
                  <label>Enter your Secret Message!😉</label>
                  <input id="input" required></input>
                  <button type="submit"> Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}

export default App
