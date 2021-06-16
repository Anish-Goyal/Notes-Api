const fs = require('fs')
const chalk = require('chalk')
const getNotes =()=> //=>instead of function
{
    return "Your Notes are super awesome...";
}
const addNote= function(title,body)
{
   const notes = loadNotes()
   const duplicateNote = notes.find((note)=> note.title=== title)
   debugger
   if(!duplicateNote)
   {
    notes.push({
        title: title,
        body: body
    })
    console.log(chalk.green.inverse("Note added"))
    saveNotes(notes)
   } else
   console.log(chalk.red.inverse('Node already existed'))
 
}
const removeNote = function(title)
{
    //console.log(title)
    const notes = loadNotes()
 // var flag = 0;
 /*if true saves the note */
   const notesToKeep =  notes.filter((note)=>!(note.title === title))
    saveNotes(notesToKeep);
    //console.log(s)
   // console.log(flag)
    if(notes.length === notesToKeep.length)
     console.log(chalk.bgRed.black("no note with the given title found"))
     else
     console.log(chalk.green.inverse("Note removed successfully!"))
}
const saveNotes = function(notes)
{
    const dataJ = JSON.stringify(notes)
    fs.writeFileSync('note.json',dataJ)
}
   const loadNotes= ()=>
   {
       try{
        const dBuffer = fs.readFileSync('note.json')
        const dJson = dBuffer.toString()
        return JSON.parse(dJson)

       }catch(e)
       {
           return [];
       }
   }
   const listNote = ()=>
   {
       console.log(chalk.blue.bold("Your Notes!"))
       const notes = loadNotes();
       notes.forEach(note => {
           console.log(note.title+": "+ note.body)
            });
   }
   const readNote= (title)=>
   {
     const notes = loadNotes();
     const requiredNote = notes.find((note)=> note.title===title)
     if(requiredNote)
     {
         console.log(chalk.cyan(requiredNote.title)+": "+ requiredNote.body)
     }
     else
     console.log(chalk.bgRed.black("No note with the given title found"))
   }
module.exports ={ 
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}