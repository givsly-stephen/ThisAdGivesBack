function injectable(data) {
    return `
    <style>
    #givsly {z-index: 99999;top:0; left:0;position: absolute;}
    #givsly #act {
        z-index: 99999;display: flex;cursor:pointer;
        position:absolute;
        ${givslyConfig.activate.position};
    }
    #givsly #act #tagb {
        width: ${givslyConfig.activate.width}; 
        height: ${givslyConfig.activate.height};
    }
    
    #givsly #experience {
        font-size: 20px;
        width: auto; 
        height: 450px;
        z-index: 99998;
        position: fixed;
        bottom: 0; right: 0; left: 0;
        background-color: #eee;
        text-align: center;
        vertical-align: middle;
        display: none;
        padding: 20px ;
    }
    #givsly #experience li {
        border: 3px solid orange;
        border-radius: 40px;
        font-weight: bold;
        margin: 20px auto;
        width: 80%;
        padding: 20px;
        list-style: none;
        cursor:pointer;
    }

    #givsly  #experience #header {
        height: 40px;
    }

    #givsly  #experience #npolist {
        padding: 0; margin: 0;
    }

    #givsly #experience #close {
        height: 100%;
        width: 40px;
        position: fixed;
        right: 20px;
        cursor:pointer;
    }


</style>

    <div id="givsly" style="width: ${givslyConfig.ad.width}; height: ${givslyConfig.ad.height};">
        <div id="act" onclick="activate(this)"> 
            <img src="../tagb.png" id="tagb"/>
        </div>
        <div id="experience" > 
            <div id="header">
                <div id="close" onclick="closewindow(this)">X</div>
            </div>
            ${givslyConfig.message}
            <ul id="npolist" />
        </div>
    </div>
`
}

var experience = null;
function injectTAGB() {
    if (typeof givslyConfig === 'undefined') {
        alert("Givsly good ads not configured - missing `givslyConfig`")
        return
    }

    const payload = injectable(givslyConfig);

    const ad_container = document.querySelector(':root')
    if (!ad_container) {
        alert("could not find div " + ad_container)
        return
    } 
    ad_container.insertAdjacentHTML('beforeend', payload);
    
    const npolist = document.getElementById('npolist')
    givslyConfig.npos.forEach(function(npo) {
        npolist.insertAdjacentHTML("beforeend", `<li onclick="selectNpo(this, '${npo.id}')">${npo.name}</li>`);
    })
   
    experience = document.getElementById('experience');
}

 
function activate() { experience.style.display = "block";}
function closewindow() {experience.style.display = "none";}
function selectNpo(lineItem, npoId) {
    lineItem.style.background = "orange"
    fetch(givslyConfig.npoev + npoId)
}

// script load using defer should call this after load
injectTAGB()
