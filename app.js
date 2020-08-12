
// search bar hover code
const searchBar = document.querySelector('.search-bar');
const middleDiv = document.querySelector('.search-div');

searchBar.addEventListener('focus', ()=>{
    middleDiv.classList.toggle('search-div-effects');
});
searchBar.addEventListener('blur', ()=>{
    middleDiv.classList.toggle('search-div-effects');
});


// left side navigation hover code
let activeTab;
const parentDiv = document.querySelector('.left-side-navigation-div');
const left_side_navigation = document.querySelectorAll('.left-side-navigation-div>div');

parentDiv.addEventListener('mouseover', ()=>{
    openSideMenu();
});

parentDiv.addEventListener('mouseout', ()=>{
    closeSideMenu();
});

function openSideMenu(){
    left_side_navigation.forEach((x)=>{
        x.classList.add('hovers');
        x.classList.remove('no-hovers');
        document.querySelectorAll(`.left-side-navigation-div>div>span`).forEach((y)=>{
            y.style.display = "block";
        });
    });
    parentDiv.classList.add('single-navigation');
    MenuBarClicked=true;
}
function closeSideMenu(){
    left_side_navigation.forEach((x)=>{
        x.classList.remove('hovers');
        x.classList.add('no-hovers');
        document.querySelectorAll(`.left-side-navigation-div>div>span`).forEach((y)=>{
            y.style.display = "none";
        });
    });
    parentDiv.classList.remove('single-navigation');
    MenuBarClicked=false;
}
//hover on inactive tabs
left_side_navigation.forEach((x)=>{
    x.addEventListener('mouseover', ()=>{
        if('#'+x.id!=activeTab)
            x.classList.add('inactive');
    });
});

left_side_navigation.forEach((x)=>{
    x.addEventListener('mouseout', ()=>{
        if('#'+x.id!=activeTab)
            x.classList.remove('inactive');
    });
});

//IIFE
(()=>{
    addActiveClass('notes');
})();

//adding active class
function addActiveClass(name){
    if(activeTab!=undefined)
        document.querySelector(activeTab).classList.remove('active');

    removeInactiveClass();
    activeTab = "#"+name;
    document.querySelector(activeTab).classList.add('active');
}

//removing inactive class
function removeInactiveClass(){
    left_side_navigation.forEach((x)=>{
        if(x.classList.contains('inactive'))
            x.classList.remove('inactive');
    });
}


//handling clicks on side navigations
const title = document.querySelector('.logo-text');
let titles = {notes:'Keep',reminders:'Reminders',archive:'Archive',bin:'Bin'};

left_side_navigation.forEach((x)=>{
    x.addEventListener('click', ()=>{
        addActiveClass(x.id);
        x.id==='edit-label' ? openLabels() : title.innerHTML = titles[x.id];
    });
});

const isOpened = document.querySelector('.edit-labels-dialog');
function openLabels(){
    isOpened.style.display = isOpened.style.display==='none'? 'grid' : 'none';
}

//handling menu icon clicks
const menu_icon = document.querySelector('.menu-bar-icon');
let MenuBarClicked=false;

menu_icon.addEventListener('click', ()=>{
    MenuBarClicked ? closeSideMenu() : openSideMenu();
});

