class task extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot!.innerHTML = `
            <div class="task">
        <input type="checkbox">
        <div class="spacer"></div>
        <h1>TASK NAME</h1>
    </div>

        <style>
        .task{
    display: flex;
    align-items: center;
    padding: 10px;
    margin: 10px;
    background-color: aqua;
    border-color: black;
    border-style: solid;
    border-radius: 10px;
    width: 50vh;
}
.spacer{
    width: 10px;
    height: 10px;
}
        </style>
        `

    }
}

export default task