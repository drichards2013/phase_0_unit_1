// I worked on this challenge [by myself]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 


// rescue mission
// down 2x
// right
// up2x
// right 2x
// down
// attack

this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

// grab the mushroom
// up
// right
// left
// up
// attack

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

// drink me 
// right
// attack
// right
// down
// up
// right
// attack

this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

// taunt the guards
// right
// door
// right
// say
// left2x
// say
// right
// say
// righ2x
// up
// right
// say
// down
// right
// up
// right

this.moveRight();
this.bustDownDoor();
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say('Hey there!');
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();


// it's a trap
// down2x
// say
// up2x

this.moveDown();
this.moveDown();
this.say('Hey there!');
this.moveUp();
this.moveUp();


// taunt
// taunt 4x

this.say('hey');
this.say('loser');
this.say('sdf');
this.say('s');


// cowardly taunt
// run to where ogres can hear
// say
// hide

this.moveXY(50,25);

this.say('omg');
this.moveXY(70,10);


// commanding followers
// get them to follow us
// go to ogres
// make troops attack mode
// get away from gore

this.say('follow');
this.moveXY(64,49);
this.say('attack');
this.moveXY(71,60);


// mobile artillery
// move into range
// attack
// attack stubborn
// move
// attack
// attack stubborn

this.moveXY(44,36);
this.attackXY(49,63);
this.attackXY(47,53);
this.moveXY(50, 39);
this.attackXY(69,57);
this.attackXY(57,44); 
 
 
// Reflection:
// Write your reflection here.

// 'this' refers to the current object. If a Person class exists,
// then 'this' is an instance of that class.

// The '()' accept arguments in JavaScript. For example, in the game, the move function took two
// arguments -- the x position and the y posotion. In between the parentheses is where we specify these
// additional parameters.

// Semicolons are used to explicitly indicate where a particular statement ends.








