import Header from "./components/Header.js";
import Main from './components/Main.js';
import Modal from "./components/Modal.js";
import Toolbar from "./components/Toolbar.js";
class App {

    state = {
        notes: JSON.parse (localStorage.getItem ('notes')) || [],
        noteId: -1 
    }
    header = new Header ({addNote: this.addNote.bind (this)});
    main = new Main ({openToolbar: this.openToolbar.bind(this), deleteNote:this.deleteNote.bind (this), openModal: this.openModal.bind(this)});
    modal = new Modal({updateNote: this.updateNote.bind(this)});
    toolbar = new Toolbar({updateNoteColor: this.updateNoteColor.bind (this)});
    
    constructor ()
    {
        this.main.props.notes = this.state.notes;
        this.main.render();
    }

    getNewId ()
    {
        return this.state.notes.length >= 1 ? this.state.notes[this.state.notes.length - 1].id + 1 : 0;
    }
    addNote (title, text)
    {
        const newNote = {
            id:this.getNewId (),
            title, 
            text,
            color: "#FFFFFF"
        }
        this.state.notes = [...this.state.notes, newNote];
        this.save ();

        this.main.props.notes = this.state.notes;
        this.main.render ();

    }

    deleteNote (id)
    {
        this.state.notes = this.state.notes.filter (note => note.id != id);
        this.save ();

        this.main.props.notes = this.state.notes;
        this.main.render ();
    }

    updateNote (title, text)
    {
        this.state.notes = this.state.notes.map (note => note.id == this.state.noteId ? ({...note, title, text}) : note);
        this.save ();

        this.main.props.notes = this.state.notes;
        this.main.render ();
    }

    openModal (id)
    {
        this.state.noteId = id;

        const note = this.state.notes.find (note => note.id == id);

        this.modal.props.note = note;
        this.modal.open (note.title, note.text);
    }


    openToolbar (id, x, y)
    {
        this.state.toolbarNoteId = id;

        this.toolbar.open (x, y);
    }

    save ()
    {
        localStorage.setItem ('notes', JSON.stringify (this.state.notes));
    }

    updateNoteColor (color)
    {
        this.state.notes = this.state.notes.map (note => note.id == this.state.toolbarNoteId ? ({...note, color}) : note);
        this.save ();

        this.main.props.notes = this.state.notes;
        this.main.render ();
    }
}

new App ();