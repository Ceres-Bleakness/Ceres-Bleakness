import*as THREE from "./three.module.js";
export default function tf ({x,y,z}){

    //tie defender
    //CUERPO    
    var geometry01= new THREE.SphereGeometry( 4.5, 20, 16 ); 
    var material01= new THREE.MeshLambertMaterial({color: 0xcac4c3});
    var mesh01 = new THREE.Mesh (geometry01, material01);
 //scene.add(mesh01); 
 mesh01.position.set(-1.25,0,0);

//cilindro atras
  var geometry02= new THREE.CylinderGeometry(1.5,1.5,1.25,20,10);
var material02= new THREE.MeshLambertMaterial({color: 0x005600});
var mesh02 = new THREE.Mesh (geometry02, material02);
//scene.add(mesh02); 
mesh02.rotation.set(0,0,1.55);
mesh02.position.set(-6,0,0);
//cilindro atras
var geometry03= new THREE.CylinderGeometry(1,1.5,1.15,20,10);
var material03= new THREE.MeshLambertMaterial({color: 0x000000});
var mesh03 = new THREE.Mesh (geometry03, material03);
//scene.add(mesh03); 
mesh03.rotation.set(0,0,1.55);
mesh03.position.set(-7.21,0,0);
//lucecitas traseras
var geometry04= new THREE.CylinderGeometry(.12,.12,1.25,20,10);
var material04= new THREE.MeshLambertMaterial({color: 0xf62604});
var mesh04 = new THREE.Mesh (geometry04, material04);
//scene.add(mesh04); 
mesh04.rotation.set(0,0,1.55);
mesh04.position.set(-7.25,0,-1.15);

var geometry05= new THREE.CylinderGeometry(.12,.12,1.25,20,10);
var material05= new THREE.MeshLambertMaterial({color: 0xf62604});
var mesh05 = new THREE.Mesh (geometry05, material05);
//scene.add(mesh05); 
mesh05.rotation.set(0,0,1.55);
mesh05.position.set(-7.25,0,1.15);

//ventana

var geometry06= new THREE.CylinderGeometry(2,1,1.25,30,10);
var material06= new THREE.MeshLambertMaterial({color: 0x000000});
var mesh06 = new THREE.Mesh (geometry06, material06);
//scene.add(mesh06); 
mesh06.rotation.set(0,0,1.55);
mesh06.position.set(3.25,0,0);

//ala parriba
//cilindro
var geometry07= new THREE.CylinderGeometry(.3,.3,5,30,10);
var material07= new THREE.MeshLambertMaterial({color: 0x000000});
var mesh07 = new THREE.Mesh (geometry07, material07);
//scene.add(mesh07); 
mesh07.rotation.set(0,0,0);
mesh07.position.set(-6.2,4,0);


//rectangulos
var geometry08 = new THREE.BoxGeometry(.5, 1.5, 1.5 ); 
var material08 = new THREE.MeshLambertMaterial( {color: 0x000550} ); 
var mesh08 = new THREE.Mesh( geometry08, material08 ); 
//scene.add( mesh08);
mesh08.rotation.set(0,0,0);
mesh08.position.set(-6.2,1.5,0);

var geometry09 = new THREE.BoxGeometry(.85, 1, .75); 
var material09 = new THREE.MeshLambertMaterial( {color: 0x501780} ); 
var mesh09 = new THREE.Mesh( geometry09, material09 ); 
//scene.add( mesh09);
mesh09.rotation.set(0,0,0);
mesh09.position.set(-6.2,1.5,0);

var geometry10 = new THREE.BoxGeometry(1., .75, 1); 
var material10 = new THREE.MeshLambertMaterial( {color: 0x508050} ); 
var mesh10 = new THREE.Mesh( geometry10, material10 ); 
//scene.add( mesh10);
mesh10.rotation.set(0,0,0);
mesh10.position.set(-6.2,2,0);


var geometry11 = new THREE.BoxGeometry(1., .75, 1); 
var material11 = new THREE.MeshLambertMaterial( {color: 0x508050} ); 
var mesh11 = new THREE.Mesh( geometry11, material11 ); 
//scene.add( mesh11);
mesh11.rotation.set(0,0,0);
mesh11.position.set(-6.2,2,0);

var geometry12 = new THREE.BoxGeometry(.25, 2.5, 1.25); 
var material12 = new THREE.MeshLambertMaterial( {color: 0x550513} ); 
var mesh12 = new THREE.Mesh( geometry12, material12 ); 
//scene.add( mesh12);
mesh12.rotation.set(0,0,0);
mesh12.position.set(-6.2,2,0);

//cilindros de la ala

var geometry13= new THREE.CylinderGeometry(.5,.5,.3,30,10);
var material13= new THREE.MeshLambertMaterial({color: 0x001540});
var mesh13 = new THREE.Mesh (geometry13, material13);
//scene.add(mesh13); 
mesh13.rotation.set(0,0,0);
mesh13.position.set(-6.2,2.75,0);

var geometry14= new THREE.CylinderGeometry(.6,.3,.6,30,10);
var material14= new THREE.MeshLambertMaterial({color: 0x251540});
var mesh14 = new THREE.Mesh (geometry14, material14);
//scene.add(mesh14); 
mesh14.rotation.set(0,0,0);
mesh14.position.set(-6.2,6,0);

var geometry15= new THREE.CylinderGeometry(.4,.4,.3,30,10);
var material15= new THREE.MeshLambertMaterial({color: 0x001540});
var mesh15 = new THREE.Mesh (geometry15, material15);
//scene.add(mesh15); 
mesh15.rotation.set(0,0,0);
mesh15.position.set(-6.2,4,0);

var geometry16= new THREE.CylinderGeometry(.6,.3,.6,30,10);
var material16= new THREE.MeshLambertMaterial({color: 0x251540});
var mesh16 = new THREE.Mesh (geometry16, material16);
//scene.add(mesh16); 
mesh16.rotation.set(0,0,0);
mesh16.position.set(-6.2,6,0);

var geometry17= new THREE.CylinderGeometry(.7,.7,.3,30,10);
var material17= new THREE.MeshLambertMaterial({color: 0x465322});
var mesh17 = new THREE.Mesh (geometry17, material17);
//scene.add(mesh17); 
mesh17.rotation.set(0,0,0);
mesh17.position.set(-6.2,6.4,0);

//ala
var geometry18 = new THREE.BoxGeometry(10, .25, 6); 
var material18 = new THREE.MeshLambertMaterial( {color: 0x550513} ); 
var mesh18 = new THREE.Mesh( geometry18, material18); 
//scene.add( mesh18);
mesh18.rotation.set(0,0,0);
mesh18.position.set(-5,6.6,0);

var geometry19 = new THREE.BoxGeometry(18, .5, 6); 
var material19 = new THREE.MeshLambertMaterial( {color: 0x444613} ); 
var mesh19 = new THREE.Mesh( geometry19, material19 ); 
//scene.add( mesh19);
mesh19.rotation.set(.65,0,0);
mesh19.position.set(-4,8.4,-5.3);

var geometry20= new THREE.BoxGeometry(17, .75, 5); 
var material20 = new THREE.MeshLambertMaterial( {color: 0x400613} ); 
var mesh20 = new THREE.Mesh( geometry20, material20 ); 
//scene.add( mesh20);
mesh20.rotation.set(.65,0,0);
mesh20.position.set(-4,8.4,-5.3);

var geometry21 = new THREE.BoxGeometry(17, .75, 5); 
var material21 = new THREE.MeshLambertMaterial( {color: 0x400613} ); 
var mesh21 = new THREE.Mesh( geometry21, material21 ); 
//scene.add( mesh21);
mesh21.rotation.set(-.65,0,0);
mesh21.position.set(-4,8.4,5.3);

var geometry22 = new THREE.BoxGeometry(18, .25, 6); 
var material22 = new THREE.MeshLambertMaterial( {color: 0x444613} ); 
var mesh22 = new THREE.Mesh( geometry22, material22 ); 
//scene.add( mesh22);
mesh22.rotation.set(-.65,0,0);
mesh22.position.set(-4,8.4,5.3);

var geometry23= new THREE.CylinderGeometry(.15,.15,6,30,10);
var material23= new THREE.MeshLambertMaterial({color: 0x000000});
var mesh23 = new THREE.Mesh (geometry23, material23);
//scene.add(mesh23); 
mesh23.rotation.set(0,0,1.55);
mesh23.position.set(2.5,7.03,3);

var geometry24= new THREE.CylinderGeometry(.15,.15,6,30,10);
var material24= new THREE.MeshLambertMaterial({color: 0x000000});
var mesh24 = new THREE.Mesh (geometry24, material24);
//scene.add(mesh24); 
mesh24.rotation.set(0,0,1.55);
mesh24.position.set(2.5,7,-3);

var geometry25= new THREE.CylinderGeometry(1,1,.25,30,10);
var material25= new THREE.MeshLambertMaterial({color: 0x000000});
var mesh25 = new THREE.Mesh (geometry25, material25);
//scene.add(mesh25); 
mesh25.rotation.set(0,0,0);
mesh25.position.set(-6.2,7,0);

var geometry26 = new THREE.BoxGeometry(5, .25, 6); 
var material26 = new THREE.MeshLambertMaterial( {color: 0x559613} ); 
var mesh26 = new THREE.Mesh( geometry26, material26 ); 
//scene.add( mesh26);
mesh26.rotation.set(0,0,0);
mesh26.position.set(-6,6.8,0);

var geometry27 = new THREE.BoxGeometry(3.75, .25, 3); 
var material27 = new THREE.MeshLambertMaterial( {color: 0x559613} ); 
var mesh27 = new THREE.Mesh( geometry27, material27 ); 
//scene.add( mesh27);
mesh27.rotation.set(0,0,0);
mesh27.position.set(-2,6.8,0);

var geometry28 = new THREE.BoxGeometry(2, 1.25, 2); 
var material28 = new THREE.MeshLambertMaterial( {color: 0x550083} ); 
var mesh28= new THREE.Mesh( geometry28, material28 ); 
//scene.add( mesh28);
mesh28.rotation.set(0,0,0);
mesh28.position.set(-.5,6.8,0);

var ala1 = new  THREE.Group();
    ala1.add(mesh07, mesh08, mesh09, mesh10,mesh11, mesh12, mesh13, mesh14,mesh15, mesh16, mesh17, mesh18,mesh19, mesh20, mesh21, mesh22,mesh23, mesh24, mesh25, mesh26,mesh27,mesh28);
   //scene.add(ala1);
    
    var ala2=ala1.clone();
   //scene.add(ala2);
    ala2.position.set(0,0,0);
    ala2.rotation.set(1.95,0,0);

    var ala3=ala1.clone();
    //scene.add(ala3);
    ala3.position.set(0,0,0);
    ala3.rotation.set(-1.95,0,0);

    //cañoncitos

    var geometry29= new THREE.CylinderGeometry(4.75,4.75,.5,30,10);
var material29= new THREE.MeshLambertMaterial({color: 0x000000});
var mesh29 = new THREE.Mesh (geometry29, material29);
//scene.add(mesh29); 
mesh29.rotation.set(0,0,1.55);
mesh29.position.set(-1,0,0);

var geometry30= new THREE.CylinderGeometry(.25,.25,3,30,10);
var material30= new THREE.MeshLambertMaterial({color: 0x005080});
var mesh30 = new THREE.Mesh (geometry30, material30);
//scene.add(mesh30); 
mesh30.rotation.set(0,0,1.55);
mesh30.position.set(2,-2.5,1.5);


var geometry31= new THREE.CylinderGeometry(.3,.1,1,30,10);
var material31= new THREE.MeshLambertMaterial({color: 0x050050});
var mesh31 = new THREE.Mesh (geometry31, material31);
//scene.add(mesh31); 
mesh31.rotation.set(0,0,1.55);
mesh31.position.set(4,-2.55,1.5);

var geometry32= new THREE.CylinderGeometry(.25,.25,3,30,10);
var material32= new THREE.MeshLambertMaterial({color: 0x002500});
var mesh32= new THREE.Mesh (geometry32, material32);
//scene.add(mesh32); 
mesh32.rotation.set(0,0,1.55);
mesh32.position.set(2,-2.5,-1.5);

var geometry33= new THREE.CylinderGeometry(.3,.1,1,30,10);
var material33= new THREE.MeshLambertMaterial({color: 0x050050});
var mesh33 = new THREE.Mesh (geometry33, material33);
//scene.add(mesh33); 
mesh33.rotation.set(0,0,1.55);
mesh33.position.set(4,-2.55,-1.5);

 var  tie=new THREE.Group();
 tie.add (mesh01,mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh10,mesh11,mesh12,mesh13,mesh14,mesh15,mesh16,mesh17,mesh18,mesh19,mesh20,mesh21,mesh22,mesh23,mesh24,mesh25,mesh26,mesh27,mesh28,mesh29,mesh30,mesh31,mesh32,mesh33,ala2,ala3);
 tie.rotation.set(x,1.55,z);
 tie.position.set(x,y,z);
 return tie; 
 
}