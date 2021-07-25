const refs = {
  parent: document.querySelector("#parent"),
  child: document.querySelector("#child"),
  innerChild: document.querySelector("#inner-child"),
};

refs.parent.addEventListener("click", onParentClick);
refs.child.addEventListener("click", onChildClick);
refs.innerChild.addEventListener("click", onInnerChildClick);

function onParentClick(evt) {
  console.log("onParentClick");
  console.log("onParentClick -> evt.target", evt.target);
  console.log("onParentClick -> evt.currentTarget", evt.currentTarget);
}
function onChildClick(evt) {
  console.log("onChildClick");
  console.log("onChildClick -> evt.target", evt.target);
  console.log("onChildClick -> evt.currentTarget", evt.currentTarget);
}
function onInnerChildClick(evt) {
  console.log("onInnerChildClick");
  console.log("onInnerChildClick -> evt.target", evt.target);
  console.log("onInnerChildClick -> evt.currentTarget", evt.currentTarget);
}
// event.target - целевой исходный элемент, туда куда клацнули
// event.currentTarget - текущий элемент,на слушателе когторого споймали событие

// // onInnerChildClick
//  onInnerChildClick ->evt.target <div id=​"inner-child">​INNER-CHILD​</div>​
//  onInnerChildClick -> evt.target <div id=​"inner-child">​INNER-CHILD​</div>​
//  onChildClick
//  onChildClick -> evt.target <div id=​"inner-child">​INNER-CHILD​</div>​
//  onChildClick -> evt.target <div id=​"child">​…​</div>​
//  onParentClick
//  onParentClick -> evt.target <div id=​"inner-child">​INNER-CHILD​</div>​
// onParentClick -> evt.target <div id=​"parent">​…​</div>​
