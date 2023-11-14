export default class Header {

    form = document.getElementById ('form');
    noteTitle = document.getElementById ('note-title');
    formBtns = document.getElementById ('form-buttons')

    props = {}
    constructor (props)
    {
        this.props = props;
        this.form.addEventListener ('click', this.handleFormClick.bind (this));
        document.body.addEventListener ('click', this.handleBodyClick.bind(this));
        
        this.form.addEventListener ('submit', this.handleFormSubmit.bind(this));
    }

    handleFormSubmit (e)
    {
        e.preventDefault ();

        const formData = new FormData (e.target);
        this.props.addNote (formData.get ('title'), formData.get ('text'));
    }

    handleBodyClick ({target})
    {
        if (target.closest ('#form-close-button') || !target.closest ('#form'))
            this.closeForm ();
    }

    handleFormClick ()
    {
        this.openForm ();
    }

    openForm ()
    {
        this.form.classList.add ('open-form');
        this.noteTitle.style.display = 'block';
        this.formBtns.style.display = 'block';
    }

    closeForm ()
    {
        this.form.classList.remove ('open-form');
        this.noteTitle.style.display = 'none';
        this.formBtns.style.display = 'none';
    }
}