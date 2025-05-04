import*as THREE from "./three.module.js";
import{RoundedBoxGeometry} from"./RoundedBoxGeometry.js";

export default function E02({x,y,z}){

    // 🪄🪄 SECCIÓN DE CÓDIGO 🪄🪄


    var asteroide = new THREE.SphereGeometry
    ( 10.5, 7, 12, 2.50070775225748, 6.283185307179586, 0.414690230273853, 6.20150389818625); 
    var material = new THREE.MeshBasicMaterial
    ( { color: 0xa0a5a7, wireframe:true, side: THREE.DoubleSide } ); 
    var sphere1 = new THREE.Mesh( asteroide, material ); 
    //scene.add( sphere1 );
    
    var asteroide1 = new THREE.SphereGeometry
    ( 10.034, 7, 12, 2.50070775225748, 6.283185307179586, 0.414690230273853, 6.20150389818625); 
    var material = new THREE.MeshBasicMaterial
    ( { color: 0xc5c5c5, wireframe:false, side: THREE.DoubleSide } ); 
    var sphere2 = new THREE.Mesh( asteroide1, material ); 
    //scene.add( sphere1 );

//Trineo agrupado
var asteroide1=new THREE.Group();
asteroide1.add (sphere1,sphere2);
asteroide1.position.set(x,y,z);
    return asteroide1; 
   
}