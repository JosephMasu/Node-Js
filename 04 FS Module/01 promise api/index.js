import * as fs from "fs/promises"

// create a folder using nodejs


// try {
//     await fs.mkdir('c:\\node.js\\PROJECTS');
//     console.log("FOLDER cREATED ...");
    
// } catch (error) {
//     console.log(error)
// }


// Read the content 
// try {
//     const files = await fs.readdir("c:\\node.js\\PROJECTS");
//     for(const file of files){
//         console.log(file);
//     }
// } catch (error) {
//     console.log(error);
// }


// Remove folder
// try {
//     await fs.rmdir("c:\\node.js\\projects");
// } catch (error) {
//     console.log(error);
    
// }



//create and write files
// try {
//     await fs.writeFile('README.md', 'Hello Masu Muhindo Joseph');
// } catch (error) {
//     console.log(error);
// }



//read file

// try {
//     const fileee = await fs.readFile('README.md', 'utf-8');
//     console.log(fileee);
// } catch (error) {
//     console.log(error);
    
// }


// Append File

try {
    await fs.appendFile("README.md", "Im back learnong NodeJs")
} catch (error) {
    console.log(error);
    
}