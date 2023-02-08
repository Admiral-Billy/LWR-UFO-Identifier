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
	constructor(name, height, ufos, landing)
	{
		this.name = name;
		this.height = height;
		this.ufos = ufos;
		this.landing = landing;
	}
}

let name = "Scout";
let size = 0;
let strobe = false;
let missions = ["Recon", "Research", "Harvest"];
let scout = new UFO(name, size, strobe, missions);

name = "Fighter";
size = 0;
strobe = true;
missions = ["Hunt", "Bomb"];
let fighter = new UFO(name, size, strobe, missions);

name = "Raider";
size = 1;
strobe = false;
missions = ["Recon", "Research", "Harvest"];
let raider = new UFO(name, size, strobe, missions);

name = "Destroyer";
size = 1;
strobe = true;
missions = ["Hunt", "Bomb"];
let destroyer = new UFO(name, size, strobe, missions);

name = "Overseer";
size = 1;
strobe = false;
missions = ["Infiltrate", "Retaliate", "Command"];
let overseer = new UFO(name, size, strobe, missions);

name = "Abductor";
size = 2;
strobe = false;
missions = ["Research", "Abduction"];
let abductor = new UFO(name, size, strobe, missions);

name = "Harvester";
size = 2;
strobe = false;
missions = ["Harvest"];
let harvester = new UFO(name, size, strobe, missions);

name = "Transport";
size = 2;
strobe = true;
missions = ["Harvest", "Infiltrate"];
let transport = new UFO(name, size, strobe, missions);

name = "Terror Ship";
size = 2;
strobe = false;
missions = ["Research", "Terrorize Populace"];
let terror = new UFO(name, size, strobe, missions);

name = "Battleship";
size = 3;
strobe = false;
missions = ["Scout", "Hunt", "Bomb", "Infiltrate"];
let battleship = new UFO(name, size, strobe, missions);

name = "Assault Carrier";
size = 3;
strobe = false;
missions = ["Terrorize Populace", "Retaliate", "Research"];
let assault = new UFO(name, size, strobe, missions);

name = "Recon";
let height = 1;
let ufos = [scout, raider, destroyer, battleship];
let landing = false;
let recon = new Mission(name, height, ufos, landing);

name = "Hunt";
height = 2;
ufos = [fighter, destroyer, battleship];
landing = false;
let hunt = new Mission(name, height, ufos, landing);

name = "Research";
height = 0;
ufos = [scout, raider, abductor, terror, assault];
landing = true;
let research = new Mission(name, height, ufos, landing);

name = "Harvest";
height = 0;
ufos = [transport, harvester, raider, scout];
landing = true;
let harvest = new Mission(name, height, ufos, landing);

name = "Bomb";
height = 0;
ufos = [fighter, destroyer, battleship];
landing = false;
let bomb = new Mission(name, height, ufos, landing);

name = "Abduction";
height = 0;
ufos = [abductor];
landing = false;
let abduction = new Mission(name, height, ufos, landing);

name = "Terrorize Populace";
height = 0;
ufos = [terror, assault];
landing = false;
let terrorize = new Mission(name, height, ufos, landing);

name = "Infiltrate";
height = 1;
ufos = [battleship, transport, overseer];
landing = false;
let infiltrate = new Mission(name, height, ufos, landing);

name = "Retaliate";
height = 1;
ufos = [assault, overseer];
landing = false;
let retaliate = new Mission(name, height, ufos, landing);

name = "Command Overwatch";
height = 1;
ufos = [overseer];
landing = false;
let command = new Mission(name, height, ufos, landing);

let potentialUFOS = [scout, fighter, raider, destroyer, overseer, abductor, harvester, transport, terror, battleship, assault];
let potentialMissions = [recon, hunt, research, harvest, bomb, abduction, terrorize, infiltrate, retaliate, command];

document.getElementById("size").selectedIndex = 0;
document.getElementById("strobe").selectedIndex = 0;
document.getElementById("height").selectedIndex = 0;

function determineUFOs()
{
	var sizeSelect = document.getElementById("size");
	var strobeSelect = document.getElementById("strobe");
	var heightSelect = document.getElementById("height");
	
	if (sizeSelect.selectedIndex != 0 && strobeSelect.selectedIndex != 0 && heightSelect.selectedIndex != 0)
	{
		document.getElementById("ufoText").innerHTML = "";
		for (var i = 0; i < potentialMissions.length; ++i)
		{
			var mission = potentialMissions[i];
			
			if (mission.height == heightSelect.options[heightSelect.selectedIndex].value)
			{
				for (var j = 0; j < mission.ufos.length; ++j)
				{
					if (mission.ufos[j].size == sizeSelect.options[sizeSelect.selectedIndex].value && mission.ufos[j].strobe == strobeSelect.options[strobeSelect.selectedIndex].value)
					{
						document.getElementById("ufoText").innerHTML += "<span style=\"color: red\">" + mission.ufos[j].name + "</span>" + " performing a " + "<span style=\"color: yellow\">" + mission.name + "</span>" + " mission";
						if (mission.landing == true)
						{
							document.getElementById("ufoText").innerHTML += "<span style=\"color: green\">" + " (Landing soon)" + "</span>";
						}
						document.getElementById("ufoText").innerHTML += "<br/>";
					}
				}
			}
		}
		if (document.getElementById("ufoText").innerHTML == "")
		{
			document.getElementById("ufoText").innerHTML = "N/A";
		}
	}
	else
	{
		document.getElementById("ufoText").textContent = "N/A";
	}
}

//const myHeading = document.querySelector("h1");
//myHeading.textContent = ufos[0].missions[0];