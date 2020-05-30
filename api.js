const store = require('./db/store');

module.exports = function(app) {
    
    app.get("/api/notes", function(req, res) {
        store
        .getNotes()
        .then((notes) => res.json(notes))
        .catch((err) => res.status(500).json(err));
    });

    app.post("/api/notes", function(req, res) {
        store
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch((err) => res.status(500).json(err));
    });

    app.delete("/api/notes/:id", function(req, res) {
        store
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch((err) => res.status(500).json(err));
    });
    
}