//  Surrealist (Dadaist) Text Generator
//  By: Johnny Dunn

var input, enterButton, clearButton, inputText, message;
var textMessage;      //  Duplicate value of message

var splitSentencesBy = [".", "..", "...", "!", "?", '"'];   //  Splitting the text by end punctuation marks
var splitSentences = [];                        //  List of separated sentences
var index = [];                                 //  Sentence randomly picked to be printed

function setup() {
  
  createCanvas(displayWidth, displayHeight);
  
  input = createInput();
  input.position(36, 124);
  enterButton = createButton('submit');
  enterButton.position(214, 124);
  enterButton.mousePressed(submit);
  clearButton = createButton('clear');
  clearButton.position(273, 124);
  clearButton.mousePressed(clear);
  textSize(30);
  heading = createElement('h1', 'surrealist (dadist) text rearranger');
  inputText = createElement('h2', 'enter some paragraphs of text and see the many poetic iterations that can be found');
  siteDescript = createElement('h3', 'sentences are chopped, rearranged, removed, repeated, with no punctuation.');
  aLink = createElement('h4', 'try it with: https://www.gutenberg.org/files/11/11-h/11-h.htm');
  heading.position(35,20);
  inputText.position(35, 55);
  siteDescript.position(37, 80)
  aLink.position(38, 100);
  textAlign(CENTER);                //  With the layout centered and endmarks removed, the new text looks like poetry

}

function getSentences(message) {
  
  str(message);
  textMessage = message;
  splitSentences = splitTokens(textMessage, splitSentencesBy);  //  The text is split by the punctuation chars in the list and those strings are stored in an array
  //print(splitSentences);    
  //randomizedSentences = str(random(splitSentencesList.length));
  //print(randomizedSentences);
  drawSentences();

}

function drawSentences() {
  
  textSize(16);
  var h = 180;              //Start writing the new text at this height
  for (var i=0; i<splitSentences.length; i++) {         //Keep writing until all the found sentences in the list are exhausted
      index = floor(random(splitSentences.length));     //And randomize the order of the split sentences
      text(splitSentences[index], 675, h);              //And write them sequentially down the page
      h+=23;      

  }
}
//  The interesting part of the function above is that the number of new sentences printed out is still the same size as the number of 
//  sentences in the original list, but because it's randomized independently, some of the same sentences will be printed out multiple times 
//  while some others will get left out. 


function submit() {
  message = input.value();
  getSentences(message);                  //Splits the message into separate sentences / questions 
}

function clear () {
    input.value('');                     //Clears the page but not the user-inputted form, so that the user can experiment with one passage of text easily. 
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}