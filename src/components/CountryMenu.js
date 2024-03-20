import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { toggleModal } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineDangerous } from "react-icons/md";

export default function CountryMenu() {

    const countryName = useSelector((state) => state.countryName);
    const isOpen = useSelector((state) => state.isOpen);
    const deaths = useSelector((state) => state.deaths);
    const fatality_rate = useSelector((state) => state.fatality_rate);
    const last_update = useSelector((state) => state.last_update);
    const spinner = useSelector((state) => state.spinner);
    const error = useSelector((state) => state.error);

    const dispatch = useDispatch();

    return (
        <Modal show={isOpen}
            onHide={() => { dispatch(toggleModal(false)) }}
            size="lg"
            aria-labelledby="example-custom-modal-styling-title">
            <Modal.Header closeButton>
                <Modal.Title>{countryName} Statistics</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {
                    spinner ?
                        <div className='d-flex justify-content-center align-items-center w-100 h-50'>
                            <div className="spinner-border text-dark" role="status">
                                <span className="sr-only"></span>
                            </div>
                        </div> : error !== "" ?
                            <div className="alert" role="alert">
                               <MdOutlineDangerous size={28} color={"red"}/> {error}
                            </div> :
                            <div>
                                <ul>
                                    <li><b>Last Update:</b> {last_update}</li>
                                    <li><b>Deaths:</b> {deaths}</li>
                                    <li><b>Fatality Rate:</b> %{fatality_rate}</li>
                                </ul>
                            </div>
                }



            </Modal.Body>
        </Modal>
    )
}
