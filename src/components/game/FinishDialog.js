import React from "react";
import Modal from "react-modal";

Modal.setAppElement('#root');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        width: '70%',
        maxWidth: '400px',
        bottom: 'auto',
        backgroundColor: '#282c34',
        borderRadius: '16px',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

export default function FinishDialog(props) {
    const time = props.time;
    const min = Math.floor(time / 60);
    const sec = time % 60;
    const timeText = `${min !== 0 ? `${min} minutes and ` : ""}${sec} seconds`;

    function afterOpenModal() {
    }

    function restart() {
        props.onClose()
    }

    return (
        <Modal
            isOpen={props.opened}
            onAfterOpen={afterOpenModal}
            onRequestClose={props.onClose}
            style={customStyles}
            contentLabel="Finished Dialog"
            shouldCloseOnOverlayClick={false}
        >
            <div className="dialog">
                <div>
                    <div className="dialog">
                        <h2 className="white">You won!</h2>
                    </div>
                    <p className="white">Your time penalty is {timeText}.</p>
                    <div className="dialog-content">
                        <button className="btn-restart" onClick={restart}>Restart</button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}