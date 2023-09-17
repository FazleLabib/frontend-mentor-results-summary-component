let subject = document.querySelectorAll('.subject');
let title = document.querySelectorAll('.subject .title p');
let icon = document.querySelectorAll('.subject .title img');
let marks = document.querySelectorAll('.subject .marks .obtained');
let totalAvg = document.querySelector('.results-card .circle .obtained-total');


function populate() {
    fetch('data.json').then((response) => {
        response.json().then((subjects) => {
            totalScore = 0;
            for (let i = 0; i < subject.length; i++) {
                icon[i].src = subjects[i].icon;
                title[i].innerHTML = subjects[i].category;
                marks[i].innerHTML = subjects[i].score;
                totalScore += subjects[i].score;
            }
            totalAvg.innerHTML = Math.round(totalScore / subject.length);
        })
    })

}

populate();