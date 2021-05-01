let getData = async ()=>{
    let result = await firebase.firestore().collection('final-project').get()
    console.log(result);
    let data = await getDataFromDocs(result.docs)
    console.log(data);
}

let createData = async (d)=>{
    await firebase.firestore().collection('final-project.add').(d)
}

getData()

let getDataFromDoc =(doc)=>{
    let data =doc.data()
    data.id = doc.id
    return data

}
let getDataFromDocs =(docs) =>{
   let result =[]
   for(let doc of docs){
       let data = getDataFromDoc(doc)
       result.push(data)
    }
   return result
}