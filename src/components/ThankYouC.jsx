import "./../style/ThankYou.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ThankYouC() {
  return (
    <div className="container">
      <div class="card card_thank ">
        <div class="card-body p-2 text-center">
          <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-start">
              <img className="w-75" src="/spade.png" alt="" />
            </div>
            <h3 class="card-title">Grazie per averci scelto</h3>
            <div className="d-flex justify-content-end">
              <img className="w-75" src="/spade.png" alt="" />
            </div>
          </div>
          <p class="card-text">
            Riceverei un email di conferma con il riepilogo del tuo ordine
          </p>
        </div>
        <div className="d-flex justify-content-between p-2">
          <div className="d-flex justify-content-start">
            <img className="w-75" src="/spade.png" alt="" />
          </div>

          <div className="d-flex justify-content-end">
            <img className="w-75" src="/spade.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
