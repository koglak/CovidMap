import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { toggleModal, setTabValue } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineDangerous } from "react-icons/md";


import {
    Tab, Tabs
} from "@mui/material";
import { TabPanel, TabsContext } from '@mui/base';
import { DataGrid } from "@mui/x-data-grid";
import { columns } from '../data/data';

export default function CountryMenu() {

    const countryName = useSelector((state) => state.countryName);
    const isOpen = useSelector((state) => state.isOpen);
    const total_deaths = useSelector((state) => state.total_deaths);
    const total_active = useSelector((state) => state.total_active);
    const last_update = useSelector((state) => state.last_update);
    const spinner = useSelector((state) => state.spinner);
    const error = useSelector((state) => state.error);
    const tabValue = useSelector((state) => state.tabValue);
    const data = useSelector((state) => state.data);

    const dispatch = useDispatch();

    const handleChange = (event, newValue) => {
        dispatch(setTabValue(newValue))
    };

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
                                <MdOutlineDangerous size={28} color={"red"} /> {error}
                            </div> :
                            <div>
                                <ul>
                                    <li><b>Last Update:</b> {last_update}</li>
                                    <li><b>Total Death:</b> {total_deaths}</li>
                                    <li><b>Total Active:</b> {total_active}</li>
                                </ul>

                                <Tabs value={tabValue}
                                    onChange={handleChange}
                                    aria-label="country-statistics-tabs"
                                    sx={{
                                        '.MuiTab-root': {
                                          color: 'black', 
                                        },
                                        '.Mui-selected': { 
                                          color: 'black',
                                        },
                                      }}
                                    TabIndicatorProps={{ sx: { backgroundColor: 'black' } }}>
                                    <Tab label="Province Table" value="1" sx={{ color: 'black' }} />
                                    <Tab label="Charts" value="2" sx={{ color: 'black' }} />
                                </Tabs>

                                {tabValue === "1" &&
                                    <DataGrid
                                        rows={data}
                                        columns={columns}
                                        className='mt-3'
                                        initialState={{
                                            pagination: {
                                                paginationModel: {
                                                    pageSize: 5
                                                }
                                            }
                                        }}
                                        pageSizeOptions={[5]} />}


                            </div>
                }



            </Modal.Body>
        </Modal>
    )
}
