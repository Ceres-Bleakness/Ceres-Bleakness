import *as THREE from "./three.module.js";
export default function Botella({x,y,z}){

    // 🪄🪄 SECCIÓN DE CÓDIGO 🪄🪄

    //NAVE 
    var nave = new THREE.CapsuleGeometry( 6, 4, 27, 30 ); 
    var material2 = new THREE.MeshBasicMaterial
    ({color:0xe6b121,wireframe:false});
    var mesh2 = new THREE.Mesh(nave, material2 ); 
    //scene.add( mesh2 );
    mesh2.position.set(-2,6,0); 
    mesh2.rotation.set(0,0,1.5708); 

    var trasera = new THREE.CylinderGeometry( 4, 5.47, 4, 32 ); 
    var material2 = new THREE.MeshBasicMaterial
    ({color:0xe6b121,wireframe:false});    
    var mesh3 = new THREE.Mesh( trasera, material2 ); 
    //scene.add( mesh3 );
    mesh3.position.set(-8,6,0); 
    mesh3.rotation.set(0,0,1.5708); 

    var trasera2 = new THREE.CapsuleGeometry( 3.5, 2, 27, 30 ); 
    var material3 = new THREE.MeshBasicMaterial
    ({color:0xd9b9ee,wireframe:false});
    var mesh4 = new THREE.Mesh(trasera2, material3 ); 
    //scene.add( mesh4 );
    mesh4.position.set(-9.5,6,0); 
    mesh4.rotation.set(0,0,1.5708);

    var trasera3 = new THREE.CylinderGeometry( 3.6, 3.6, 1.5, 32 ); 
    var material3 = new THREE.MeshBasicMaterial
    ({color:0xd9b9ee,wireframe:false});    
    var mesh5 = new THREE.Mesh( trasera3, material3 ); 
    //scene.add( mesh5 );
    mesh5.position.set(-11,6,0); 
    mesh5.rotation.set(0,0,1.5708); 

    var orilla = new THREE.CylinderGeometry( 3.61, 3.61, 0.2, 32 ); 
    var material4 = new THREE.MeshBasicMaterial
    ({color:0xcea5e0,wireframe:false});    
    var mesh6 = new THREE.Mesh( orilla, material4 ); 
    //scene.add( mesh6 );
    mesh6.position.set(-11.8,6,0); 
    mesh6.rotation.set(0,0,1.5708); 

    var orilla2 = mesh6.clone();
    //scene.add (orilla2);
    orilla2.position.set(-10.9,6,0);

    var trasera4 = new THREE.CylinderGeometry( 3.7, 3.7, 0.8, 32 ); 
    var material2 = new THREE.MeshBasicMaterial
    ({color:0xe6b121,wireframe:false});    
    var mesh7 = new THREE.Mesh( trasera4, material2 ); 
    //scene.add( mesh7 );
    mesh7.position.set(-10.4,6,0); 
    mesh7.rotation.set(0,0,1.5708);
    
    var orilla3 = new THREE.CylinderGeometry( 3.71, 3.71, 0.2, 32 ); 
    var material5 = new THREE.MeshBasicMaterial
    ({color:0xc3a73c,wireframe:false});    
    var mesh8 = new THREE.Mesh( orilla3, material5 ); 
    //scene.add( mesh8 );
    mesh8.position.set(-10.7,6,0); 
    mesh8.rotation.set(0,0,1.5708);

    var orilla4 = mesh8.clone();
    //scene.add (orilla4);
    orilla4.position.set(-10.12,6,0);

    //MOTORES
    var motor = new THREE.CapsuleGeometry( 1.5, 4, 50, 30 ); 
    var material6 = new THREE.MeshBasicMaterial
    ({color:0xbe9939,wireframe:false});
    var mesh9 = new THREE.Mesh(motor, material6 ); 
    //scene.add( mesh9 );
    mesh9.position.set(-5.5,8,5.5); 
    mesh9.rotation.set(0,0,1.5708);

    var propu = new THREE.CylinderGeometry( 1.2, 1.54, 1.2, 32 ); 
    var material7 = new THREE.MeshBasicMaterial
    ({color:0x598093,wireframe:false});    
    var mesh10 = new THREE.Mesh( propu, material7 ); 
    //scene.add( mesh10 );
    mesh10.position.set(-8.5,8,5.5); 
    mesh10.rotation.set(0,0,1.5708); 

    var propu1 = new THREE.CylinderGeometry( 1, 1.5, 1.2, 32 ); 
    var material8 = new THREE.MeshBasicMaterial
    ({color:0x104965,wireframe:false});    
    var mesh11 = new THREE.Mesh( propu1, material8 ); 
    //scene.add( mesh11 );
    mesh11.position.set(-8.6,8,5.5); 
    mesh11.rotation.set(0,0,1.5708);

    var propu2 = new THREE.CylinderGeometry( 1.3, 1.6, 1, 32 ); 
    var material9 = new THREE.MeshBasicMaterial
    ({color:0x2b6b8a,wireframe:false});    
    var mesh12 = new THREE.Mesh( propu2, material9 ); 
    //scene.add( mesh12 );
    mesh12.position.set(-8.1,8,5.5); 
    mesh12.rotation.set(0,0,1.5708);

    var motor = mesh9.clone();
    //scene.add (motor);
    motor.position.set(-5.5,8,-5.5);

    var propu = mesh10.clone();
    //scene.add (propu);
    propu.position.set(-8.5,8,-5.5);

    var propu1 = mesh11.clone();
    //scene.add (propu1);
    propu1.position.set(-8.6,8,-5.5);

    var propu2 = mesh12.clone();
    //scene.add (propu2);
    propu2.position.set(-8.1,8,-5.5);

    //CABINA
    var cabina = new THREE.CylinderGeometry( 6, 6, 5, 32 ); 
    var material2 = new THREE.MeshBasicMaterial
    ({color:0xe6b121,wireframe:false});    
    var mesh13 = new THREE.Mesh( cabina, material2 ); 
    //scene.add( mesh13 );
    mesh13.position.set(3,6,0); 
    mesh13.rotation.set(0,0,1.5708);

    var cabina2 = new THREE.CylinderGeometry( 5.8, 5.8, 1, 32 ); 
    var material10 = new THREE.MeshBasicMaterial
    ({color:0xa57ed3,wireframe:false});    
    var mesh14 = new THREE.Mesh( cabina2, material10 ); 
    //scene.add( mesh14 );
    mesh14.position.set(5.3,6,0); 
    mesh14.rotation.set(0,0,1.5708);

    var gancho = new THREE.BoxGeometry( 2, 2, 3 ); 
    var material2 = new THREE.MeshBasicMaterial
    ( {color: 0xe6b121} ); 
    var mesh15 = new THREE.Mesh( gancho, material2 ); 
    //scene.add( mesh15 );
    mesh15.position.set(4.5,12,0); 

    var gancho2 = new THREE.BoxGeometry( 1, 1, 2 ); 
    var material11 = new THREE.MeshBasicMaterial
    ( {color: 0x5b5b5b} ); 
    var mesh16 = new THREE.Mesh( gancho2, material11 ); 
    //scene.add( mesh16 );
    mesh16.position.set(6,12,0);

    var suelo = new THREE.RingGeometry( 1, 5, 32 ); 
    var material10 = new THREE.MeshBasicMaterial
    ( { color: 0xa57ed3, side: THREE.DoubleSide } );
    var mesh17 = new THREE.Mesh( suelo, material10 ); 
    //scene.add( mesh17 );
    mesh17.position.set(5.6,3,0); 
    mesh17.rotation.set(1.5708,0,1.5708);

    var cristal = new THREE.SphereGeometry( 6, 25, 13, 0, 3.11645991236108 ); 
    var material17 = new THREE.MeshBasicMaterial
    ( { color: 0x2982d3, side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.2
    } ); 
    var mesh18 = new THREE.Mesh( cristal, material17 ); 
    //scene.add( mesh18 );
    mesh18.position.set(5.5,6,0); 
    mesh18.rotation.set(0,1.5708,0);

    var asiento = new THREE.BoxGeometry( 1, 7.5, 4 ); 
    var material18 = new THREE.MeshBasicMaterial
    ( {color: 0x5b5b5b} ); 
    var mesh19 = new THREE.Mesh( asiento, material18 ); 
    //scene.add( mesh19 );
    mesh19.position.set(5.5,6.8,0);

    var asiento2 = new THREE.BoxGeometry( 1.5, 2, 4 ); 
    var material18 = new THREE.MeshBasicMaterial
    ( {color: 0x5b5b5b} ); 
    var mesh20 = new THREE.Mesh( asiento2, material18 ); 
    //scene.add( mesh20 );
    mesh20.position.set(6.7,4.8,0);

    var controles = new THREE.BoxGeometry( 2, 3, 2.5 ); 
    var material10 = new THREE.MeshBasicMaterial
    ( {color: 0xb894de} ); 
    var mesh21 = new THREE.Mesh( controles, material10 ); 
    //scene.add( mesh21 );
    mesh21.position.set(6.7,4.55,-3.2);

    var controles = mesh21.clone();
    //scene.add (controles);
    controles.position.set(6.7,4.55,3.2);

    var master = new THREE.TorusGeometry( 5.5, 0.3861, 5, 100, 0.809997275240526); 
    var material19 = new THREE.MeshBasicMaterial
    ( { color: 0x475779, side: THREE.DoubleSide } ); 
    var torus = new THREE.Mesh( master, material19 ); 
    //scene.add( torus );
    torus.position.set(4.77,3,0);

    var master2 = new THREE.BoxGeometry( 1, 1, 2 ); 
    var material20 = new THREE.MeshBasicMaterial
    ( {color: 0x475779} ); 
    var mesh22 = new THREE.Mesh( master2, material20 ); 
    //scene.add( mesh22 );
    mesh22.position.set(8.3,7,0);

    //LUCES
    
    var luces = new THREE.CylinderGeometry( 2, 2, 5, 32 ); 
    var material6 = new THREE.MeshBasicMaterial
    ({color:0xbe9939,wireframe:false});    
    var mesh23 = new THREE.Mesh( luces, material6 ); 
    //scene.add( mesh23 );
    mesh23.position.set(-7,2,0); 
    mesh23.rotation.set(0,0,1.5708);

    var luces2 = new THREE.CylinderGeometry( 1.7, 1.7, 5.2, 32 ); 
    var material21 = new THREE.MeshBasicMaterial
    ({color:0x9b9b9b,wireframe:false});    
    var mesh24 = new THREE.Mesh( luces2, material21 ); 
    //scene.add( mesh24 );
    mesh24.position.set(-7,2,0); 
    mesh24.rotation.set(0,0,1.5708);

    var roja = new THREE.SphereGeometry( 0.2, 32, 16 ); 
    var material = new THREE.MeshBasicMaterial
    ( { color: 0xcd4e4e } ); 
    var mesh25 = new THREE.Mesh( roja, material ); 
    //scene.add( mesh25 );
    mesh25.position.set(10.5,4,0); 

    var roja = mesh25.clone();
    //scene.add (roja);
    roja.position.set(10.2,5,0);

    var luces3 = new THREE.CylinderGeometry( 1.3, 1.3, 1, 32 ); 
    var material6 = new THREE.MeshBasicMaterial
    ({color:0xbe9939,wireframe:false});    
    var mesh26 = new THREE.Mesh( luces3, material6 ); 
    //scene.add( mesh26 );
    mesh26.position.set(3,2,5); 
    mesh26.rotation.set(0,0,1.5708);

    var luces3 = mesh26.clone();
    //scene.add (luces3);
    luces3.position.set(3,2,-5);

    var luces4 = new THREE.CylinderGeometry( 1, 1, 1.1, 32 ); 
    var material21 = new THREE.MeshBasicMaterial
    ({color:0x9b9b9b,wireframe:false});    
    var mesh27 = new THREE.Mesh( luces4, material21 ); 
    //scene.add( mesh27 );
    mesh27.position.set(3.1,2,5); 
    mesh27.rotation.set(0,0,1.5708);

    var luces4 = mesh27.clone();
    //scene.add (luces4);
    luces4.position.set(3.1,2,-5);

    var luces5 = new THREE.SphereGeometry( 2.2, 32, 16 ); 
    var material22 = new THREE.MeshBasicMaterial
    ( { color: 0x5c49e4 } ); 
    var mesh28 = new THREE.Mesh( luces5, material22 ); 
    //scene.add( mesh28 );
    mesh28.position.set(-4,2.5,3.5);

    var luces5 = mesh28.clone();
    //scene.add (luces5);
    luces5.position.set(-4,2.5,-3.5);

    //PATAS Y FUENTES

    var pata1 = new THREE.CylinderGeometry( 0.8, 0.8, 1, 32 ); 
    var material23 = new THREE.MeshBasicMaterial
    ( {color: 0x777771} ); 
    var mesh29 = new THREE.Mesh( pata1, material23 ); 
    //scene.add( mesh29 );
    mesh29.position.set(0,2.8,4.8);
    mesh29.rotation.set(-0.872665,0,0);
    
    var pata1_1 = new THREE.CylinderGeometry( 0.8, 0.8, 2, 32 ); 
    var material29 = new THREE.MeshBasicMaterial
    ( {color: 0x777771} ); 
    var mesh30 = new THREE.Mesh( pata1_1, material29 ); 
    //scene.add( mesh30 );
    mesh30.position.set(0,1.5,5.2);

    var pata1_2 = new THREE.SphereGeometry
    ( 1.3, 32, 16,0, 6.283185307179586, 1.41999987942259, 2.1865484868985); 
    var material29 = new THREE.MeshBasicMaterial
    ( { color: 0x777771,side: THREE.DoubleSide } ); 
    var mesh31 = new THREE.Mesh( pata1_2, material29 ); 
    //scene.add( mesh31 );
    mesh31.position.set(0,0,5.2);
    mesh31.rotation.set(0,0,3.14159);

    var pata2 = new THREE.CylinderGeometry( 0.8, 0.8, 1, 32 ); 
    var material29 = new THREE.MeshBasicMaterial
    ( {color: 0x777771} ); 
    var mesh32 = new THREE.Mesh( pata2, material29 ); 
    //scene.add( mesh32 );
    mesh32.position.set(0,2.8,-4.8);
    mesh32.rotation.set(0.872665,0,0);

    var pata2_1 = mesh30.clone();
    //scene.add (pata2_1);
    pata2_1.position.set(0,1.5,-5.2);

    var pata2_2 = mesh31.clone();
    //scene.add (pata2_2);
    pata2_2.position.set(0,0,-5.2);

    //ALAS

    var ala = new THREE.CylinderGeometry
    ( 4, 1, 10, 15, 3, 3, 0, 1.8786724068467 ); 
    var material30 = new THREE.MeshBasicMaterial
    ( {color: 0xb89a4b, side: THREE.DoubleSide} ); 
    var mesh33 = new THREE.Mesh( ala, material30 ); 
    //scene.add( mesh33 );
    mesh33.position.set(-1,3,10);
    mesh33.rotation.set(-1.74533,-1.0472,0);

    var ala2 = new THREE.CylinderGeometry
    ( 1, 4, 10, 15, 3, 3, 0, 1.8786724068467 ); 
    var material30 = new THREE.MeshBasicMaterial
    ( {color: 0xb89a4b, side: THREE.DoubleSide} ); 
    var mesh34 = new THREE.Mesh( ala2, material30 ); 
    //scene.add( mesh34 );
    mesh34.position.set(-1,3,-10);
    mesh34.rotation.set(-1.39626,-1.0472,0);

    var ala3 = new THREE.CylinderGeometry
    ( 1, 4, 10, 15, 3, 3, 0, 1.8786724068467 ); 
    var material30 = new THREE.MeshBasicMaterial
    ( {color: 0xb89a4b, side: THREE.DoubleSide} ); 
    var mesh35 = new THREE.Mesh( ala3, material30 ); 
    //scene.add( mesh35 );
    mesh35.position.set(-10,12,0);
    mesh35.rotation.set(-0.523599,0.523599,0.872665);

 var Nave = new THREE.Group();
    Nave.add(mesh2,mesh3,mesh4,mesh5,mesh6,mesh7,mesh8,mesh9,mesh10,
    mesh11,mesh12,mesh13,mesh14,mesh15,mesh16,mesh17,mesh18,mesh19,mesh20,
    mesh21,mesh22,mesh23,mesh24,mesh25,mesh26,mesh27,mesh28,mesh29,mesh30,
    mesh31,mesh32,mesh33,mesh34,mesh35,torus,propu,propu1,propu2,motor);
    Nave.position.set(x,y,z);
    return Nave;
}