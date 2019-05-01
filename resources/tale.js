let music = document.getElementById("music");

function togglePlay() {
  return music.paused ? music.play() : music.pause();
};

// Welcoming alert suggesting user to turn the music on
Swal.fire({
  position: 'top',
  showConfirmButton: false,
  timer: 6500,
  title: 'Welcome, stranger! You can turn the music up here, in the left corner of this book. It will accompany you on your journey.',
  background: '#fff url(resources/background.jpg)',
  backdrop: `
    rgba(0,0,0,0.4)
    url("resources/stranger.gif")
    top left
    no-repeat
  `
})

//Defining a toast message for using it later on in easter eggs
const Toast = Swal.mixin({
  toast: true,
  position: 'center',
  showConfirmButton: false,
  buttonsStyling: false,
  timer: 4000,
});

// The sweetalert version of TellTale function created with 'sweetalert2' library
function TellTale() {
    Swal.mixin({
        input: 'text',
        confirmButtonText: 'Forwards &rarr;',
        cancelButtonText: 'Stop it!',
        showCancelButton: true,
        allowOutsideClick: false,
        buttonsStyling: false,
        // showCloseButton: true,
        inputValidator: (value) => {
            if (!value) {
              return 'Please fill this scroll to continue your quest'
            } else if (value.length > 18) {
              return 'I\'m afraid it is a bit long for our story'
              //an easter egg when user input exceeds 9000
            } else if (value.match(/(@|#|%|&|~)/)) {
              return 'I\'m afraid I don\'t quite understand this language'
              //an easter egg when user input exceeds 9000
            } else if (value>9000) {  
                return Swal.fire({
                    imageUrl: 'https://i.imgur.com/psA9jHo.gif?noredirect',
                    imageWidth: 500,
                    imageHeight: 261,
                    buttonsStyling: false,
                    imageAlt: 'ITS OVER 9000!',
                    animation: true,
                    confirmButtonText: 'OK, I shall try not to write more than 9000 again'
                    //promise saves the current value and continues the function execution
                  }).then(result =>TellTale())
            } else if (value == 300) {  
                return Swal.fire({
                    imageUrl: 'https://66.media.tumblr.com/79f04015f8c2d505bc4f2270ba3febc9/tumblr_p9r0q0icYm1u4gq67o5_r1_500.gif',
                    imageWidth: 600,
                    imageHeight: 200,
                    buttonsStyling: false,
                    imageAlt: 'THIS IS SPARTA!',
                    animation: true,
                    confirmButtonText: 'AAAAAAAAAGGHHHHHHHHH!!!'
                  }).then(result =>TellTale())
            } else if (value.match(/(Vader|Yoda|Skywalker|vader|yoda|skywalker)/)) {  
                return Toast.fire({
                  type: 'success',
                  title: 'Achievement unlocked: MAY THE FORCE BE WITH YOU!'
                }).then(result =>TellTale())
            } else if (value.match(/(Snow|Lannister|Eddard|Targaryen|snow|lannister|eddard|targaryen)/)) {  
                return Toast.fire({
                  type: 'success',
                  title: 'Achievement unlocked: WINTER IS COMMING!'
                }).then(result =>TellTale())
            } else if (value.match(/(Naruto|Kamina|Saitama|Erlic|Luffy|naruto|kamina|saitama|erlic|luffy)/)) {  
                return Toast.fire({
                  type: 'success',
                  title: 'Achievement unlocked: 月に代わって！'
                }).then(result =>TellTale())
            } else if (value.match(/(Sauron|Gandalf|Legolas|Gollum|sauron|gandalf|legolas|Frodo|frodo|Aragorn|aragorn)/)) {  
                return Toast.fire({
                  type: 'success',
                  title: 'Achievement unlocked: MY PRECIOUS'
                }).then(result =>TellTale())
            } else if (value.match(/(Potter|Voldemort|Hagrid|Dumbledore|dumbledore|hagrid|voldemort|potter|Hermione|hermione)/)) {  
                return Toast.fire({
                  type: 'success',
                  title: 'Achievement unlocked: YOU\'RE A WIZARD, HARRY!'
                }).then(result =>TellTale())
              }},
        width: '700px',
        progressStepsDistance: '1 px',
        progressSteps: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        background: '#fff url(resources/background.jpg)',
  backdrop: `
    rgba(0,0,0,0.4)
    url("resources/wizard.gif")
    center bottom
    no-repeat
  `,
      }).queue([
        {title: 'How do people call you, Oh Noble Knight?'}, //result.value[0]
        {title: 'How old is our hero?',
        input: 'range',
        inputAttributes: {
          min: 0,
          max: 9001,
          step: 1},
          inputValue: 25},   //result.value[1]
        {title: 'What is the name of kingdom you sworn to protect?'}, //result.value[2]
        {title: 'What is the name of disgusting villain?'}, //result.value[3]
        {title: 'Tell me the place where that mean character lives'}, //result.value[4]
        {title: 'Tell me a name of a wiseman'}, //result.value[5]
        {title: 'A name of the most elegant weapon'}, //result.value[6]
        {title: 'How many days needed to fought all enemies?',
        input: 'range',
        inputAttributes: {
          min: 0,
          max: 666,
          step: 1},
          inputValue: 0}, //result.value[7]
        {title: 'What was the last thing villain did?'}, //result.value[8]
        {title: 'What is the villian\'s weakest point?'}, //result.value[9]
      ]).then(result => 
            document.getElementById("Tale").innerHTML = "<p>Read this with respect and dignity:</p> <p>Once upon a time, in a democratic constitutional kingdom of " 
            + result.value[2] + " - lived a champion, great protector of human rights, freedoms and amendments, noble Sir " 
            + result.value[0] + " who was " 
            + result.value[1] + " years old . But once, all of a sudden simple folk and taxpayers of " 
            + result.value[2] + " were put into a grave jeopardy. Despicable " 
            + result.value[3] + " brought terror upon all " 
            + result.value[2] + " residents, devastated their villages and robbed caravans. It was the time for benevolent " 
            + result.value[0] + " to get into a long and dangerous journey to the most terrifying place in the world, the infamous " 
            + result.value[4] + " where beast were dwelling. On his way to glory our hero visited ancient grove and met an old wise " 
            + result.value[5] + ", who commended an ultimate weapon in our hero\'s hands, the legendary " 
            + result.value[6] + ". A tedious fight lasted for " 
            + result.value[7] + " days, and our brave " 
            + result.value[0] + " was exhausted, but he managed to chop enemy\'s " 
            + result.value[9] + " off. The " 
            + result.value[3] + " " 
            + result.value[8] + " and gave up the ghost at last. Since then the kingdom of " 
            + result.value[2] + " has grown strong and flourished. And our champion was honorable named Sir " 
            + result.value[0] + " the " 
            + result.value[3] + "slayer and the Great Devastator of " 
            + result.value[4] + ".</p> <p>...Here our story ends.</p>" 
            + "<h4>I hope you enjoyed. You can share your own tale <a href='http://facebook.com/dmitry.monchares' target='_top'>with me</a>. Thank you and have a good one!</h4>"
          )}



// The JS alert version of TellTale function

// function TellTale() {
// let KnightName = prompt("How do people call you, Oh Noble Knight?");
// let Age = prompt("How old is our hero(in years)?");
// let Home = prompt("What is the name of kingdom you sworn to protect?");
// let BadGuy = prompt("What is the name of disgusting villain?");
// let Dwelling = prompt("Tell me the place where that mean character lives");
// let WiseMan = prompt("Tell me a name of a wiseman");
// let Weapon = prompt("A name of an elegant weapon");
// let FightDays = prompt("How many days you fought your enemies?");
// let BeforeDeath = prompt("What did the villain right before his death?");
// let ChopOff = prompt("Which part of bad guy you chopped off?");
// document.getElementById("Tale").innerHTML = "<p>Read this with respect and dignity:</p> <p>Once upon a time, in a democratic constitutional kingdom of " 
// + Home + " - lived a champion, great protector of human rights, freedoms and amendments, noble Sir " 
// + KnightName + " who was " 
// + Age + " years old .</p> <p>But once, all of a sudden simple folk and taxpayers of " 
// + Home + " were put into a grave jeopardy.</p> <p>Despicable " 
// + BadGuy + " brought terror upon all " 
// + Home + " residents, devastated their villages and robbed caravans.</p> <p>It was the time for benevolent " 
// + KnightName + " to get into a long and dangerous journey to the most terrifying place in the world, the infamous " 
// + Dwelling + " where beast were dwelling.</p> <p>On his way to glory our hero visited ancient grove and met an old wise " 
// + WiseMan + ", who commended an ultimate weapon in our hero\'s hands, the legendary " 
// + Weapon + ".</p> <p>A tedious fight lasted for " 
// + FightDays + " days, and our brave " 
// + KnightName + " was exhausted, but he managed to chop enemy\'s " 
// + ChopOff + " off.</p> <p>The " 
// + BadGuy + " " 
// + BeforeDeath + " and gave up the ghost at last.</p> <p>Since then the kingdom of " 
// + Home + " has grown strong and flourished.</p> <p>And our champion was honorable named Sir " 
// + KnightName + " the " 
// + BadGuy + "slayer and the Great Devastator of " 
// + Dwelling + ".<p> <p>...Here our story ends.</p>" 
// + "<p>I hope you enjoyed. You can also copy-paste your tale in comments. Also leave your suggestions in comment section. Thank you and have a good one!</p>";
// }