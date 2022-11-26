let lyrics;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);  
  let col=color(170, 127, 245);
  let col2=color(23, 0, 43);
  let col3=color(201, 172, 22);
  let col4=color(132, 0, 255);
  let col5=color(157, 252, 182);
  let col6=color(255, 247, 0);
  
  let button = createButton('Gibberish');
  button.position(width/50,height/10);
  button.style('background-color',col4);
  button.style('color',col5);

  button.mousePressed(gibberish);
  
  let buttonTwo= createButton('Clear');
  buttonTwo.position(width/5,height/10);
  buttonTwo.style('background-color',col4);
  buttonTwo.style('color',col5);
  buttonTwo.mousePressed(disappear);
  
  let title = createP('Gibberish 2.0');
  title.position(width/8,7*height/8);
  title.style('color','rgb(132, 0, 255)');
  title.style('font-family','Monaco');
  

}

function draw() {

stroke(132, 0, 255);
strokeWeight(2);
rect(random(width),random(height),1,2);

let gib = 'Gibberish 2.0!';
let gib2='';

for(let i=0;i<gib.length;i++){
  gib2+=gib.substring(i,i+1)+'\n';
}

push();
stroke(255, 252, 179);
textSize(7);
for(let i=0;i<gib2.length;i++){
  text(gib2,width/10+i*7,height/4+i*3);
}
pop();
 }
function disappear(){
  clear();
  lyrics.html('');
  background(0);
}


function gibberish (){
  let vowelsAndSpace=['a','y'];
  let consonants = ['t','d','o','f','s','_'];
  const subsets =
  array => array.reduce(
    (subsets,value)=>subsets.concat(
      subsets.map(set => [value,...set])
    ),
    [[]]
  );
  let words = subsets(consonants).reverse();
  let newStr = words.toString();
  let newWords = '';
  for(let i=0;i<newStr.length;i++){
    newWords+= newStr.substring(0,45).replace(/,| {2,}/g,vowelsAndSpace[floor(random(2))])+'\n';    
    newStr= newStr.substring(45);
  }

  
  lyrics = createP(newWords);
  lyrics.position(width/2,height/8);
  lyrics.style('color','rgb(132, 0, 255)');
  lyrics.style('font-family','Monaco');
  
}

function windowResized (){
  createCanvas(windowWidth,windowHeight);
  background(0);  
} 
