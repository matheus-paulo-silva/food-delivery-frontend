import React, { useState } from 'react'
import "./styles.scss"
import "./styles.scss"
import Cabecalho from '../cabecalho/Cabecalho'
import Card from '../shared/card'
import { UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import MaterialIcon from 'material-icons-react';


const Form2 = () => {
    const [form, setForm] = useState({
        firstName: '',
        mi: '',
        lastName: '',
        email: '',
        phone: '',
        adress: '',
        adress2: '',
        zipCode: '',
        city: '',
        state: ''
    })
    const [selected, setSelected] = useState('');

    const onChange = field => evt => {
        setForm({
            ...form,
            [field]: evt.target.value
        })
    }

    const saveForm = () => {
        console.log(form)
        console.log(selected)
    }

    return (
        <div className="container">
            <Cabecalho />
            <Card>
                <section className="search-block-form">
                    <input className="custom-input-search" type="text" placeHolder="Search" />
                    <button type="button" className="btn-dark-custom"><span>Search</span></button>
                </section>
                <div className="w-100p h-100p d-flex fxd-c border-table">
                    <div className="table-header peers jc-sb ">
                        {/* <div className="id-table-column"><b>#ID</b></div> */}
                        <div className="w-10p d-n@md-">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        </div>
                        <div className="w-25p d-n@md-">
                            <span>ID</span>
                        </div>
                        <div className="w-50p d-n@md-">
                            <span>Full Name</span>
                        </div>
                        <div className="w-50p d-n@md-">
                            <span>Phone Number</span>
                        </div>
                        <div className="w-70p d-n@md-">
                            <span>Email</span>
                        </div>
                        <div className="w-25p d-n@md-">
                            <span>Status</span>
                        </div>
                        <div className="w-10p d-n@md-">

                        </div>
                        {/*  <div className="w-50p status-area"> Criado em: </div>
                        <div className="w-50p status-area"> Atualizado até: </div>
                        <div className="w-33p status-area"> Status </div>
                        <div className="w-33p status-area"></div> */}
                    </div>
                    <div className="ps psb h-100p table-content">
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item, idx) =>
                            <div key={idx} className="table-tr tb-hover peers jc-sb bdB">
                                <div className="w-10p status-area">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                </div>
                                <div className="w-25p status-area">
                                    <button className="link-button green">12345</button>
                                </div>
                                <div className="w-50p status-area">
                                    Matheus Silva
                                </div>
                                <div className="w-50p status-area">
                                    (11) 996816994
                                </div>
                                <div className="w-70p status-area">
                                    mah.t1998@hotmail.com
                                </div>
                                <div className="w-25p peers  status-area">
                                    <select className="custom-select-table">
                                        <option className="active-option">Active</option>
                                        <option className="inactive-option">Inactive</option>
                                    </select>
                                </div>
                                <div className="w-10p status-area">
                                    <UncontrolledButtonDropdown>
                                        <DropdownToggle color="transparent" style={{ height: "30px", padding: "0 20px" }}>
                                            <MaterialIcon icon="more_horiz" />
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>
                                                <span className="dropdown-toggle-content"><MaterialIcon icon="visibility" size="sm" /> View Detail</span>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <span className="dropdown-toggle-content"><MaterialIcon icon="mode" size="sm" /> Edit</span>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <span className="dropdown-toggle-content red"><MaterialIcon icon="delete_outline" size="sm" />Delete</span>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledButtonDropdown>
                                </div>
                            </div>)}
                    </div>
                    <div>
                        page
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default Form2;

