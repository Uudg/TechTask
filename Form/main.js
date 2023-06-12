const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')

const firstLabel = document.getElementsByTagName('label')[0]
const lastLabel = document.getElementsByTagName('label')[1]
const emailLabel = document.getElementsByTagName('label')[2]


const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const check = (el, label) => {
    if (el.value) {
        if (el.classList.contains('error')){
            el.classList.remove('error')
            label.classList.remove('error')
        } 
        return true;
    }
    el.classList.add('error');
    label.classList.add('error');
    return false;
}

checkEmail = (el, label) => {
    if (el.value.match(format)){ 
        if (el.classList.contains('error')){
            el.classList.remove('error')
            label.classList.remove('error')
        } 
        return true;
    }
        el.classList.add('error')
    label.classList.add('error')
    return false

}

const myForm = () => {
    if (
        check(firstName, firstLabel) &&
        check(lastName, lastLabel) &&
        checkEmail(email, emailLabel)
    ) alert(
        `Done`
    )
    else return
}
