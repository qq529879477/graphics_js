/*
 * @name Load and Display Image
 * @description Images can be loaded and displayed to the screen at their
 * actual size or any other size.
 * <p><em><span class="small"> To run this example locally, you will need an 
 * image file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">
 * local server</a>.</span></em></p>

 */
let img; // Declare variable 'img'.

function setup() {
  createCanvas(720, 400);
  img = loadImage('assets/moonwalk.jpg'); // Load the image
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  //image(img, 0, 0);
  // Displays the image at point (0, height/2) at half size
  image(img, 
        0, 0, // dx dy
        width, height, // dw dh
        img.width / 2, 0, // sx sy 
        img.width / 3, img.height/3 // sw sh
       );
  
    image(img, 
        0, 0, // dx dy
        width/4, height/4, // dw dh
        img.width / 2, 0, // sx sy 
        img.width / 3, img.height/3 // sw sh
       );
}
