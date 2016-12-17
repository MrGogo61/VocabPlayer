$(function() {
// Quotes

var words = [];
words[0] ="AB: off, off away, apart";
words[1] ="ABIL:  aptitude, handy";
words[2] ="ABS: off, away from, apart (prefix)";
words[3] ="ACREB: bitter";
words[4] ="ACRO: pointed, upper, top, first";
words[5] ="ACU: sharp";
words[6] ="AD: to, towards, near (prefix)";
words[7] ="AER: air";
words[8] ="AG: move, go, do, drive, urge, ac";
words[9] ="AGOG: leading, bringing";
words[10] ="AGON: contest, struggle";
words[11]="AGR: field, land, country";
words[12]="ALA: a wing";
words[13]="ALI: others,another";
words[14]="ALT: High";
words[15]="ALTER: other";
/*words[]="";
words[]="";
words[]="";
words[]="";
words[]="";
words[]="";
words[]="";
words[]="";
words[]="";
words[]="";
words[]="";
words[]="";
words[]="";
words[]="";
words[]="";
words[]="";
words[]="";
words[]="";
words[]="";
words[]="";
words[]="";
words[]="";
words[]="";
words[]="";
words[]="";
words[]="";
words[]="";
words[]="";
words[]="";
words[]="";
words[]="";*/


var examples = []; 
examples[0]=new Array(3); 
examples[0][0] = "Aberration: A departure from what is normal, usual, or expected, typically one that is unwelcome";
examples[0][1] = "Abdicate: (of a monarch) renounce one's throne";
examples[0][2] = "Abject: (of a situation or condition) extremely bad, unpleasant, and degrading";

examples[1]=new Array(3); 
examples[1][0] = "Capability: The power or ability to generate an outcome";
examples[1][1] = "Ability: Possession of the means or skill to do something";
examples[1][2] = "Incapability: Lack of potential for developmet";

examples[2]=new Array(3); 
examples[2][0] = "Abstract: An abridgement or summary of a longer publication";
examples[2][1] = "Abstain: Restrain oneself from doing or enjoying something";
examples[2][2] = "Abstruse: Difficult to understand; obscure";

examples[3]=new Array(3); 
examples[3][0] = "Acerbity: A sharp bitterness";
examples[3][1] = "Exacerbate: To make worse (a problem, bad situation, negative feeling, etc.);";
examples[3][2] = "Acerbic: Tasting sour or bitter";

examples[4]=new Array(3); 
examples[4][0] = "Acronym: An acronym is a word or name formed as an abbreviation from the initial components in a phrase or a word";
examples[4][1] = "Acrobat: An athlete who performs acts requiring skill, agility and coordination";
examples[4][2] = "Acropolis: A citadel or fortified part of an ancient Greek city";

examples[5]=new Array(3); 
examples[5][0] = "Acute: Sharp or severe in effect; intense:";
examples[5][1] = "Acumen: The ability to make good judgements and take quick decisions";
examples[5][2] = "Acupuncture: The insertion of needles into living tissue, especially for remedial purposes";

examples[6]=new Array(3); 
examples[6][0] = "Adequate: Equal to some requirement";
examples[6][1] = "Adjourned: A suspension of proceedings to another time or place";
examples[6][2] = "Admonish: Warn or reprimand someone firmly";

examples[7]=new Array(3); 
examples[7][0] = "Aerial: Existing, happening, or operating in the air";
examples[7][1] = "Aeronaut: A traveler in a hot-air balloon, airship, or other flying craft";
examples[7][2] = "Aeronomy: The science of the upper atmosphere";

examples[8]=new Array(3); 
examples[8][0] = "Agility: The ability to be quick and graceful";
examples[8][1] = "Agitate: To move with a violent, irregular action";
examples[8][2] = "Coagulate: A mass formed by means of coagulation.";

examples[9]=new Array(3); 
examples[9][0] = "Demagogue: A political leader who seeks support by appealing to popular desires and prejudices rather than by using rational argument.";
examples[9][1] = "Pedagogue: A teacher, especially a strict or pedantic one";
examples[9][2] = "Synagogue: The building where a Jewish assembly or congregation meets for religious worship and instruction";

examples[10]=new Array(3); 
examples[10][0] = "Protagonist: The main character in any story, such as a literary work or drama";
examples[10][1] = "Agony: Extreme physical or mental sufferin";
examples[10][2] = "Antagonist: A person who actively opposes or is hostile to someone or something; an adversary";

examples[11]=new Array(3); 
examples[11][0] = "Agrarian: Of or relating to cultivated land or the cultivation of land";
examples[11][1] = "Peregrinate: peregrinate";
examples[11][2] = "Agriculture: The art or science of cultivating the ground, including the harvesting of crops";

examples[12]=new Array(3); 
examples[12][0] = "Alar: Relating to or resembling a wing or wings.";
examples[12][1] = "Aileron: The hinged part on the trailing edge of an airplane wing, used to control lateral turns";
examples[12][2] = "Aliform: Wing shaped";

examples[13]=new Array(3); 
examples[13][0] = "Alias: Used to indicate that a named person is also known or more familiar under another specified name";
examples[13][1] = "Alibi: A claim or piece of evidence that one was elsewhere when an act";
examples[13][2] = "Alien: Belonging to a foreign country or nation.";

examples[14]=new Array(3); 
examples[14][0] = "Altitude: The absolute height of a location, usually measured from sea level";
examples[14][1] = "Exalt: To raise in rank, status etc., to elevate";
examples[14][2] = "Contralto: The lowest female singing voice";

examples[15]=new Array(3); 
examples[15][0] = "Altercation: A noisy argument or disagreement, especially in public";
examples[15][1] = "Alter Ego: A person's secondary or alternative personality";
examples[15][2] = "Alternate: Occur in turn repeatedly"; 

/*examples[]=new Array(3); 
examples[][0] = "";
examples[][1] = "";
examples[][2] = "";

examples[]=new Array(3); 
examples[][0] = "";
examples[][1] = "";
examples[][2] = "";

examples[]=new Array(3); 
examples[][0] = "";
examples[][1] = "";
examples[][2] = "";

examples[]=new Array(3); 
examples[][0] = "";
examples[][1] = "";
examples[][2] = "";

examples[]=new Array(3); 
examples[][0] = "";
examples[][1] = "";
examples[][2] = "";

examples[]=new Array(3); 
examples[][0] = "";
examples[][1] = "";
examples[][2] = "";

examples[]=new Array(3); 
examples[][0] = "";
examples[][1] = "";
examples[][2] = "";*/


var randomNumber = Math.floor(Math.random()*words.length);

$('#words').text(words[randomNumber]);
$('#example1').text('--'+examples[randomNumber][0]);
$('#example2').text('--'+examples[randomNumber][1]);
$('#example3').text('--'+examples[randomNumber][2]);
$('#wordsCredit').text("Words Credit: myvocabulary.com");




$('#word').animate({
   	opacity: 1
}, 500);
});