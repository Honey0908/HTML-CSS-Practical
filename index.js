const left_control=document.getElementById("left-control");
const right_control=document.getElementById("right-control");

// Product List1
const list=document.getElementsByClassName("product-list-items")[0];
// width of each Item
const itemWidth=list.children[0].offsetWidth;

// show and hide left and right controlls
function show_hide_buttons(){
    let scrollWidth= list.scrollWidth - list.clientWidth;
    console.log(scrollWidth);
    left_control.style.display= list.scrollLeft=== 0 ? "none" : "block";
    right_control.style.display= list.scrollLeft === scrollWidth ?"none":"block";
}

show_hide_buttons()


// 2 items will be scrolled on right
left_control.addEventListener("click", ()=>{
    list.scrollTo(list.scrollLeft-itemWidth*3,0)
    show_hide_buttons();
});

// 2 items will be scrolled on left
right_control.addEventListener("click", ()=>{
    list.scrollTo(list.scrollLeft+itemWidth*3,0)
    show_hide_buttons();
});

