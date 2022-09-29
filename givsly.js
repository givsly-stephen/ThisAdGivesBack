function injectable(data) {
    return `
    <style>
    body { margin: 0; padding: 0; }
    #givsly {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 12px;
    }
    #givsly #overlay { 
        width: ${givslyConfig.expose.width}; 
        height: ${givslyConfig.expose.height};
        z-index: 99999;
        position: fixed;
        ${givslyConfig.expose.position};
        background-color: #eee;
        display: flex;
        align-items: center;
        justify-content: center;  
        cursor:pointer;

    }
    #givsly #overlay #inner { 
        text-align: center;
    }
    #givsly #overlay #l2 { font-weight: bold; font-size: 13px;  }
    #givsly #interact {
        font-size: 26px;
        width: auto; 
        height: ${givslyConfig.creative.height};
        z-index: 99998;
        position: fixed;
        bottom: 0; right: 0; left: 0;
        background-color: #eee;
        text-align: center;
        vertical-align: middle;
        display: none;
        padding: 20px ;
    }
    #givsly #interact li {
        border: 3px solid orange;
        border-radius: 40px;
        font-weight: bold;
        margin: 20px auto;
        width: 80%;
        padding: 20px;
        list-style: none;
        cursor:pointer;
    }
    #givsly #header {
        height: 40px;
    }
    #givsly #npolist {
        padding: 0; margin: 0;
    }
    #givsly #interact #close {
        height: 100%;
        width: 40px;
        position: fixed;
        right: 20px;
        cursor:pointer;
    }
</style>

    <div id="givsly">
    <div id="overlay" onclick="expose(this)"> 
        <div id="inner">
            <div id="l1">This ad</div>  
            <div id="l2">GIVES BACK</div>
        </div>
    </div>

    <div id="interact" > 
        <div id="header">
            <div id="close" onclick="closewindow(this)">X</div>
        </div>
        
        ${givslyConfig.message}

        <ul id="npolist" />

    </div>
</div>
`
}

if (typeof givslyConfig === 'undefined') {
    alert("Givsly good ads not configured - missing `givslyConfig`")
} else {
    const payload = injectable(givslyConfig);
    document.querySelector(':root').insertAdjacentHTML('beforeend', payload);
    const npolist = document.getElementById('npolist')
    givslyConfig.npos.forEach(function(npo) {
        npolist.insertAdjacentHTML("beforeend", `<li onclick="selectNpo(this, '${npo.id}')">${npo.name}</li>`);
    });
}
 
const elem = document.getElementById('interact');
function expose() {elem.style.display = "block";}
function closewindow() {elem.style.display = "none";}
function selectNpo(lineItem, npoId) {
    lineItem.style.background = "orange"
    fetch(givslyConfig.npoev+npoId)
}