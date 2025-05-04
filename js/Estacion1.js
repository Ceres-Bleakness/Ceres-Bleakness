import *as THREE from "./three.module.js";
import{RoundedBoxGeometry} from"./RoundedBoxGeometry.js";
export default function EstacionES1({x,y,z}){

    // 🪄🪄 SECCIÓN DE CÓDIGO 🪄🪄

    var AnilloExterior = new THREE.TorusGeometry(9,0.7,18,18); 
    var Blanco= new THREE.MeshLambertMaterial({color: 0xffffff, });
     var mesh1 = new THREE.Mesh (AnilloExterior, Blanco);
    // scene.add(mesh1);

     var AnilloInterior = new THREE.TorusGeometry(8,0.5,18,18); 
    var Gris= new THREE.MeshLambertMaterial({color: 0xA6A0A0, });
     var mesh2 = new THREE.Mesh (AnilloInterior, Gris);
     //scene.add(mesh2);

     var SoporteAnillo = new THREE.BoxGeometry(1,18,1,4); 
    var Gris= new THREE.MeshLambertMaterial({color: 0xA6A0A0, });
     var mesh3 = new THREE.Mesh (SoporteAnillo, Gris);
    // scene.add(mesh3);

     var AnilloExteriorSup = new THREE.Group();
     AnilloExteriorSup.add(mesh3,mesh1);
      //  scene.add(AnilloExteriorSup);

        var AnilloExtInf = AnilloExteriorSup.clone();
       // scene.add (AnilloExtInf);
        AnilloExtInf.scale.set(.5,.5,.5);
        AnilloExtInf.position.set(0,0,4);
       
     var Soporte2 = mesh3.clone();
        //scene.add (Soporte2);
        Soporte2.rotation.set(0,0,1.57);

    
        var Capsula1 = new THREE.CylinderGeometry(3,3,5); 
     var mesh4 = new THREE.Mesh (Capsula1, Blanco);
    // scene.add(mesh4);
     mesh4.rotation.set(1.57,0,0);

     var Capsula2 = new THREE.CylinderGeometry(2.5,2.5,10); 
     var mesh5 = new THREE.Mesh (Capsula2, Blanco);
    // scene.add(mesh5);
     mesh5.rotation.set(1.57,0,0);

     var Capsula3 = new THREE.CylinderGeometry(1.8,1.8,25); 
     var mesh6 = new THREE.Mesh (Capsula3, Blanco);
     //scene.add(mesh6);
     mesh6.rotation.set(1.57,0,0);
     mesh6.position.set(0,0,-4);

     var Capsula4 = new THREE.CylinderGeometry(1.2,1.2,15); 
     var mesh8 = new THREE.Mesh (Capsula4, Blanco);
    // scene.add(mesh8);
     mesh8.rotation.set(1.57,0,0);
     mesh8.position.set(0,0,-20);

     var Antena1 = new THREE.CylinderGeometry(.2,.2,15); 
     var mesh9 = new THREE.Mesh (Antena1, Blanco);
     //scene.add(mesh9);
     mesh9.rotation.set(1.57,0,0);
     mesh9.position.set(0,0,-30);

     var AntenaCuadro1 = new THREE.BoxGeometry(1,1,1); 
     var mesh10 = new THREE.Mesh (AntenaCuadro1, Blanco);
     //scene.add(mesh10);
     mesh10.position.set(0,0,-32);

     //Antena capsula

     var AntenaCapsula1 = new THREE.CapsuleGeometry(.6,.6,10,20); 
     var mesh13 = new THREE.Mesh (AntenaCapsula1, Blanco);
    // scene.add(mesh13);
     mesh13.position.set(0,2,-26);

     var AntenaCapsula2 = new THREE.CylinderGeometry(.1,.1,8,10); 
     var mesh14 = new THREE.Mesh (AntenaCapsula2, Blanco);
     //scene.add(mesh14);
     mesh14.position.set(0,2,-26);

     //Antena delantera piramide
     var AntenaPiramide1 = new THREE.ConeGeometry(1,1,10); 
     var mesh15 = new THREE.Mesh (AntenaPiramide1, Blanco);
     //scene.add(mesh15);
     mesh15.position.set(0,2,6);

     var AntenaPiramide2 = new THREE.CylinderGeometry(.1,.1,4,10); 
     var mesh16 = new THREE.Mesh (AntenaPiramide2, Blanco);
    // scene.add(mesh16);
     mesh16.position.set(0,2,6);

     //Cupula azul

     var Cupula = new THREE.SphereGeometry(1.67,32,16); 
     var Azul= new THREE.MeshLambertMaterial({color:0x4BA2A5});
     var mesh7 = new THREE.Mesh (Cupula, Azul);
    // scene.add(mesh7);
     mesh7.position.set(0,0,8);

     //Paneles solares

     var PanelSolar1 = new THREE.BoxGeometry(10,3,.2); 
     var AzulPanel= new THREE.MeshLambertMaterial({color: 0x060270 });
     var mesh11 = new THREE.Mesh (PanelSolar1, AzulPanel);
    // scene.add(mesh11);
     mesh11.position.set(8,0,-20);
     mesh11.rotation.set(0.7,0,0);

     var SoportePanelSolar = new THREE.BoxGeometry(14,.5,.2); 
     var mesh12 = new THREE.Mesh (SoportePanelSolar,Gris);

     mesh12.position.set(6,0,-19.8);
     mesh12.rotation.set(0.7,0,0);

     var PanelSolar = new THREE.Group();
     PanelSolar.add(mesh11,mesh12);
        

        var PanelSolar1 = PanelSolar.clone();
        
        PanelSolar1.position.set(0,0,-5);

        var PanelSolar2 = mesh11.clone();
       // scene.add (PanelSolar2);
        PanelSolar2.position.set(-8,0,-19.8);
        PanelSolar2.rotation.set(0.7,0,0);

        var Soporte2 = mesh12.clone();
        
        Soporte2.position.set(-6,0,-19.8);
        Soporte2.rotation.set(0.7,0,0);

        var PanelSolar3 = mesh11.clone();
       
        PanelSolar3.position.set(-8,0,-24.8);
        PanelSolar3.rotation.set(0.7,0,0);

        var Soporte3 = mesh12.clone();
       
        Soporte3.position.set(-6,0,-24.8);
        Soporte3.rotation.set(0.7,0,0);

    var EstacionES1 = new THREE.Group();
    EstacionES1.add(mesh1,mesh2,mesh3,mesh4,mesh5,mesh6,mesh7,mesh8,mesh9,mesh10,mesh11,mesh12,mesh13,mesh14,mesh15,mesh16,PanelSolar,PanelSolar1,PanelSolar2,PanelSolar3,Soporte2,Soporte3);
    EstacionES1.position.set(x,y,z);
    return EstacionES1;
}