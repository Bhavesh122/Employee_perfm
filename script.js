function confirmSubmission() {
    var confirmSubmit = confirm('Are you sure you want to submit?');
    if (confirmSubmit) {
        checkEligibility();
    }
}

function checkEligibility() {
    var taskScore = parseInt(document.getElementById('taskScore').value);
    var numTasks = parseInt(document.getElementById('numTasks').value);

    var taskScoreInput = document.getElementById('taskScore');
    var numTasksInput = document.getElementById('numTasks');
    var resultElement = document.getElementById('result');

    if (isNaN(taskScore) || taskScore < 0) {
        alert('Please enter a valid task score.');
        taskScoreInput.classList.add('invalid');
        return;
    }

    if (isNaN(numTasks) || numTasks < 0) {
        alert('Please enter a valid number of tasks.');
        numTasksInput.classList.add('invalid');
        return;
    }

    taskScoreInput.classList.remove('invalid');
    numTasksInput.classList.remove('invalid');
    resultElement.innerHTML = '';

    if (taskScore >= 80 && numTasks >= 5) {
        resultElement.innerHTML = 'Congratulations! You are eligible for a reward.';
        resultElement.classList.add('success');
    } else {
        resultElement.innerHTML = 'Sorry, you are not eligible for a reward.';
        resultElement.classList.add('failure');
    }
}

function handleServerError() {
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'An unexpected error occurred. Please try again later.';
    resultElement.classList.add('failure');
}

function sendFeedback() {
    var feedback = prompt('Please provide your feedback:');
    if (feedback) {
        // Send feedback to server (add server-side code for this)
        alert('Thank you for your feedback!');
    }
}
