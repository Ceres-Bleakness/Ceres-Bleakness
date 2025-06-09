import*as THREE from "./three.module.js";
import{RoundedBoxGeometry} from"./RoundedBoxGeometry.js";

export default function E02({x,y,z}){

    // 🪄🪄 SECCIÓN DE CÓDIGO 🪄🪄


    var asteroide1 = new THREE.TorusKnotGeometry( 4.4, 7.1973, 13, 8, 2, 3 ); 
var material = new THREE.MeshBasicMaterial
( { color: 0x120f0f, wireframe:true } ); 
var torusKnot1 = new THREE.Mesh( asteroide1, material ); 
//scene.add( torusKnot1 );

var asteroide2 = new THREE.TorusKnotGeometry( 3.876, 7.1973, 13, 8, 2, 3 ); 
var material = new THREE.MeshBasicMaterial
( { color: 0x636363, wireframe:false } ); 
var torusKnot2 = new THREE.Mesh( asteroide2, material ); 
//scene.add( torusKnot2 );

//Trineo agrupado
var asteroide2=new THREE.Group();
asteroide2.add (torusKnot1,torusKnot2);
asteroide2.position.set(x,y,z);
    return asteroide2; 
   
}