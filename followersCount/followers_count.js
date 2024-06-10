let count = 0; //initialize count to 0

function increaseCount() {
    count++; // increment the count by 1
    displayCount(); //display the count
    checkCountValue(); //check count value and display when it hits 10 and 20 followers
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue() {
    if (count === 10){
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Congratulations!");
    }
}