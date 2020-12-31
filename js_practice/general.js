let loadout_1 = {
    primary:"MIDA Multi-tool",
    secondary:"Vex Mythoclast",
    heavy:"Gjallahorn"
  }

function makePlayer(name, level, loadout){
  return {
      name: name,
      level: level,
      loadout: loadout,
      swap_primary: function(){
          let new_primary = prompt('which weapon would you like to swap your primary to?');
          this.loadout.primary = new_primary;
          return this.loadout.primary;
      }
  }
}

function add(){
    let sum = 0;
    for (let num of arguments){
        sum += num;
    }
    return sum;
}
function avg(...args){
    let sum = 0;
    for (let num of args){
        sum += sum;
    }
    return sum/args.length;
}

let enemies = ["hive", "oryx", "thrall", "witch", "knight"];
enemies.push("shank");

console.log(getty.loadout.primary);
let getty = new makePlayer("Getty", "1024", loadout_1);
getty.swap_primary();
console.log(getty);
console.log(getty.loadout.primary);

// let new_primary = prompt('which weapon would you like to swap your primary to?')
// getty.loadout.primary = new_primary
// console.log(getty.loadout.primary)

// console.log(enemies.length);
// for (let enemy of enemies){
//   console.log(enemy);
// }
// console.log(enemies.toString());
// console.log(enemies.join(" "));
// console.log(add(3, 4, 5, 8, 9));
// console.log(avg(4,7,2,5));
// console.log(avg.apply(null, [5,32,6,4,1]));