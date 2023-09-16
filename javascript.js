//Toggling Images
var toggleVillage = document.getElementById('toggleVillage');
var toggleOmegas = document.getElementById('toggleOmegas');
var toggleElebits = document.getElementById('toggleElebits');
var togglePinkElebits = document.getElementById('togglePinkElebits');
var toggleBatteries = document.getElementById('toggleBatteries');
var togglePowerUps = document.getElementById('togglePowerUps');
var toggleNPCs = document.getElementById('toggleNPCs');
var toggleTrees = document.getElementById('toggleTrees');
var toggleRocks = document.getElementById('toggleRocks');
var toggleLilypads = document.getElementById('toggleLilypads');
var toggleWood = document.getElementById('toggleWood');
var toggleArrows = document.getElementById('toggleArrows');
var toggleStatues = document.getElementById('toggleStatues');
var toggleSigns = document.getElementById('toggleSigns');

function togVillage(){
	var village = document.getElementById('village');
	if (toggleVillage.checked){
		village.src = "images/world1_Village.png"
	}
	else {
		village.src = ""
	}
}
function togOmegas(){
	var omegas = document.getElementById('omegas');
	if (toggleOmegas.checked){
		omegas.src = "images/world1_Omegas.png"
	}
	else {
		omegas.src = ""
	}
}
function togElebits(){
	var elebits = document.getElementById('elebits');
	if (toggleElebits.checked){
		elebits.src = "images/world1_Elebits.png"
	}
	else {
		elebits.src = ""
	}
}
function togPinkElebits(){
	var pinkElebits = document.getElementById('pinkElebits');
	if (togglePinkElebits.checked){
		pinkElebits.src = "images/world1_PinkElebits.png"
	}
	else {
		pinkElebits.src = ""
	}
}
function togBatteries(){
	var batteries = document.getElementById('batteries');
	if (toggleBatteries.checked){
		batteries.src = "images/world1_Batteries.png"
	}
	else {
		batteries.src = ""
	}
}
function togPowerUps(){
	var powerUps = document.getElementById('powerUps');
	if (togglePowerUps.checked){
		powerUps.src = "images/world1_PowerUps.png"
	}
	else {
		powerUps.src = ""
	}
}
function togNPCs(){
	var npcs = document.getElementById('npcs');
	if (toggleNPCs.checked){
		npcs.src = "images/world1_NPCs.png"
	}
	else {
		npcs.src = ""
	}
}
function togTrees(){
	var trees = document.getElementById('trees');
	if (toggleTrees.checked){
		trees.src = "images/world1_Trees.png"
	}
	else {
		trees.src = ""
	}
}
function togRocks(){
	var rocks = document.getElementById('rocks');
	if (toggleRocks.checked){
		rocks.src = "images/world1_Rocks.png"
	}
	else {
		rocks.src = ""
	}
}
function togLilypads(){
	var lilypads = document.getElementById('lilypads');
	if (toggleLilypads.checked){
		lilypads.src = "images/world1_Lilypads.png"
	}
	else {
		lilypads.src = ""
	}
}
function togWood(){
	var wood = document.getElementById('wood');
	if (toggleWood.checked){
		wood.src = "images/world1_Wood.png"
	}
	else {
		wood.src = ""
	}
}
function togArrows(){
	var arrows = document.getElementById('arrows');
	if (toggleArrows.checked){
		arrows.src = "images/world1_Arrows.png"
	}
	else {
		arrows.src = ""
	}
}
function togStatues(){
	var statues = document.getElementById('statues');
	if (toggleStatues.checked){
		statues.src = "images/world1_Statues.png"
	}
	else {
		statues.src = ""
	}
}
function togSigns(){
	var signs = document.getElementById('signs');
	if (toggleSigns.checked){
		signs.src = "images/world1_Signs.png"
	}
	else {
		signs.src = ""
	}
}


//Zoom Image Code
//Not my code found online but lost source
//If someone know the source plz link for proper credit
var scale = 1,
        panning = false,
        pointX = 0,
        pointY = 0,
        start = { x: 0, y: 0 },
        zoom = document.getElementById("zoom");

      function setTransform() {
        zoom.style.transform = "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
      }

      zoom.onmousedown = function (e) {
        e.preventDefault();
        start = { x: e.clientX - pointX, y: e.clientY - pointY };
        panning = true;
      }

      zoom.onmouseup = function (e) {
        panning = false;
      }

      zoom.onmousemove = function (e) {
        e.preventDefault();
        if (!panning) {
          return;
        }
        pointX = (e.clientX - start.x);
        pointY = (e.clientY - start.y);
        setTransform();
      }

      zoom.onwheel = function (e) {
        e.preventDefault();
        var xs = (e.clientX - pointX) / scale,
          ys = (e.clientY - pointY) / scale,
          delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);
        (delta > 0) ? (scale *= 1.2) : (scale /= 1.2);
        pointX = e.clientX - xs * scale;
        pointY = e.clientY - ys * scale;

        setTransform();
      }

//setup
function setup() {
	toggleVillage.addEventListener('click',togVillage);
	toggleOmegas.addEventListener('click',togOmegas);
	toggleElebits.addEventListener('click',togElebits);
	togglePinkElebits.addEventListener('click',togPinkElebits);
	toggleBatteries.addEventListener('click',togBatteries);
	togglePowerUps.addEventListener('click',togPowerUps);
	toggleNPCs.addEventListener('click',togNPCs);
	toggleTrees.addEventListener('click',togTrees);
	toggleRocks.addEventListener('click',togRocks);
	toggleLilypads.addEventListener('click',togLilypads);
	toggleWood.addEventListener('click',togWood);
	toggleArrows.addEventListener('click',togArrows);
	toggleStatues.addEventListener('click',togStatues);
	toggleSigns.addEventListener('click',togSigns);
}
if (window.addEventListener) {
	window.addEventListener("load", setup, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", setup);
}