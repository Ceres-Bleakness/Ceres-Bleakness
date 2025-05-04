import*as THREE from "./three.module.js";
import{RoundedBoxGeometry} from"./RoundedBoxGeometry.js";

export default function E02({x,y,z}){

    // 🪄🪄 SECCIÓN DE CÓDIGO 🪄🪄


    var asteroide1 = new THREE.TorusKnotGeometry( 4, 3.4254, 13, 54, 7, 11 ); 
var material = new THREE.MeshBasicMaterial
( { color: 0x9e9797, wireframe:true } ); 
var torusKnot1 = new THREE.Mesh( asteroide1, material ); 
//scene.add( torusKnot1 );

var asteroide2 = new THREE.TorusKnotGeometry( 3.876, 3.4254, 13, 54, 7, 11 ); 
var material = new THREE.MeshBasicMaterial
( { color: 0x7c7676, wireframe:true } ); 
var torusKnot2 = new THREE.Mesh( asteroide2, material ); 
//scene.add( torusKnot2 );

//Trineo agrupado
var asteroide3=new THREE.Group();
asteroide3.add (torusKnot1,torusKnot2);
asteroide3.position.set(x,y,z);
    return asteroide3; 
   
}