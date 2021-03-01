function make_map(n, m, char, obj){
    let world_map = [];
    for(let i=0; i<m+2; i++){
    world_map.push(Array(n+2).fill(0));
    }
    for(let i in world_map){
        for(let j in world_map[0]){
        if (i==0 || j==world_map[0].length-1 || j==0 || i==world_map.length-1) {
        world_map[i][j] = 2;
        }
    }
    }
    world_map[char[0]+1][char[1]+1] = 1;
    for (let i of obj){
      if (world_map[i[0]+1][i[1]+1] != 1){
        world_map[i[0]+1][i[1]+1] = 2;
      } else {
        world_map[i[0]+1][i[1]+1] = 1;
      }
    }
    for(let i of world_map) {
      console.log(i);
    }
  }
  
  make_map(4, 5, [0, 0], [[0,1],[1,1],[2,3],[1,3]]);