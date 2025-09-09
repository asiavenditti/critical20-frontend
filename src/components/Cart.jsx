import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

export default function Cart() {



    const [productCart, setProductCart] = useState([])

    return (
        <div className="card mb-4 bg-light">
            <div className="card-header">Il tuo carrello</div>
            <div className="card-body">
                {/* Articoli esempio */}
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <div>
                        <img className='w-25' src="./public/img/azul.png" alt="" />
                        Azul <span className="badge bg-secondary">x2</span>
                    </div>
                    <div>
                        <button className="btn btn-sm btn-outline-secondary me-1">-</button>
                        <button className="btn btn-sm btn-outline-secondary me-1">+</button>
                        <button className="btn btn-sm btn-warning brtb"><FontAwesomeIcon icon={faTrash} size="lg" /></button>
                    </div>
                </div>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
                <strong>Totale:</strong> € 65.00
                <button className="btn btn-warning">Svuota carrello</button>
            </div>
        </div>
    );
}
