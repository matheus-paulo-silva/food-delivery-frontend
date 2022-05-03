import React from "react";
import './styles.scss'

const SideScreen = ({ children, show = false, onClickClose = () => { } }) => {
    return (
        <React.Fragment>
            <div className={`side-screen ${show ? "show" : "hidden"}`}>
                {children}
                <section className="button-side-screen-block">
                    <button type="button" className="btn-void-custom" onClick={onClickClose}>
                        <span>Close</span>
                    </button>
                    <button type="button" className="btn-dark-custom" onClick={onClickClose}>
                        <span>Add Product</span>
                    </button>
                </section>
            </div>
            <div className={`side-screen-overlay ${show ? "show" : "hidden"}`} />
        </React.Fragment>
    )
}

export default SideScreen