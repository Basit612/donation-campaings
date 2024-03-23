export const saveToLocalStorage = (data) =>{
  const saveData = JSON.parse(localStorage.getItem ('donation') || []);

  
  const existedData = saveData.find((item) => item.id == data.id);
  if(!existedData){
    saveData.push(data);
    localStorage.setItem("donation", JSON.stringify(saveData));
  }else{
    alert("Already data existed")
  }

};