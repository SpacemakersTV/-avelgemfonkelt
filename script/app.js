const handleButtons = () => {
    for(const button of buttons) {
        button.addEventListener('click', function(){
            midiChan = button.getAttribute('midi-chan');
            postMessage(midiChan)
        })
    }
}

const postMessage = function(chan) {
    var url = 'https://avelgemfonkelt2021.azurewebsites.net/api/interactive/selectmidi';

    data = {
        "deviceid": "mac-wout",
        "chan": chan
    }

    fetch(url, {
            method: 'POST',
            body: JSON.stringify(data), 
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('Success:', response))
        .catch(error => console.error('Error:', error));
}

const getDOMElements =  () => {
    buttons = document.querySelectorAll('.js-button')
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    getDOMElements();
    handleButtons();

});