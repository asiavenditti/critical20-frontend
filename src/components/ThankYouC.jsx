import "./../style/ThankYou.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ThankYouC() {
  return (
    <div className="container">
      <div class="card card_thank ">
        <div class="card-body p-2 text-center">
          <div className="d-flex align-items-center h-100">
            <div className="container">
              <div>
                <h3>Grazie per il tuo acquisto</h3>
              </div>
              <p class="card-text">
                Riceverei un email di conferma con il riepilogo del tuo ordine
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
