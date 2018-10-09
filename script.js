//Create array containing names of entrants
var reviewers = new Array('Anna Allen',
                      'lisa gale',
                      'Raff Calitri',
                      'Amy Sarah'
                      );

//Generate random integer between 1 and the number of entrants
var randomNum = Math.floor((Math.random()*reviewers.length)+1);

//Fetch element with 'winner' ID and update content to include winner
var elWinner = document.getElementById('Winner');
var textWinner = elWinner.textContent;
elWinner.textContent = textWinner + ' ' + reviewers[randomNum-1];
