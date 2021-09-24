var questionEl = document.getElementById('question')
var optionsEl = document.getElementById('options')
var countDown = 40
var timerEl= document.getElementById('timer')
var round = 0
var startEl = document.getElementById('startBtn')
var submitEl = document.getElementById('SubmitBtn')
var resultsEl = ""/4
var c=0
startEl.addEventListener('click',function (){
    questionEl.innerHTML= questions[round].question
    var option0 = document.createElement('button')
    option0.setAttribute("class","answer")
    option0.setAttribute("id","btnOne")
    option0.innerHTML= questions[round].Options[0]
    optionsEl.append(option0)
    
    var option1 = document.createElement('button')
    option1.setAttribute("class","answer")
    option1.setAttribute("id","btnTwo")
    option1.innerHTML= questions[round].Options[1]
    optionsEl.append(option1)
    
    
    var option2 = document.createElement('button')
    option2.setAttribute("class","answer")
    option2.setAttribute("id","btnThree")
    option2.innerHTML= questions[round].Options[2]
    optionsEl.append(option2)
    
    
    var option3 = document.createElement('button')
    option3.setAttribute("class","answer")
    option3.setAttribute("id","btnFour")
    option3.innerHTML= questions[round].Options[3]
    optionsEl.append(option3)


countdownInterval = setInterval(function () {
// countdown.setAttribute('style','display:block;')
// countdown.textContent = "Time: " + countDown
countDown--
//countDown= countDown -1
timerEl.innerHTML= countDown
if (countDown <=0) {
    title.textContent = "Out Of Time!"
clearInterval(countdownInterval)
}
}, 1000);
})



var questions = [
    {question: "What are arrays used to store?",
    Options: ["Fixed amount of the same data", "Different data","Java script","Headings"],
    answer: "Fixed amount of the same data"

    },
    {
        question: "What does HTML stand for?",
        Options: ["Hightext Markup Language", "Hypertext Markup Language","Hometext Markup Language", "Hypertool Markup Language"],
        answer: "Hypertext Markup Language"
    },
    {
        question: "What is computure coding?",
        Options: ["A list of functions","Telling a computure what to do", "Government conspriacy", "Paid tv programing"],
        answer: "Telling a computure what to do"

    },
    {
        question: "Which one of these is NOT a programing language?",
        Options: ["Python","Java","Ruby","Banana"],
        answer:"Banana"
    },
]
optionsEl.addEventListener("click", function(event){
    console.log(event.target.textContent)
    if  (event.target.textContent== questions[round].answer){
        console.log ("true")
        // {c++}
    }
else {
    console.log("false")
    countDown= countDown -10
    //countDown=-10
}

// submitEl.addEventListener('click', function() {
//     resultsEl.textContent=`${c}`;

// })

    round++
    questionEl.innerHTML= questions[round].question
    optionsEl.innerHTML=""

    var option0 = document.createElement('button')
        option0.setAttribute("class","answer")
        option0.setAttribute("id","btnOne")
        option0.innerHTML= questions[round].Options[0]
        optionsEl.append(option0)
        
        var option1 = document.createElement('button')
        option1.setAttribute("class","answer")
        option1.setAttribute("id","btnTwo")
        option1.innerHTML= questions[round].Options[1]
        optionsEl.append(option1)
        
        
        var option2 = document.createElement('button')
        option2.setAttribute("class","answer")
        option2.setAttribute("id","btnThree")
        option2.innerHTML= questions[round].Options[2]
        optionsEl.append(option2)
        
        
        var option3 = document.createElement('button')
        option3.setAttribute("class","answer")
        option3.setAttribute("id","btnFour")
        option3.innerHTML= questions[round].Options[3]
        optionsEl.append(option3)
        
    })
    
    var countdown = document.querySelector("#count7Down")
    var couuntdownInterval
    
    
// var title = document.getElementById('title')
// var textContent = document.getElementById('textContent')
// var container = document.getElementById('container')
// var secA = document.querySelector('.secA')
// var secB = document.querySelector('.secB')

// setTimeout(function() {
//     title.textContent = questions[i].question;
//     secA.appendChild(Option1);
//     Option1.textContent = questions[i].Options[0];
//     secA.appendChild(option1)
//     Option2.textContent = questions[i].Options[1];
//     secB.appendChild(Option3);
//     Option3.textContent = questions[i].Options[2];
//     secB.appendChild(Option4);
//     Option4.textContent = questions[i].Options[3];

//     document.getElementById('btnOne').onclick = chosenOption
//     document.getElementById('btnTwo').onclick = chosenOption
//     document.getElementById('btnThree').onclick = chosenOption
//     document.getElementById('btnFour').onclick = chosenOption
// })

// function chosenOption (){
//     usersinput = this.id;
//     i++;
//       title.textContent = questions[i].question;
//       Option1.textContent = questions[i].Options[0]; 
//       Option2.textContent = questions[i].Options[1];
//       Option3.textContent = questions[i].Options[2];
//       Option4.textContent = questions[i].Options[3];
// };
