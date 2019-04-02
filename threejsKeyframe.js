var renderer = null, 
scene = null, 
camera = null,
root = null,
group = null,
bunny = null,
grass = null,
font= null,
ship = null,
shipColider = null,
tree1=null,
tree1Colider=null,
tree2=null,
tree2Colider=null,
tree3=null,
tree3Colider=null,
tree4=null,
tree4Colider=null,
tree5=null,
tree5Colider=null,
tree6=null,
tree6Colider=null,
missle1=null,
missle1Speed=.5,
missle1Colider=null,
missle2=null,
missle2Speed=.5,
missle2Colider=null,
amountUp=0,
amountSides=7,
directionalLight = null,
mutex=false;
var objLoader = null,
bullets=[1,2],
bulletsColiders=[1,2],
bulletCount=0;

var duration = 10, // sec
loopAnimation = true;

var grassMapUrl = "grass.jpg";
var frontUrl = "62818.png";

function run()
{
    requestAnimationFrame(function() { run(); });
    
        // Render the scene
        renderer.render( scene, camera );
        
        //move OBJs
        movement()

        updateColiders()

        checkColitions()

        // Update the animations
        KF.update();

        // Update the camera controller
        //orbitControls.update();
}

function movement()
{
    
    if(missle1)
        {
            missle1.position.z+=missle1Speed;
            if(missle1.position.z>30)
            {
                missle1.position.z=entry()
                missle1Speed=Math.random() * (1 - .4) + .4;
                missle1.position.x = Math.random() * (11 - (-11)) + (-11); //-11 min/max
            }
        }
        if(missle2)
        {
            missle2.position.z+=missle2Speed;
            if(missle2.position.z>30)
            {
                missle2.position.z=entry()
                missle2Speed=Math.random() * (1 - .4) + .4;
                missle2.position.x = Math.random() * (11 - (-11)) + (-11); //-11 min/max
            }
        }
        if(tree1)
        {
            tree1.position.z+=.3;
            if(tree1.position.z>30)
            {
                tree1.position.z=entry();
                tree1.position.x = Math.random() * (11 - (-11)) + (-11); //-11 min/max
            }

        }

        if(tree2)
        {
            tree2.position.z+=.3;
            if(tree2.position.z>30)
            {
                tree2.position.z=entry();
                tree2.position.x = Math.random() * (11 - (-11)) + (-11); //-11 min/max
            }

        }

        if(tree3)
        {
            tree3.position.z+=.3;
            if(tree3.position.z>30)
            {
                tree3.position.z=entry();
                tree3.position.x = Math.random() * (11 - (-11)) + (-11); //-11 min/max
            }

        }

        if(tree4)
        {
            tree4.position.z+=.3;
            if(tree4.position.z>30)
            {
                tree4.position.z=entry();
                tree4.position.x = Math.random() * (11 - (-11)) + (-11); //-11 min/max
            }

        }

        if(tree5)
        {
            tree5.position.z+=.3;
            if(tree5.position.z>30)
            {
                tree5.position.z=entry();
                tree5.position.x = Math.random() * (11 - (-11)) + (-11); //-11 min/max
            }

        }

        if(tree6)
        {
            tree6.position.z+=.3;
            if(tree6.position.z>30)
            {
                tree6.position.z=entry();
                tree6.position.x = Math.random() * (11 - (-11)) + (-11); //-11 min/max
            }

        }
        bullets.forEach(element => {
            if(element.position.z>-110)
            {
                element.position.z-=.2;
            }
            
        });
}

function entry()
{
    return Math.random() * (-100 - (-150)) + (-150);
}

function updateColiders()
{
    shipColider.update();
    missle1Colider.update();
    missle2Colider.update();
    tree1Colider.update();
    tree2Colider.update();
    tree3Colider.update();
    tree4Colider.update();
    tree5Colider.update();
    tree6Colider.update();
    bulletsColiders.forEach(element => {
        element.update();
    });
}



function changeHP()
{
    //console.log($("#hp").attr('src'));
    
    if($("#hp").attr('src')=="hp3.jpg")
    {
        console.log("3");
        window.location.reload();
    }
    else if($("#hp").attr('src')=="hp2.jpg")
    {
        console.log("2");
        $("#hp").attr('src',"hp3.jpg");
    }
    else if($("#hp").attr('src')=="hp1.jpg")
    {
        console.log("1");
        $("#hp").attr('src',"hp2.jpg");
    }
}

function checkColitions()
{

    var shipColiderx= new THREE.Box3().setFromObject(shipColider);
    var missle1Coliderx= new THREE.Box3().setFromObject(this.missle1Colider);
    var missle2Coliderx= new THREE.Box3().setFromObject(this.missle2Colider);
    var tree1Coliderx= new THREE.Box3().setFromObject(tree1Colider);
    var tree2Coliderx= new THREE.Box3().setFromObject(tree2Colider);
    var tree3Coliderx= new THREE.Box3().setFromObject(tree3Colider);
    var tree4Coliderx= new THREE.Box3().setFromObject(tree4Colider);
    var tree5Coliderx= new THREE.Box3().setFromObject(tree5Colider);
    var tree6Coliderx= new THREE.Box3().setFromObject(tree6Colider);


        if(shipColiderx.intersectsBox(missle1Coliderx))
        {
            missle1.position.z=31
            changeHP();
        }

        else if(shipColiderx.intersectsBox(missle2Coliderx))
        {
            tree1.position.z=31
            changeHP();
        }

        else if(shipColiderx.intersectsBox(tree1Coliderx))
        {
            missle1.position.z=31
            changeHP();
        }

        else if(shipColiderx.intersectsBox(tree2Coliderx))
        {
            tree2.position.z=31
            changeHP();
        }

        else if(shipColiderx.intersectsBox(tree3Coliderx))
        {
            tree3.position.z=31
            changeHP();
        }

        else if(shipColiderx.intersectsBox(tree4Coliderx))
        {
            tree4.position.z=31
            changeHP();
        }

        else if(shipColiderx.intersectsBox(tree5Coliderx))
        {
            tree5.position.z=31
            changeHP();
        }

        else if(shipColiderx.intersectsBox(tree6Coliderx))
        {
            tree6.position.z=31
            changeHP();
        }

        bulletsColiders.forEach(element => {
        if(element.position.z>-110)
        {
            let coliderx= new THREE.Box3().setFromObject(element);
            if(missle1Coliderx.intersectsBox(coliderx))
            {
                missle1.position.z=31;
            }

            if(missle2Coliderx.intersectsBox(coliderx))
            {
                missle2.position.z=31;
            }
        }
    });

}

function loadObj()
{

    var OBJFile = './Arwing/Arwing.obj';
    var MTLFile = './Arwing/Arwing.mtl';
    //var JPGFile = 'my/texture.jpg';


    new THREE.MTLLoader()
    .load(MTLFile, function (materials) {
        materials.preload();
        new THREE.OBJLoader()
            .setMaterials(materials)
            .load(OBJFile, function (object) {
                ship=object;
                shipColider= new THREE.BoxHelper(ship, 0x00ff00);
                shipColider.visible = false;
                object.position.z = 0;
                object.position.x = 1
                object.position.y = 1.5;
                shipColider.update();
                object.rotateOnAxis(new THREE.Vector3(0,1,0),9.4);
                //var texture = new THREE.TextureLoader().load(JPGFile);

                /*object.traverse(function (child) {   // aka setTexture
                    if (child instanceof THREE.Mesh) {
                        child.material.map = texture;
                    }
                });*/
                scene.add(object);
                scene.add(shipColider);
            });
    });

    var OBJFile2 = './N64Tree/n64tree.obj';
    var MTLFile2 = './N64Tree/n64tree.mtl';
    var JPGFile2 = './N64Tree/m64_tree.png';


    new THREE.MTLLoader()
    .load(MTLFile2, function (materials) {
        materials.preload();
        new THREE.OBJLoader()
            .setMaterials(materials)
            .load(OBJFile2, function (object) {
                tree1=object;
                tree1Colider= new THREE.BoxHelper(tree1, 0x00ff00);
                tree1Colider.visible = false;
                object.position.z = -130;
                object.position.x = Math.random() * (11 - (-11)) + (-11);
                object.position.y = 1;
                object.scale.x=.3
                object.scale.y=.2
                //object.rotateOnAxis(new THREE.Vector3(0,1,0),9.4);
                let texture = new THREE.TextureLoader().load(JPGFile2);

                object.traverse(function (child) {   // aka setTexture
                    if (child instanceof THREE.Mesh) {
                        child.material.map = texture;
                    }
                });
                scene.add(object);
                scene.add(tree1Colider);
            });
    });


    new THREE.MTLLoader()
    .load(MTLFile2, function (materials) {
        materials.preload();
        new THREE.OBJLoader()
            .setMaterials(materials)
            .load(OBJFile2, function (object) {
                tree2=object;
                tree2Colider= new THREE.BoxHelper(tree2, 0x00ff00);
                tree2Colider.visible = false;
                object.position.z = -100;
                object.position.x = Math.random() * (11 - (-11)) + (-11);
                object.position.y = 1;
                object.scale.x=.3
                object.scale.y=.3
                //object.rotateOnAxis(new THREE.Vector3(0,1,0),9.4);
                let texture = new THREE.TextureLoader().load(JPGFile2);

                object.traverse(function (child) {   // aka setTexture
                    if (child instanceof THREE.Mesh) {
                        child.material.map = texture;
                    }
                });
                scene.add(object);
                scene.add(tree2Colider);
            });
    });

    new THREE.MTLLoader()
    .load(MTLFile2, function (materials) {
        materials.preload();
        new THREE.OBJLoader()
            .setMaterials(materials)
            .load(OBJFile2, function (object) {
                tree3=object;
                tree3Colider= new THREE.BoxHelper(tree3, 0x00ff00);
                tree3Colider.visible = false;
                object.position.z = -160;
                object.position.x = Math.random() * (11 - (-11)) + (-11);
                object.position.y = 1;
                object.scale.x=.4
                object.scale.y=.1
                //object.rotateOnAxis(new THREE.Vector3(0,1,0),9.4);
                let texture = new THREE.TextureLoader().load(JPGFile2);

                object.traverse(function (child) {   // aka setTexture
                    if (child instanceof THREE.Mesh) {
                        child.material.map = texture;
                    }
                });
                scene.add(object);
                scene.add(tree3Colider);
            });
    });

    new THREE.MTLLoader()
    .load(MTLFile2, function (materials) {
        materials.preload();
        new THREE.OBJLoader()
            .setMaterials(materials)
            .load(OBJFile2, function (object) {
                tree4=object;
                tree4Colider= new THREE.BoxHelper(tree4, 0x00ff00);
                tree4Colider.visible = false;
                object.position.z = -220;
                object.position.x = Math.random() * (11 - (-11)) + (-11);
                object.position.y = 1;
                object.scale.x=.3
                object.scale.y=.2
                //object.rotateOnAxis(new THREE.Vector3(0,1,0),9.4);
                let texture = new THREE.TextureLoader().load(JPGFile2);

                object.traverse(function (child) {   // aka setTexture
                    if (child instanceof THREE.Mesh) {
                        child.material.map = texture;
                    }
                });
                scene.add(object);
                scene.add(tree4Colider);
            });
    });


    new THREE.MTLLoader()
    .load(MTLFile2, function (materials) {
        materials.preload();
        new THREE.OBJLoader()
            .setMaterials(materials)
            .load(OBJFile2, function (object) {
                tree5=object;
                tree5Colider= new THREE.BoxHelper(tree5, 0x00ff00);
                tree5Colider.visible = false;
                object.position.z = -280;
                object.position.x = Math.random() * (11 - (-11)) + (-11);
                object.position.y = 1;
                object.scale.x=.3
                object.scale.y=.3
                //object.rotateOnAxis(new THREE.Vector3(0,1,0),9.4);
                let texture = new THREE.TextureLoader().load(JPGFile2);

                object.traverse(function (child) {   // aka setTexture
                    if (child instanceof THREE.Mesh) {
                        child.material.map = texture;
                    }
                });
                scene.add(object);
                scene.add(tree5Colider);
            });
    });

    new THREE.MTLLoader()
    .load(MTLFile2, function (materials) {
        materials.preload();
        new THREE.OBJLoader()
            .setMaterials(materials)
            .load(OBJFile2, function (object) {
                tree6=object;
                tree6Colider= new THREE.BoxHelper(tree6, 0x00ff00);
                tree6Colider.visible = false;
                object.position.z = -340;
                object.position.x = Math.random() * (11 - (-11)) + (-11);
                object.position.y = 1;
                object.scale.x=.4
                object.scale.y=.1
                //object.rotateOnAxis(new THREE.Vector3(0,1,0),9.4);
                let texture = new THREE.TextureLoader().load(JPGFile2);

                object.traverse(function (child) {   // aka setTexture
                    if (child instanceof THREE.Mesh) {
                        child.material.map = texture;
                    }
                });
                scene.add(object);
                scene.add(tree6Colider);
            });
    });

    var OBJFile3 = './invader/Invader.obj';
    var MTLFile3 = './invader/Invader.mtl';
    //var JPGFile = 'my/texture.jpg';


    new THREE.MTLLoader()
    .load(MTLFile3, function (materials) {
        materials.preload();
        new THREE.OBJLoader()
            .setMaterials(materials)
            .load(OBJFile3, function (object) {
                missle1=object;
                missle1.position.z = -100;
                missle1Colider= new THREE.BoxHelper(missle1, 0x00ff00);
                missle1Colider.visible = false;
                object.position.x = Math.random() * (11 - (-11)) + (-11); //-11 min/max
                object.position.y = Math.random() * (10 - 3) + (3);;//max10 min 3
                object.rotateOnAxis(new THREE.Vector3(0,1,0),6.2);
                object.rotateOnAxis(new THREE.Vector3(1,0,0),.3);
                //var texture = new THREE.TextureLoader().load(JPGFile);

                /*object.traverse(function (child) {   // aka setTexture
                    if (child instanceof THREE.Mesh) {
                        child.material.map = texture;
                    }
                });*/
                scene.add(object);
                scene.add(missle1Colider);
            });
    });

    new THREE.MTLLoader()
    .load(MTLFile3, function (materials) {
        materials.preload();
        new THREE.OBJLoader()
            .setMaterials(materials)
            .load(OBJFile3, function (object) {
                missle2=object;
                missle2.position.z = -150;
                missle2Colider= new THREE.BoxHelper(missle2, 0x00ff00);
                missle2Colider.visible = false;
                object.position.x = Math.random() * (11 - (-11)) + (-11); //-11 min/max
                object.position.y = Math.random() * (10 - 3) + (3);;//max10 min 3
                object.rotateOnAxis(new THREE.Vector3(0,1,0),6.2);
                object.rotateOnAxis(new THREE.Vector3(1,0,0),.3);
                //var texture = new THREE.TextureLoader().load(JPGFile);

                /*object.traverse(function (child) {   // aka setTexture
                    if (child instanceof THREE.Mesh) {
                        child.material.map = texture;
                    }
                });*/
                scene.add(object);
                scene.add(missle2Colider);
            });
    });
}

function createScene(canvas) 
{
    bullets=[];
    bulletsColiders=[];
    const { width, height } = getWidthAndHeight();
    // Create the Three.js renderer and attach it to our canvas
    renderer = new THREE.WebGLRenderer( { canvas: canvas, antialias: true } );

    // Set the viewport size
    canvas.height=height;
    renderer.setSize(width, height);
    
    // Create a new Three.js scene
    scene = new THREE.Scene();

    // Add  a camera so we can view the scene
    camera = new THREE.PerspectiveCamera( 45, width/height, 1, 4000 );
    camera.position.set(0, 3, 20);
    //camera.lookAt(ship);
    scene.add(camera);
    
    // Create a group to hold all the objects
    root = new THREE.Object3D;
    
    // Add a directional light to show off the object
    directionalLight = new THREE.DirectionalLight( 0xffffff, 1);

    // Create and add all the lights
    directionalLight.position.set(0, 1, 2);
    root.add(directionalLight);

    ambientLight = new THREE.AmbientLight ( 0x888888 );
    root.add(ambientLight);
    
    // Create a group to hold the objects
    group = new THREE.Object3D;
    bunny= new THREE.Object3D;
    root.add(group);

    // Create a texture map
    var grassMap = new THREE.TextureLoader().load(grassMapUrl);
    grassMap.wrapS = grassMap.wrapT = THREE.RepeatWrapping;
    grassMap.repeat.set(100, 100);

    var color = 0xffffff;
    var ambient = 0x888888;
    
    // Put in a ground plane to show off the lighting
    geometry = new THREE.PlaneGeometry(100, 100, 10, 0);
    grass = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color:color, map:grassMap, side:THREE.DoubleSide}));
    grass.rotation.x = -Math.PI / 2;
    grass.position.y = 0;
    


    var shipMap = new THREE.TextureLoader().load(frontUrl);
    shipMap.wrapS = shipMap.wrapT = THREE.RepeatWrapping;
    shipMap.repeat.set(1, 1);

    // Put in a ground plane to show off the lighting
    Fgeometry = new THREE.PlaneGeometry(200, 70, 50, 50);
    front = new THREE.Mesh(Fgeometry, new THREE.MeshBasicMaterial({color:color, map:shipMap, side:THREE.DoubleSide}));
    front.position.y = 25;
    front.position.z = -100;
    

    // Add the grass to our group
    root.add( grass );
    root.add( front );

    
    // Now add the group to our scene
    scene.add( root );

    loadObj();
    // Create a group to hold the objects
    group = new THREE.Object3D;
    root.add(group);
    

}

function getWidthAndHeight() {
    const width = $(window).width();
    const height = $(window).height();
    return { width, height };
  }
  
  // movement - please calibrate these values
var xSpeed = 1;
var ySpeed = 1;

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    console.log(amountSides);
    
    var keyCode = event.which;
    if (keyCode == 87) {
        if(amountUp<7)
        {
            ship.position.y += ySpeed;
            amountUp++;
        }
    } else if (keyCode == 83) {
        if(amountUp>0)
        {
            ship.position.y -= ySpeed;
            amountUp--;
        }
        //console.log("down");
    } else if (keyCode == 65) {
        if(amountSides<16)
        {
            ship.position.x -= ySpeed;
            amountSides++;
        }
    } else if (keyCode == 68) {
        if(amountSides>0)
        {
            ship.position.x += ySpeed;
            amountSides--;
        }
    }else if (keyCode == 32) {
        var geometry = new THREE.SphereGeometry( .2, 32, 32 );
        var material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
        var sphere = new THREE.Mesh( geometry, material );
        sphere.position.x=ship.position.x;
        sphere.position.y=ship.position.y;
        bullets[bulletCount++]=sphere;
        bulletsColiders[bulletCount]=new THREE.BoxHelper(sphere, 0x00ff00);
        bulletsColiders[bulletCount].visible = false;
        console.log(bullets);        
        scene.add( sphere );
        console.log(bulletsColiders[bulletCount]);
        scene.add( bulletsColiders[bulletCount] );
    }
    renderer.render( scene, camera );
};