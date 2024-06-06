import { useLocation } from 'react-router-dom';
import QRCode from 'react-qr-code'

function App() {
    let { search } = useLocation();

    const query = new URLSearchParams(search);
    const qrInput = query.get('input');

    return (
      <div className="blur-2">
        <div className='base-2'>
          <div className="qrcode-box">
            <QRCode value={qrInput} />
          </div>
        </div>
      </div>
    )
}

export default App
