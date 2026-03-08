let currentTab='all';
const tabActive=["bg-[#4A00FF]",'border-blue-900',"text-white"]
const tabInActive=["bg-white","text-slate-700","border-slate-200"];

const countIssue=document.getElementById("count-issue")
countIssue=innerText.value;
console.log(countIssue)

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
};
function loadIssues(){
    const url=`https://phi-lab-server.vercel.app/api/v1/lab/issues`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        let issues=data.data;
        displayLavelWord(issues)
    })
}
loadIssues();

const loadWordDetail=async(id)=>{
    const url= ` https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`

    const res=await fetch(url);
    const details=await res.json();
    displayWordDetails(details.data);
};

const displayWordDetails=(word)=>{
    console.log(word)
    const detailsContainer=document.getElementById("details-container")
    detailsContainer.innerHTML=`
     <h2 class="font-bold text-6 text-[#1F2937]">${word.title}</h2>
        <div class="flex gap-3 items-center">
            <button class="btn btn-success rounded-3xl">Opened</button>
            <ul class="flex gap-1 ">
                <li>Opened by Fahim Ahmed</li>
                <li>${word.updatedAt}</li>
            </ul>
        </div>
        <div class="my-4 flex gap-1">
            <button class="bg-red-200 border border-red-300 text-red-700 rounded-2xl p-1.5"><i class="fa-solid fa-bug"></i>Bug</button>
            <button class="bg-yellow-200 border border-amber-500 text-amber-700 rounded-3xl p-1.5">HELP WANTED</button>
        </div>
        <p>${word.description}.</p>
        <div class="flex items-center px-4 py-[19px] bg-[#F8FAFC] gap-">
            <div class="w-1/2">
                <h2 class="text-[#64748B]">Assignee:</h2>
                <h2>${word.author}</h2>
            </div>
            <div class="w-1/2">
                <h2 class="text-[#64748B]">Piority:</h2>
                <h2 class="btn btn-error  rounded-4xl">${word.priority} </h2>
            </div>
        </div>
    
    `;
    document.getElementById("word_modal").showModal();

}

const displayLavelWord=(words)=>{
    const issueContainer=document.getElementById("issue-container")
    issueContainer.innerHTML="";
    words.forEach((word)=>{
        console.log(word);
        const card=document.createElement("div");
        card.innerHTML=`
        <div onclick="loadWordDetail(${word.id})" class="bg-white rounded-xl shadow-sm  p-4 space-y-2">
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
