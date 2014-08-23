/**
 * Way data is stored for this database
 * For a Node.js/Node Webkit database it's the file system
 * For a browser-side database it's localStorage when supported
 *
 * This version is the Node.js/Node Webkit version
 */

var fs = require('fs')
  , mkdirp = require('mkdirp')
  ;

function Storage () {
}


//Storage.prototype.appendFile = function (filename, toAppend, encoding, callback) {
  //if (!this.appendWriteStream) {
    //this.appendWriteStream = fs.createWriteStream(filename, { flags: 'w', encoding: encoding, mode: 0666 });
  //}
  //this.appendWriteStream.write(toAppend, encoding, callback);
//};


Storage.unlink = fs.unlink;
Storage.exists = fs.exists;
Storage.rename = fs.rename;
Storage.writeFile = fs.writeFile;
Storage.readFile = fs.readFile;


Storage.prototype.appendFile = fs.appendFile;



Storage.mkdirp = mkdirp;



// Interface
module.exports = Storage;