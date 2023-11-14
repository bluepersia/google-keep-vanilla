export default class Main {
    constructor (props)
    {
        this.props = props;
        this.notesEl.addEventListener ('click', this.handleClick.bind(this));
        this.notesEl.addEventListener ('mouseover', this.handleMouseOver.bind(this));
    }
    props = {}

    notesEl = document.getElementById ('notes');

    handleMouseOver (e)
    {
        const {target } = e;

        if (target.closest ('.toolbar-color'))
            {
                const noteEl = target.closest ('.note');
                this.props.openToolbar (noteEl.dataset.id, e.clientX, e.clientY);
            }

    }

    handleClick ({target})
    {
        if (target.closest ('.toolbar-delete'))
        {
            this.props.deleteNote (target.dataset.id);
            return;
        }
        const noteEl = target.closest ('.note');
        if (noteEl)
            this.props.openModal (noteEl.dataset.id);
    }

    render ()
    {
        this.notesEl.innerHTML = this.props.notes.map (note => `
        <div style="background: ${note.color};" class="note" data-id="${
            note.id
          }">
            <div class="${note.title && "note-title"}">${note.title}</div>
            <div class="note-text">${note.text}</div>
            <div class="toolbar-container">
              <div class="toolbar">
                <img class="toolbar-color" data-id=${
                  note.id
                } src="https://icon.now.sh/palette">
                <img data-id=${
                  note.id
                } class="toolbar-delete" src="https://icon.now.sh/delete">
              </div>
            </div>
          </div>`).join ('');
    }
}