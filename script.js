const calcy = () => {
    let hindi = document.getElementById('hindi').value;
    let eng = document.getElementById('eng').value;
    let maths = document.getElementById('maths').value;
    let chem = document.getElementById('chem').value;
    let phy = document.getElementById('phy').value;
    let grades = "";


    let totalGrades = parseFloat(hindi) + parseFloat(eng) + parseFloat(maths) + parseFloat(chem) + parseFloat(phy);
    alert(totalGrades);

    let perc = (totalGrades / 500) * 100;
    alert(perc);

    debugger;

    if (perc <= 100 && perc >= 85) {
        grades = 'A';
    } else if (perc < 85 && perc >= 60) {
        grades = 'B';
    } else if (perc < 60 && perc >= 45) {
        grades = 'C';
    } else if (perc < 45 && perc >= 30) {
        grades = 'D';
    } else {
        grades = 'F';
    }

    if (perc >= 30) {
        document.getElementById('showData').innerHTML = ` Out of 500 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Pass. `
    }
    else {
        document.getElementById('showData').innerHTML = ` Out of 500 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Fail. `
    }

}