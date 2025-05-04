    import *as THREE from "./three.module.js";
    export default function Nave({x,y,z}){

    // 🪄🪄 SECCIÓN DE CÓDIGO 🪄🪄

    var platillo = new THREE. CylinderGeometry(2,10,4);
    var gris = new THREE.MeshLambertMaterial({color:0x949299});
    var mesh1 =  new THREE.Mesh(platillo,gris);
   

    var esfera = new THREE. SphereGeometry(4,10,10,3);
    var Negro = new THREE.MeshLambertMaterial({color:0x000000});
    var mesh2 =  new THREE.Mesh(esfera,Negro);
   
    mesh2.position.set(0,1,0)

    var esfera2 = new THREE. SphereGeometry(3,10,10,3);
    var Rojo = new THREE.MeshLambertMaterial({color:0xE4080A});
    var mesh3 =  new THREE.Mesh(esfera2,Rojo);
  
    mesh3.position.set(0,1,3)

    var Cilindro = new THREE. CylinderGeometry(1,1.5,10);
    var mesh4 =  new THREE.Mesh(Cilindro,gris);
    
    mesh4.position.set(0,1.5,4)
    mesh4.rotation.set(1.37,0,0)

    mesh1.rotation.y += 0.01;


    var Nave = new THREE.Group();
    Nave.add(mesh1,mesh2,mesh3,mesh4);
    tie.rotation.set(x,1.55,z);
    Nave.position.set(x,y,z);
    return Nave;
}