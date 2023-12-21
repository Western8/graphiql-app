import { IPropsPopup } from '../utils/types';
import './Popup.css';

function Popup( { message }: IPropsPopup ) {
  return (
    <div className={`popup ${message ? 'show-popup' : ''}`}>
      <div>{message}</div>
    </div>
  );
}

export default Popup;
