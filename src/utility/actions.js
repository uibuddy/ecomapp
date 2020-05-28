const handleCollaspe=(event)=>{
    if(event.target.nextSibling.classList.contains("show")){
      event.target.classList.remove("show");
      event.target.nextSibling.classList.remove("show");
    }else{
      event.target.nextSibling.classList.add("show");
      event.target.classList.add("show");
    }
};
const unifyingArr=(arr, orderbykeyname)=>{
  let result = arr.filter(function (item) {
    var key = item[orderbykeyname];
    if (!this[key]) {
        this[key] = true;
        return true;
    }
  }, Object.create(null));
  return result;
}

export {handleCollaspe, unifyingArr}