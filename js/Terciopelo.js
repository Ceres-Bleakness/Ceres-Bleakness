import *as THREE from "./three.module.js";
export default function Terciopelo({x,y,z}){

// 🪄🪄 SECCIÓN DE CÓDIGO 🪄🪄

//FLOR
var flor= new THREE.TorusKnotGeometry(6.313,5.0094,104,9,10,9);
    var material= new THREE.MeshLambertMaterial({color:0x8f3792,wireframe:true});
    var mesh= new THREE.Mesh(flor,material);
    //scene.add(mesh); 
    mesh.position.set(0,0,0);

var flor= new THREE.TorusKnotGeometry(6.213,5.0094,104,9,10,9);
    var material= new THREE.MeshLambertMaterial({color:0xdd43df,wireframe:false});
    var mesh1= new THREE.Mesh(flor,material);
    //scene.add(mesh); 
    mesh.position.set(0,0,0);

var material = new THREE.MeshToonMaterial( {
	color: 0xe89e31,
	linewidth: 1,
	linecap: 'round', 
	linejoin:  'round'
} );



//scene.add (mesh07);

var terciopelo = new THREE.Group();
terciopelo.add(mesh,mesh1);
terciopelo.position.set(x,y,z);
return terciopelo;
}