import inquirer from 'inquirer';
import qr from "qr-image";
import fs from 'fs';
inquirer
  .prompt([
    {
        message: "Type in your URL :",
        name:"URL" ,
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    const qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile("message.txt",url, (err)=>{
        if(err) throw err;
        console.log("File has been saved !")
    });
    })
  .catch((error) => {
    if (error.isTtyError) {
        console.log('Prompt could not be rendered in the current environment');
    } else {
        console.log('Something went wrong:', error);
    }
  });