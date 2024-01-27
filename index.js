

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
    move(row, column, tileIndex=null) {
        if (tileIndex) {
            this._move(tileIndex)
        } else {
            row--;
            column--;
    
            let index = 
                row * ColumnSize  // Selected row
                + column;

            this._move(index);    
        }

    }

    _move(tileIndex) {
        $(".tile").css({
            "pointer-events": "none"
        });

        const tile = $(".tile")[tileIndex];

        tile.appendChild(this.element);
        tile.style.backgroundColor = "red";

        console.log(tileIndex)

        let tilesToEnable = [
            tileIndex + 1,  // To the right
            tileIndex - 1,  // To the left
            tileIndex - ColumnSize,  // Above
            tileIndex + ColumnSize  // Bellow
        ]; 

        for (let i = 0; i < tilesToEnable.length; i++) {
            console.log(tilesToEnable[i])
            try {
                $(".tile")[tilesToEnable[i]].style.pointerEvents = "initial";
            } catch {
                // If tile doesn't exist
                continue;
            }
        }
        

    }
    
    
}

class Tile extends HTMLElement {
    constructor() {
        super();
        return this;
    }
}


function createBoard(rows, columns) {
    $("#tiles").css({
        "grid-template-columns": "repeat(" + columns + ", 100px)",
        "grid-template-rows": "repeat(" + rows + ", 100px"
    });

    for (let i = 0; i < (rows*columns); i++) {
        const tile = new Tile();
        tile.classList.add("tile")
        $("#tiles").append(tile);
    }

    $(".tile").click(movePlayerToTile);
}

let rowSize = 4;
let ColumnSize = 6;
createBoard(rowSize, ColumnSize);

function movePlayerToTile(e) {
    console.log($(e.target).index())
    player.move(0,0, $(e.target).index())

}
const player = new Character();



