// we use event bubling here
// we use queue data structure as  queue is first in first outto check which box is clicked

let boxContainer = document.getElementById("box-container");
let box = document.querySelectorAll(".box");
let queue = [];

boxContainer.addEventListener("click", (e) => {
  let index = e.target.dataset.index;
    // for color to fill
  if (index != undefined) {
    queue.push(index);
    box[index].classList.add("green-color");
  }

  // disappear color in queue form
  if (queue.length == 7){
    let cnt = 0;
    while (queue.length > 0) {
        let ind = queue.shift();
        cnt++;
        setTimeout(() => {
                box[ind].classList.remove("green-color");    
        }, cnt * 1000);
        
    }
  }
});
