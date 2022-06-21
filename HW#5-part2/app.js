"use strict"

const root = document.getElementById('root')

function sliceStr(str){
    return str.length>=11 ? str.slice(0, 11)+"..." : str
}

function validUrl(str){
    return str.toLowerCase().split(' ').join('-')
}

function start(){
    if(location.hash.slice(1).length){
        for(let el of tanks){
            if(validUrl(el.model)===location.hash.slice(1)){
                renderDetails(el)
                break;
            }
        }
    }
    else {
        renderMain()
    }
}

function renderMain(){
    root.innerHTML = `
    <div class="wrapper">
        <header class="main-header">
            <div class="container">
                <h1 class="header-text">Most popular tanks</h1>
            </div>
        </header>
        <main class="main-main">
            ${tanks.map(e=>{
                return `
                <a href="#${validUrl(e.model)}">
                    <div class="main-tank" title="Click to details">
                        <img src="${e.preview}" class="main-tank-img">
                        <div class="main-tank-title">
                            <img src="${e.country_image}" class="main-tank-country-img" title="${e.country.toUpperCase()}">
                            <h2 class="main-tank-level main-tank-title">${e.level}</h2>
                            <h2 class="main-tank-title" title="${e.model.toUpperCase()}">${sliceStr(e.model.toUpperCase())}</h2>
                        </div>
                    </div>
                </a>
                `
            }).join('')}
        </main>
    </div>
    `
}

function renderDetails(tank){
    root.innerHTML = `
    <div class="wrapper">
        <header class="details-header">
            <div class="container">
                <div class="details-header-content">
                    <img src="${tank.country_image}" class="details-header-img" title="${tank.country.toUpperCase()}"><!--
                    --><h1 class="details-header-title">${tank.model.toUpperCase()}</h1><!--
                    --><h2>(level) ${tank.level}</h2>
                </div>
            </div>
        </header>
        <main class="details-main">
            <div class="container">
                <div class="details-main-content">
                    <div class="tank-preview">
                        <h3 class="tank-preview-title">Preview</h3>
                        <img src="${tank.preview}" class="tank-preview-img">
                    </div>
                    <div class="tank-characteristics">
                        <h1 class="tank-characteristics-title">Characteristics</h1>
                        <table>
                              <tr>
                                <td>damage</td>
                                <td>${tank.details.damage}</td>
                              </tr>
                              <tr>
                                <td>breoning</td>
                                <td>${tank.details.breoning}</td>
                              </tr>
                              <tr>
                                <td>attack speed</td>
                                <td>${tank.details.attack_speed}</td>
                              </tr>
                              <tr>
                                <td>time of targeting</td>
                                <td>${tank.details.time_of_targeting}</td>
                              </tr>
                              <tr>
                                <td>ammunition</td>
                                <td>${tank.details.ammunition}</td>
                              </tr>
                        </table>
                    </div>
                </div>        
            </div>
        </main>
        <footer class="details-footer">
            <div class="container">
                <a href="#" class="to-list">Back to list view</a>
            </div>
        </footer>
    </div>
    `
}


start()


document.querySelector('#root').addEventListener('click', (event)=>{
    if(event.target.closest('a')){
        setTimeout(()=>{
            start()
        }, 0)
    }
})

