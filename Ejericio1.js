var i = 0;
var images = [];
var texts = [];

// image list
images[0] = 'Fotos/Burger.PNG';
images[1] = 'Fotos/Cripto.PNG';
images[2] = 'Fotos/Dieta.PNG';
images[3] = "Fotos/Elecciones.PNG";
images[4] = "Fotos/fef134ba-ae95906a-20220328-MAZDA-CX-30-HIBRIDA-LIGERA-MHEV-MILD-HYBRID-COLOMBIA_zsFsCza.jpg";
images[5] = "Fotos/Maze.PNG";
images[6] = "Fotos/pajaro.PNG";
images[7] = "Fotos/Tetris.PNG";

// text list
headerList = ["Algorithmic burger maker",
'CryptoBros','Diet optimization in Colombia',"Poverty as predictor of elections","Car plate recognition", "Maze solver", "Angry Birds clone", "Tetris"];

TextList = ["This is a page done in angular to make hamburger through algorithms. I was in charge of doing the backend, done in Python with Google Colab. By comparing smell compunds in different ingredients, \
this program looks for ingredients that share the least amount of compounds and generates a (possible) hamburger recipe",
"This is a page done in django. I was in charge of doing some of the algorithms. In particular, all the cryptoanalysis ones, the DES system for images, the triple DES system and some others! All the backend was done in Python.",
"This was an optimization project. We decided to tackle the diet problem in Colombia. Using data from the DANE, we tried to make diets that would work for four major cities in Colombia.",
"This was a project all about databases. We took data from wikipedia and the DANE in order to compare the poverty in different departments of Colombia and compare them to their voting patterns \
looking for a pattern", "An artificial intelligence capable of detecting and signaling car plates in images done with PyTorch", "Another simple AI, in this case one that solves mazes. \n \
By loading a maze through Excell, we can try to solve it by using different algorithms, such as DFS, BFS or A*. I was in charge of doing all of these in Python", "My oldest project, an Angry Birds clone. This one was \
done in Python by using the libraries Cocos2d and Pyglet", "A Tetris clone. This one was made in a java-based language called Processing."]

Repos = ["https://github.com/rpenal/Algoritmos2022-I/tree/main/Proyecto","https://github.com/jurrutiap/CriptoBros","https://github.com/rpenal/IntroOptimizacion/tree/main/Proyecto","https://colab.research.google.com/drive/1aWnkVA_6De6o9S2ujvLIDBTcg3Z5agzF?usp=sharing","https://github.com/rpenal/Proyecto-IA-medicos",
"https://github.com/rpenal/ProyectosIA/tree/main/Maze%20solver","https://github.com/rpenal/ProyectoIntroCS2020-I","https://github.com/rpenal/Tetris"]


function defaultPhoto(){
    document.slide.src = images[0];
    document.getElementById("SlideTextHeader").innerText = headerList[0];
    changeText(0)
}


// change image
function changeImgLeft() {
if (i > 0) {
        i--;
    } else {
        i = 2;
    }
    changeText(i);
    
    document.slide.src = images[i];
}

function changeImgRight() {
if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    changeText(i);
    
    document.slide.src = images[i];
}


// change text
function changeText(counter) {
    document.getElementById("SlideTextHeader").innerText = headerList[counter];
    document.getElementById("SlideTextContent").innerText = TextList[counter];
    document.getElementById("GitRepo").href = Repos[counter];
}
