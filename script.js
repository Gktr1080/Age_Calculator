let submit = document.getElementById("submit");
let result = document.getElementById("result");
// submit.addEventListener("onclick",() => {
  function getCalculate(){

  
  let birth = new Date(document.getElementById("birth")
  .value);
  let dateNow = new Date();
  if (birth.getTime()) {
    let difference = dateNow.getTime() - birth.getTime();
    let newAge = new Date(difference);
    console.log(newAge);
    let x = Math.abs(newAge.getFullYear() - 1970)
    console.log(x)

    let inDays = (Math.floor(difference / (1000 * 3600 * 24)))-(365*x)-(x/4);
    result.style.display = "block";
    result.innerHTML = `You are <span>${x}</span>Years and <span>${inDays}</span> Days Old`;
    // console.log(x)
  }

}
