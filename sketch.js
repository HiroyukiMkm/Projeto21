var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola;
var music;

function preload(){
    // carregue o som aqui
    music = loadSound("music.mp3");
}

function setup(){
    tela = createCanvas(800,600);

    bloco1 = createSprite(0,580,360,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(295,580,200,30);
    bloco2.shapeColor = "orange";

    bloco3 = createSprite(510,580,200,30);
    bloco3.shapeColor = "red";

    bloco4 = createSprite(720,580,200,30);
    bloco4.shapeColor = "green"
    //crie aqui mais dois blocos, ou seja, bloco3 e bloco4
    

    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = "white";

    bola.velocityX = 10
    bola.velocityY = 10
    //escreva o código para adicionar velocityX e velocityY

}

function draw() {
    background("gray");

    arestas=createEdgeSprites();
    bola.bounceOff(arestas);
    
    
    //escreva o código de ricochete de bola para bloco1 
    if(bloco1.isTouching(bola) ){
        bola.shapeColor = "blue";
        music.play();
    }


    if(bloco2.isTouching(bola) ){
        bola.shapeColor = "orange";

        bola.velocityX = 0;
        bola.velocityY = 0;
        //escreva o código para definir velocityX e velocityY da bola como 0
        music.stop()
        //escreva o código para parar a música
    }

    if(bloco3.isTouching(bola) ){
        bola.shapeColor = "red";
        music.play();
    }
    //escreva o código de ricochete de bola para bloco3

    if(bloco4.isTouching(bola) ){
        bola.shapeColor = "green";
        music.play();
    }
    //escreva o código de ricochete de bola para bloco4

    drawSprites();
}