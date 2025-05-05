import *as THREE from "./three.module.js";
import{RoundedBoxGeometry} from"./RoundedBoxGeometry.js";
export default function Xwing({x,y,z}){

    // 🪄🪄 SECCIÓN DE CÓDIGO 🪄🪄

    //Cabina

    var Cabina = new RoundedBoxGeometry( 4, 4, 8, 30 ,1 ); 
    var Blanco= new THREE.MeshLambertMaterial({color: 0xffffff, });
    var mesh1 = new THREE.Mesh (Cabina, Blanco);
   //scene.add(mesh1);

    var Cabina01 = new THREE.BoxGeometry( 3, 0.2, 7, 30 ); 
    var Negro= new THREE.MeshLambertMaterial({color: 0x47474E, });
    var mesh2 = new THREE.Mesh (Cabina01, Negro);
    //scene.add(mesh2);
    mesh2.position.set(0,2,0);

    var CNariz = new THREE.CylinderGeometry( 0.5, 2.2, 10, 18 ); 
    var mesh3 = new THREE.Mesh (CNariz, Blanco);
    //scene.add(mesh3);
    mesh3.position.set(0,0,8.5);
    mesh3.rotation.set(1.57,0,0);

    var CPunta = new THREE.CapsuleGeometry(0.8,1,2,5); 
    var mesh4 = new THREE.Mesh (CPunta, Blanco);
   // scene.add(mesh4);
    mesh4.position.set(0,0,13);
    mesh4.rotation.set(1.57,0,0);

    var CabinaCristal = new RoundedBoxGeometry(3, 2, 4, 12 ,1); 
    var Azul= new THREE.MeshLambertMaterial({color: 0x3F3AC0, });
    var mesh5 = new THREE.Mesh (CabinaCristal, Azul);
    //scene.add(mesh5);
    mesh5.position.set(0,1.5,5);
    mesh5.rotation.set(0.3,0,0);


       //<-<-<-

       // Propulsores
       //Propulsor 1
       var P1 = new THREE.CylinderGeometry( 1.3, 1.3, 6, 30 ,1 ); 
       var mesh7 = new THREE.Mesh (P1, Blanco);
        //scene.add(mesh7);
        mesh7.position.set(2,1.5,0);
        mesh7.rotation.set(1.57,0,0);

        var Pro2 = mesh7.clone();
       //scene.add (Pro2);
       Pro2.position.set(-2,1.5,0);  

       var Pro3 = mesh7.clone();
       //scene.add (Pro3);
       Pro3.position.set(-2,-1.5,0);  

       var Pro4 = mesh7.clone();
       //scene.add (Pro4);
       Pro4.position.set(2,-1.5,0);

        var P2 = new THREE.CylinderGeometry( 0.8, 0.8, 6, 30 ,1 ); 
       var mesh6 = new THREE.Mesh (P2, Blanco);
        //scene.add(mesh6);
        mesh6.position.set(1.5,1.5,-4);
        mesh6.rotation.set(1.57,0,0);
        //<-<-<-

        var Propulsor2 = mesh6.clone();
      // scene.add (Propulsor2);
       Propulsor2.position.set(-1.5,1.5,-4);  

       var Propulso3 = mesh6.clone();
       //scene.add (Propulso3);
       Propulso3.position.set(-1.5,-1.5,-4);  

       var Propulso4 = mesh6.clone();
       //scene.add (Propulso4);
       Propulso4.position.set(1.5,-1.5,-4);  


       var P3 = new THREE.CylinderGeometry( 1, 1, 2, 30 ,1 ); 
       var mesh8 = new THREE.Mesh (P3, Blanco);
       // scene.add(mesh8);
        mesh8.position.set(1.5,1.5,-6.5);
        mesh8.rotation.set(1.57,0,0);
        //<-<-<-

        var PuntaPro1 = mesh8.clone();
       //scene.add (PuntaPro1);
       PuntaPro1.position.set(-1.5,1.5,-6.5);  

       var PuntaPro2 = mesh8.clone();
       //scene.add (PuntaPro2);
       PuntaPro2.position.set(-1.5,-1.5,-6.5);  

       var PuntaPro3 = mesh8.clone();
       //scene.add (PuntaPro3);
       PuntaPro3.position.set(1.5,-1.5,-6.5);  

       //<-<-<-<-

       //Alas
//Cajitas
var C1 = new THREE.BoxGeometry( 2, 1, 5.5, 30 ,1 ); 
       var mesh9 = new THREE.Mesh (C1, Blanco);
       // scene.add(mesh9);
        mesh9.position.set(4,2,0);
        mesh9.rotation.set(0,0,0.3);

        var Cajita2 = mesh9.clone();
       //scene.add (Cajita2);
       Cajita2.position.set(4,-2,0);
       Cajita2.rotation.set(0,0,-0.3);    

       var Cajita3 = mesh9.clone();
      // scene.add (Cajita3);
       Cajita3.position.set(-4,2,0);
       Cajita3.rotation.set(0,0,-0.3);   

       var Cajita4 = mesh9.clone();
     //  scene.add (Cajita4);
       Cajita4.position.set(-4,-2,0);
       Cajita4.rotation.set(0,0,0.3); 

       //Cajas
       var Ala1 = new THREE.BoxGeometry( 15, 0.5, 5, 30 ,1 ); 
       var mesh10 = new THREE.Mesh (Ala1, Blanco);
      //  scene.add(mesh10);
        mesh10.position.set(5,2.3,0);
        mesh10.rotation.set(0,0,0.3);

        var Ala2 = mesh10.clone();
      // scene.add (Ala2);
       Ala2.position.set(5,-2.3,0);
       Ala2.rotation.set(0,0,-0.3);    

       var Ala3 = mesh10.clone();
      // scene.add (Ala3);
       Ala3.position.set(-5,2.3,0);
       Ala3.rotation.set(0,0,-0.3);   

       var Ala4 = mesh10.clone();
      // scene.add (Ala4);
       Ala4.position.set(-5,-2.3,0);
       Ala4.rotation.set(0,0,0.3); 

       //Torrentas
       var T1 = new THREE.CylinderGeometry(0.6,0.6,6,18 ); 
       var mesh11 = new THREE.Mesh (T1, Blanco);
        //scene.add(mesh11);
        mesh11.position.set(12,4.5,0);
        mesh11.rotation.set(1.57,0,0);

        var T2 = mesh11.clone();
       //scene.add (T2);
       T2.position.set(-12,4.5,0);
          
       var T3 = mesh11.clone();
      // scene.add (T3);
       T3.position.set(-12,-4.5,0);
       
       var T4= mesh11.clone();
       //scene.add (T4);
       T4.position.set(12,-4.5,0);
   
       //Cañones

       var Cañon1 = new THREE.CylinderGeometry(0.3,0.3,6,18 ); 
       var mesh12 = new THREE.Mesh (Cañon1, Blanco);
        //scene.add(mesh12);
        mesh12.position.set(12,4.5,6);
        mesh12.rotation.set(1.57,0,0);

        var Cañon2 = mesh12.clone();
       //scene.add (Cañon2);
       Cañon2.position.set(-12,4.5,6);
          
       var Cañon3 = mesh12.clone();
      // scene.add (Cañon3);
       Cañon3.position.set(-12,-4.5,6);
       
       var Cañon4= mesh12.clone();
      // scene.add (Cañon4);
       Cañon4.position.set(12,-4.5,6);

       

    var Xwing = new THREE.Group();
    Xwing.add(T2,T3,T4,Pro2,Pro3,Pro4,Propulso4,Propulso3,Propulsor2,PuntaPro1,PuntaPro2,PuntaPro3,Ala4,Ala3,Ala2,Cajita2,Cajita3,Cajita4,mesh1,mesh2,mesh3,mesh4,mesh5,mesh6,mesh7,mesh8,mesh9,mesh10,mesh11,mesh12,Cañon2,Cañon3,Cañon4);
    Xwing.position.set(x,y,z);
    return Xwing;
}