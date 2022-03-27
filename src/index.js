document.addEventListener("DOMContentLoaded", () => {
    // your code here
    let submission = document.getElementById("create-task-form");
    submission.addEventListener("submit", function(e) {
        e.preventDefault();
        // alert("Well job");
        let usersInput = document.getElementById("new-task-description").value;
        console.log(usersInput);


        let li = document.createElement("li");
        li.append(usersInput);
        document.getElementById("tasks").appendChild(li);

    });
});