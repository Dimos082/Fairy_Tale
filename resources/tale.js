// The sweetalert version of TellTale function created with 'sweetalert2' library:

function TellTale() {
    Swal.mixin({
        input: 'text',
        confirmButtonText: 'Forwards &rarr;',
        cancelButtonText: 'Stop it!',
        showCancelButton: true,
        buttonsStyling: false,
        // showCloseButton: true,
        inputValidator: (value) => {
            if (!value) {
              return 'Please fill in to continue your quest'
              // Easter egg with Vegeta
            } else if (value>9000) {
                return Swal.fire({
                    imageUrl: 'https://i.imgur.com/psA9jHo.gif?noredirect',
                    imageWidth: 500,
                    imageHeight: 261,
                    imageAlt: 'ITS OVER 9000!',
                    animation: true
                  })
              }},
        width: '700px',
        progressStepsDistance: '1 px',
        progressSteps: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        background: '#fff url(resources/background.jpg)',
     
  backdrop: `
    rgba(0,0,0,0)
    url(resources/wizard0.gif)
    bottom
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
        {title: 'A name of an elegant weapon'}, //result.value[6]
        {title: 'How many days you fought your enemies?'}, //result.value[7]
        {title: 'What did the villain right before his death?'}, //result.value[8]
        {title: 'Which part of bad guy you chopped off?'}, //result.value[9]
      ]).then(result => 
            document.getElementById("Tale").innerHTML = "<p>Read this with respect and dignity:</p> <p>Once upon a time, in a democratic constitutional kingdom of " 
            + result.value[2] + " - lived a champion, great protector of human rights, freedoms and amendments, noble Sir " 
            + result.value[0] + " who was " 
            + result.value[1] + " years old . But once, all of a sudden simple folk and taxpayers of " 
            + result.value[2] + " were put into a grave jeopardy. Despicable " 
            + result.value[3] + " brought terror upon all " 
            + result.value[2] + " residents, devastated their villages and robbed caravans. It was the time for benevolent " 
            + result.value[0] + " to get into a long and dangerous journey to the most terrifying place in the world, the infamous " 
            + result.value[4] + " where beast were dwelling.</p> <p>On his way to glory our hero visited ancient grove and met an old wise " 
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
            + result.value[4] + ". <h4>...Here our story ends.</h4>" 
            + "<h4>I hope you enjoyed. You can also copy-paste your tale in comments. Also leave your suggestions in comment section. Thank you and have a good one!</h4>"
          )}

// The JS alert version of TellTale function:

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