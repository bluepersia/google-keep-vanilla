export default class {
    constructor (props = {})
    {
        this.props = props;

        document.querySelector ('.modal-close-button').addEventListener ('click', this.handleCloseClick.bind (this));

    }
    props = {};

    modal = document.querySelector('.modal');
    modalTitle = document.querySelector ('.modal-title');
    modalText = document.querySelector ('.modal-text');

    handleCloseClick ()
    {
        this.props.updateNote (this.modalTitle.value, this.modalText.value);
        this.close ();
    }

    open (title, text)
    {
        this.modalTitle.value = title;
        this.modalText.value = text;
        this.modal.classList.add ('open-modal');
    }

    close ()
    {
        this.modal.classList.remove ('open-modal');
    }
}