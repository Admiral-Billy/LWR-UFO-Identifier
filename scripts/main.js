class UFO 
{
	constructor(name, size, strobe, missions)
	{
		this.name = name;
		this.size = size;
		this.strobe = strobe;
		this.missions = missions;
	}
}

class Mission
{
	constructor(name, height, ufos)
	{
		this.name = name;
		this.height = height;
		this.ufos = ufos;
	}
}

let ufos = [];

let name = "Scout";
let size = 0;
let strobe = false;
let missions = ["Recon", "Research", "Harvest"];
ufos.push(new UFO(name, size, strobe, missions));

name = "Fighter";
size = 0;
strobe = true;
missions = ["Hunt", "Bomb"];
ufos.push(new UFO(name, size, strobe, missions));

name = "Raider";
size = 1;
strobe = false;
missions = ["Recon", "Research", "Harvest"];
ufos.push(new UFO(name, size, strobe, missions));

name = "Destroyer";
size = 1;
strobe = true;
missions = ["Hunt", "Bomb"];
ufos.push(new UFO(name, size, strobe, missions));

name = "Overseer";
size = 1;
strobe = false;
missions = ["Infiltrate", "Retaliate", "Command"];
ufos.push(new UFO(name, size, strobe, missions));

name = "Abductor";
size = 2;
strobe = false;
missions = ["Research", "Abduction"];
ufos.push(new UFO(name, size, strobe, missions));

name = "Harvester";
size = 2;
strobe = false;
missions = ["Harvest"];
ufos.push(new UFO(name, size, strobe, missions));

name = "Transport";
size = 2;
strobe = true;
missions = ["Harvest", "Infiltrate"];
ufos.push(new UFO(name, size, strobe, missions));

name = "Terror Ship";
size = 2;
strobe = true;
missions = ["Research", "Terrorize"];
ufos.push(new UFO(name, size, strobe, missions));

name = "Battleship";
size = 3;
strobe = true;
missions = ["Scout", "Hunt", "Bomb", "Infiltrate"];
ufos.push(new UFO(name, size, strobe, missions));

name = "Assault Carrier";
size = 3;
strobe = true;
missions = ["Terrorize", "Retaliate", "Research"];
ufos.push(new UFO(name, size, strobe, missions));



//const myHeading = document.querySelector("h1");
//myHeading.textContent = ufos[0].missions[0];