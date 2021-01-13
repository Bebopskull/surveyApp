const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const questions = [`What's your name? Nicknames are also acceptable :) \n`,
`What's an activity you like doing? \n`,
`What do you listen to while doing that? \n`,
`Which meal is your favourite (eg: dinner, brunch, etc.) \n`,
`What's your favourite thing to eat for that meal? \n`,
`Which sport is your absolute favourite? \n`,
`What is your superpower? In a few words, tell us what you are amazing at! \n`];

let answers = {};

rl.question(questions[0], (answer)=>{
  answers.name=answer;
  rl.question(questions[1], (answer)=>{
    answers.activity=answer;
    rl.question(questions[2], (answer)=>{
      answers.music=answer;
      rl.question(questions[3], (answer)=>{
        answers.meal=answer;
        rl.question(questions[4], (answer)=>{
          answers.sport=answer;
          rl.question(questions[5], (answer)=>{
            answers.superpower=answer;
            console.log(`The day that ${answers.name} decided to eat ${answers.meal} before their weekly match of ${answers.sport}, in which they can test their ${answers.superpower}, they ${answers.music}ed all the way long, for them this is not simple matter of doing some ${answers.activity}, this is serious bussiness...or something like that.`);
            rl.close();
          });
        });
      });
    });
  });
});
 







