const multer = require('multer');
const { Track } = require('../db/models');

const DB = [];

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'audio/');
  },
  filename(req, file, cb) {
    console.log(file);
    const name = `${new Date().toISOString()}-${file.originalname}`;
    console.log(file.originalname);
    cb(null, name);
    const findAudio = Track.update({ url: name }, { where: { url: 'url' } });
    console.log('FIND ME!!!! ------------------------', findAudio);
  },
});

const allowedMimeTypes = ['audio/wav', 'audio/mp3'];

const filter = (req, file, cb) => {
  if (!allowedMimeTypes.includes(file.mimetype.toLowerCase())) {
    cb(null, false);
  }
  cb(null, true);
};

module.exports = multer({ storage, filter });
module.exports.DB = DB;
