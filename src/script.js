function display() {
    var resultOne;
    var resultTwo;

    var ele = document.getElementsByName('q-1');          
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked) {
            resultOne = ele[i].value;
        }
    }

    var elem = document.getElementsByName('q-2');          
    for(i = 0; i < elem.length; i++) {
        if(elem[i].checked) {
            resultTwo = elem[i].value;
        }
    }

    if (resultOne && resultTwo === 'answer-1') {
        document.getElementById('result').innerText = "Accountant because you like maths";
    } else if (resultOne === 'answer-1' && resultTwo === 'answer-2') {
        document.getElementById('result').innerText = "Marketing";
    } else if (resultOne === 'answer-1' && resultTwo === 'answer-3') {
        document.getElementById('result').innerText = "Pilot \n we don't think this is a good job for you";
    } else {
        document.getElementById('result').innerText = "Developer";
    }

    const results = [resultOne, resultTwo];
    console.log(results);

    return results;
}

function getResults() {
    const postcode = document.getElementById('postcode').value;
    if (postcode == 'M4 4AQ') {
        
    }
}