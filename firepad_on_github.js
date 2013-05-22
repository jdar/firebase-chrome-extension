//chrome.extension.sendMessage("gist", function(response) {});

var input_textarea = document.getElementById('blob_contents');
var contents = input_textarea;
console.log("content: %o", contents);

var container = document.getElementsByClassName('file');
console.log("content: %o", contents);

var firepadDiv = document.getElementById('firepad');
var firepadRef = new Firebase('<firebase url...>');
var codeMirror = CodeMirror(firepadDiv, { lineWrapping: true });
var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror,
    { richTextShortcuts: true, richTextToolbar: true });
console.log("You did it");
