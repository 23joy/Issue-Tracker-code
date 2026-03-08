let currentTab='all';
const tabActive=["bg-[#4A00FF]",'border-blue-900',"text-white"]
const tabInActive=["bg-white","text-slate-700","border-slate-200"];

function switchTab(tab){
    currentTab=tab;

    const tabs=['all','open','close']

    for(const t of tabs){
        const tabName=document.getElementById("tab-" + t );
        if(t===tab){
            tabName.classList.remove(...tabInActive)
            tabName.classList.add(...tabActive)
        }
        else{
            tabName.classList.remove(...tabActive)
            tabName.classList.add(...tabInActive)
        }
    }
    const url=`https://phi-lab-server.vercel.app/api/v1/lab/issues`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayLavelWord(data.data))
};

const displayLavelWord=(words)=>{
    const issueContainer=document.getElementById("issue-container")
    issueContainer.innerHTML="";
    words.forEach((word)=>{
        console.log(word);
        const card=document.createElement("div");
        card.innerHTML=`
        <div class="bg-white rounded-xl shadow-sm  p-4 space-y-2">
         <div class="flex justify-between mb-3 p-4">
            <img class="w-7 h-7" src="./assets/Open-Status.png" alt="">
            <button class="bg-red-300 rounded-3xl px-4 py-1 flex items-center w-">${word.priority}</button>
        </div>
           <div>
                <h2 class="font-semibold text-4">${word.title}</h2>
                <p class="text-3 text-[#64748B]">${word.description} </p>
            </div>
            <div class="my-4 flex gap-1">
                <button class="bg-red-200 border border-red-300 text-red-700 rounded-2xl p-1.5"><i class="fa-solid fa-bug"></i>Bug</button>
                <button class="bg-yellow-200 border border-amber-500 text-amber-700 rounded-3xl p-1.5">HELP WANTED</button>
            </div>
            
            <hr>
            <div class="mt-4">
                <p class="text-3 text-[#64748B]">#1by john_doe</p>
                <p class="text-3 text-[#64748B]">${word.updatedAt}</p>
            </div>
        </div>
        `
        issueContainer.append(card)
    })
}
switchTab(currentTab);
