function log(element) {
    if (element.innerText=="Logout") {
        element.innerText="Login";
    }
    else {
    element.innerText="Logout";
}
}

function vanish(element) {
    element.remove();
}