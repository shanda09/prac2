const db = require('./index');

// "/getAllNotes"
const getAllNotes = (req, res, next) => {
    db
    .any("SELECT * FROM notes")
    .then(data => {
      console.log(data)
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send("Error  " + err)
    })
  }

  // POST. Route: "/addNote"
const addNote = (req,res, next) =>{
    db.none("INSERT INTO notes(title,content) VALUES (${title},${content}) ",
  {
    title:req.body.title,
    content:req.body.content
   })
    .then(()=>{
      res.status(200).send("Note Added ")
    })
    .catch(err =>{
      res.status(500).send("Error adding notes",err)
    })
  }

  // "/singlenote/:id"
const singlenote = (req, res, next) => {
  db
    .any("SELECT notes.id, title, content  FROM notes ", {
      id: req.params.id
    })
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send("Error getting single note. " + err)
    })
}

 // "/deletenote/:id"
 const deletenote = (req, res, next) => {
  db
    .any("DELETE FROM notes WHERE notes.id ", {
      id: req.params.id
    })
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send("Error did not delete note. " + err)
    })
}


  module.exports = {
    addNote: addNote,
    getAllNotes: getAllNotes,
    singlenote: singlenote,
    deletenote: deletenote,
  }
