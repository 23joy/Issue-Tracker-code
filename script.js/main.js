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
}
switchTab(currentTab);

// document.getElementById("btn-search").addEventListener("click",function(){
//     const input=document.getElementById("input-search")
//     const searchValue=input.value
//     console.log(searchValue);
// })