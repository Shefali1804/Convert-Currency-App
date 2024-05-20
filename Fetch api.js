const URL= "https://cat-fact.herokuapp.com/facts";
let factPara=document.querySelector("#facts");
let btn=document.querySelector("#btn");


const getFacts=async()=>{
    console.log("getting data......");
    let response = await fetch(URL);
    console.log(response);  // JSON format
    let data=await response.json();
    factPara.innerText=(data[2].text);
    
};

btn.addEventListener("click", getFacts);