let myInput = document.getElementById('myInput');

let db = firebase.database();

let myName = prompt("Enter your Name");



const d = new Date();

db.ref("messages").on("child_added", function (snapshot) {
    let html = '';
    html += "<li id='message-" + snapshot.key + "'>";

    if (snapshot.val().sender == myName) {
        html += "<button data-id='" + snapshot.key + "' onclick='deleteMessage(this)'>"
        html += "Delete"
        html += "</button>" + "<br>"

    }
    html += snapshot.val().sender + "<br>" + snapshot.val().message + "" + d.getHours() + ":" + d.getMinutes();
    html += "</li>";

    document.getElementById("messages").innerHTML += html;
});

function deleteMessage(self) {
    let messageId = self.getAttribute("data-id");

    db.ref('messages').child(messageId).remove();

};

db.ref('messages').on("child_removed", function(snapshot) {
    document.getElementById("message-" + snapshot.key).innerHTML = "This message was deleted"
});

document.getElementById("blur").addEventListener("click", function(event) {
    let message = myInput.value;
    
        if (message != '') {
            db.ref('messages').push().set({
                'sender': myName,
                "message": message
            });
            event.preventDefault();
        }
    
        return false;
       
    });