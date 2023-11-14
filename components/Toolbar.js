export default class Toolbar 
{
    toolbar = document.getElementById ('color-tooltip');

    constructor (props = {})
    {
        this.props = props;
        this.toolbar.addEventListener ('click', this.handleClick.bind (this))
        this.toolbar.addEventListener ('mouseleave', this.close.bind(this));
    }
    open (x, y)
    {
        this.toolbar.style.display = 'flex';
        this.toolbar.style.left = `${x}px`;
        this.toolbar.style.top = `${y}px`;
    }

    close ()
    {
        this.toolbar.style.display = 'none'
    }


    handleClick ({target})
    {
        const colorOption = target.closest ('.color-option');
        if (colorOption)
            this.props.updateNoteColor (target.dataset.color);
    }
}