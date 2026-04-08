class Blur {
    div;

    constructor(message) {
        const oBody = window.top?.document.querySelector("body");
        this.div = window.top?.document.createElement("div");

        this.div.id = "blurred_background";

        this.div.innerHTML = `
        <style>

        #blurred_background{
            position:fixed;
            top:0;
            left:0;
            width:100vw;
            height:100vh;
            backdrop-filter: blur(6px);
            background: rgba(0,0,0,0.25);
            z-index:1001;
        }

        #modal{
            position:fixed;
            bottom:90px;
            right:20px;
            width:320px;
            background:white;
            border-radius:10px;
            box-shadow:0 5px 15px rgba(0,0,0,0.3);
            padding:10px;
        }

        #modal button{
            margin-top:8px;
            padding:6px 10px;
            border:none;
            background:#0073aa;
            color:white;
            border-radius:5px;
            cursor:pointer;
        }

        </style>

        <div id="modal">
            <div><x-chat></x-chat></div>
            <button id="clear_chat">Close</button>
        </div>
        `;

        oBody?.insertAdjacentElement("afterbegin", this.div);
    }

    close(){
        this.div.remove();
    }
}

const suffix = (Math.random()*100).toFixed().toString();

document.querySelector("body").insertAdjacentHTML("beforeend",`

<style>

#fab${suffix}{
position:fixed;
bottom:20px;
right:20px;
width:60px;
height:60px;
border:none;
border-radius:50%;
background:#0073aa;
color:white;
font-size:20px;
cursor:pointer;
box-shadow:0 4px 10px rgba(0,0,0,0.3);
}

#fab${suffix}:hover{
background:#005f8d;
}

</style>

<button id="fab${suffix}">💬</button>

`);

document.querySelector(`#fab${suffix}`).addEventListener("click",()=>{

    const blur = new Blur("");

    document.querySelector(`#clear_chat`)
        .addEventListener("click",()=>blur.close());

});
