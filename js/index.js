const fetchAdvice = async()=>{
    const result = await fetch("https://api.adviceslip.com/advice");
    const data = await result.json();
    console.log(data);
    document.getElementById('title').innerHTML=`advice # ${data.slip.id}`;
    document.getElementById('advice').innerHTML=`${data.slip.advice}`;
}

fetchAdvice();