function initialgrid(){
    let grid = document.getElementById("gride");
    for(let i = 0; i < 10; i++){
        let row = document.createElement("div");
        row.className = 'row row' + (i+1) ;
        row.id = 'row' + (i+1)
        
        for(let j = 0; j < 20; j++){
            let node = document.createElement("div");
            node.className = "node node" + ((i*10)+(j+1));
            node.id = "node" + ((i*10)+(j+1));
        row.appendChild(node);   
        }
    grid.appendChild(row);
    }
    
}


