
function createBoard(rows, columns) {
    $("#tiles").css({
        "grid-template-columns": "repeat(" + columns + ", 100px)",
        "grid-template-rows": "repeat(" + rows + ", 100px"
    });

    for (let i = 0; i < (rows*columns); i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile")
        $("#tiles").append(tile);
    }
}

let rowSize = 4;
let ColumnSize = 6;
createBoard(rowSize, ColumnSize);

class Character {
    constructor() {
        this.element = document.createElement("img");
        this.element.classList.add("character");
        this.element.alt = "Meow";
        //$("#tiles").append(this.element)
        this.move(1, 2)
    }

    /**
     * Note: this function assumes
     * the first row/column is 1, not 0
     * 
     * @param {*} row 
     * @param {*} column 
     */
    move(row, column) {
        console.log(row)

        row--;
        column--;

        let index = 
            row * ColumnSize  // Selected row
            + column;
        console.log(index)
        $(".tile")[index].appendChild(this.element)
        //this.element.style.gridRow = row;
        //this.element.style.gridColumn = column;
    }
    
}
const player = new Character();

function moveCharacter() {
}