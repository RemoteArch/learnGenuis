export default  async function upload(file , url) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        let data = new Uint8Array(fileReader.result)
        fetch(url, {method: 'POST',body: data}).then(rep => rep.json())
        .then((rep)=>{
            resolve(rep);
        }).catch((error)=>{
            reject(error);
        })
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
      fileReader.readAsArrayBuffer(file);
    });
  }