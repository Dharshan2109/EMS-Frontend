function ConfirmModal({

    show,
    onClose,
    onConfirm

}){

    if(!show)
        return null;

    return(

        <div
            className="overlay"
        >

            <div
                className="popup"
            >

                <h4>
                    Delete Employee?
                </h4>

                <p>
                    This action
                    cannot
                    be undone.
                </p>

                <button
                    className=
                    "btn btn-danger me-2"

                    onClick={
                        onConfirm
                    }
                >
                    Delete
                </button>

                <button
                    className="btn btn-secondary"

                    onClick={
                        onClose
                    }
                >
                    Cancel
                </button>

            </div>

        </div>
    );
}

export default ConfirmModal;