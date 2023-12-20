const API_KEY = ' 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';
const submitButton = document.querySelector('#submit');
const outPutElement = document.querySelector('#output')
const inputElement = document.querySelector('input')
const historyElement = document.querySelector('.history')
const buttonElement = document.querySelector('button')
let activeNumber = 1
let isNewChat = true

function changeInput(value) {
    const inputElement = document.querySelector('input')
    inputElement.value = value
}

function changeActiveNumberTo(title) {
    isNewChat = false
    fetch('http://localhost:8080/history')
        .then(response => response.json())
        .then(data => {
            let count = 1
            data._embedded.history.forEach(history => {
                    if(title === history.title){
                        activeNumber = history.id;
                        throw new Error
                    }
                });
        })
        getDatabaseMessages()
        .catch(error => {
            console.error('Error:', error);
        });
}

function getDatabaseTitle() {
    const historyElement = document.querySelector('.history')
    historyElement.innerHTML = ''
    fetch('http://localhost:8080/history')
        .then(response => response.json())
        .then(data => {
            data._embedded.history.forEach(history => {
                const pElements = document.createElement('p')
                pElements.textContent = history.title
                pElements.addEventListener('click', () => changeActiveNumberTo(history.title))
                historyElement.append(pElements)
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
function getDatabaseMessages() {
    outPutElement.innerHTML = ''
    fetch(`http://localhost:8080/message/search/findByHistory_Id?history_id=${activeNumber}`)
        .then(response => response.json())
        .then(data => {
            data._embedded.message.forEach(message => {
                const pElements = document.createElement('p');
                const pElements2 = document.createElement('p');
                pElements.textContent = message.question;
                pElements2.textContent = message.answer;
                outPutElement.append(pElements);
                outPutElement.append(pElements2);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

async function getMassage() {
    const historyElement = document.querySelector('.history')
    const inputElement = document.querySelector('input')

    const options= {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: inputElement.value}],
            max_tokens: 100
        })
    }
    try{
        const response = await fetch('https://api.openai.com/v1/chat/completions', options);
        const data = await response.json();
        const tempQuestion = data.choices[0].message.content
        if(data.choices[0].message.content && inputElement.value) {
            if(isNewChat === true) {
                let senddata = {
                    'title': inputElement.value
                }
               await fetch('http://localhost:8080/history', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(senddata)
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log('new history pushed');
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            }
            isNewChat = false
            let senddata = {
                'question': inputElement.value,
                'answer': tempQuestion,
                'history' : "http://localhost:8080/history/"+activeNumber
            }
                await fetch('http://localhost:8080/message', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(senddata)
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log('new message pushed');
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            getDatabaseTitle()
            getDatabaseMessages()
            }
    }catch (error) {
        console.error(error)
    }
}

submitButton.addEventListener('click',getMassage);

function clearInput(){
    isNewChat = true
    inputElement.value = ''
    outPutElement.innerHTML = ''
}

buttonElement.addEventListener('click', clearInput)
//