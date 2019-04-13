function TellTale() {
let KnightName = prompt("How do people call you, Oh noble knight?");
let Age = prompt("How old is our hero(in years)?");
let Home = prompt("What is the name of kingdom you sworn to protect?");
let BadGuy = prompt("What is the name of disgusting villain ?");
let Dwelling = prompt("Give me the place where that mean character lives");
let WiseMan = prompt("Give me a name of a wiseman");
let Weapon = prompt("A name of an elegant weapon");
let FightDays = prompt("How many days you fought your enemies?");
let BeforeDeath = prompt("What did the villain right before his death?");
let ChopOff = prompt("Which part of bad guy you chopped off?");
document.getElementById("Tale").innerHTML = "<p>Read this with respect and dignity:</p> Once upon a time, in a democratic constitutional kingdom of " 
+ Home + " - lived a champion, great protector of human rights, freedoms and amendments, noble Sir " 
+ KnightName + " who was " 
+ Age + " years old. But once, all of a sudden simple folk and taxpayers of " 
+ Home + " were put into a grave jeopardy. Despicable " 
+ BadGuy + " brought terror upon all " 
+ Home + " residents, devastated their villages and robbed caravans. It was the time for benevolent " 
+ KnightName + " to get into a long and dangerous journey to the most terrifying place in the world, the infamous " 
+ Dwelling + " where beast were dwelling. On his way to glory our hero visited ancient grove and met an old wise " 
+ WiseMan + ", who commended an ultimate weapon in our hero\"s hands, the legendary " 
+ Weapon + ". Tedious fight lasted for " 
+ FightDays + " days, and our brave " 
+ KnightName + " was exhausted, but he managed to chop enemy\"s " 
+ ChopOff + " off. The " 
+ BadGuy + " " 
+ BeforeDeath + " and gave up the ghost at last. Since then the kingdom of " 
+ Home + " has grown strong and flourished. And our champion was honorable named Sir " 
+ KnightName + " the " 
+ BadGuy + "slayer and the Great Devastator of " 
+ Dwelling + ".<p>...Here our story ends.</p>" 
+ "<p>I hope you enjoyed. You can also copy-paste your tale in comments. Also leave your suggestions in comment section. Thank you and have a good one!</p>";
}