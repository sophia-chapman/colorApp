const SAMPLE_LIST = {
    apple: 'red',
    grass: 'green',
    dark: 'black',
    aqua: 'aqua-marine',
    dodger: 'Dodger-blue',
};

function fetchSample(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(JSON.stringify(SAMPLE_LIST));
        }, 500);
    });
};

function getData(){
    fetchSample()
    .then(data => {
        return JSON.parse(data);
    })
    .then(loopThroughColors);
};

function loopThroughColors(colors){
    const colorNames = Object.keys(colors);
    for (let i = 0; i < colorNames.length; i += 1){
        setTimeout(()=> {
            renderColor(colorNames[i], colors[colorNames[i]])
        }, 1000 * i)
    }
};

function renderColor(name, color){
    const colorList = document.getElementById('colors')
    const li = document.createElement('li');
    li.style.color = color.replace('-', '').toLowerCase();
    li.innerText = name;
    colorList.append(li);
};

getData();