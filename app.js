const fs = require('fs')
const chalk = require('chalk');
const yargs = require('yargs');
const express = require('express')
const path = require('path')
const notes = require('./notes.js');//comman

const app = express();
const pdir = path.join(__dirname,'/public');
app.use(express.static(pdir))
//creates add command
yargs.command({
    command: 'add',
    describe: 'Adding numbers',
    builder: {
        title : {
            describe: 'Title of adding list',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Body of the func',
            demandOption:true,
            type: 'string'
        }
    },
    handler: function(argv)
    {
        notes.addNote(argv.title,argv.body) 
        
       // console.log("Adding two no.",argv);
    }
    //sdebugger
})
//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removing Note!',
    builder: {
        title: {
            describe: 'removing a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
        
    }
})
// Create list command
yargs.command({
    command: 'list',
    describe:'Listing elements',
    handler(){
        notes.listNote();
       // console.log(notes)
    }
})
// Create read command
yargs.command({
    command: 'read',
    describe: 'Reading a list',
    builder: {
      title: {  
          describe: 'reading a note',
         demandOption: true,
         type: 'string'
    }},
    handler(argv){
        notes.readNote(argv.title);
    }
})
// console.log(yargs.argv);
yargs.parse();

app.listen(3010)











