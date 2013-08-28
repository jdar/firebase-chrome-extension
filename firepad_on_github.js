var srcArray = ["vendor/codemirror/codemirror.js"];                   

function AddScript(value)
{
    var s = document.createElement("SCRIPT")
    s.src = chrome.extension.getURL(value);
    s.onload = function() {
        this.parentNode.removeChild(this);
    };
    (document.head||document.documentElement).appendChild(s);       
}
srcArray.forEach(AddScript);
//chrome.extension.sendMessage("something", function(response) {});

var input_textarea = document.getElementById('blob_contents');
var contents = "foo";//input_textarea.value;
console.log("content: %o", contents);

//var container = document.getElementsByClassName('file');
var container = document.querySelector('div');
console.log("content: %o", contents);


var firepadDiv = container;//document.getElementById('firepad');

//TODO: make everything relative to the scope's name + the page (i.e., the 'firechat-organization-foo')... can only
// edit collaboratively if in the same organization.
// this makes sense, but more importantly, firebase has access to this info.
var firepadRef = new Firebase('https://firepad-on-github.firebaseio.com/');

console.log("before works...");
// Uncaught ReferenceError: exports is not defined
var codeMirror = CodeMirror(firepadDiv, { lineWrapping: true });
//might try 'new CodeMirror'
console.log("if you can see this 'after' does too");
/*
var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror,
    { richTextShortcuts: true, richTextToolbar: true });

//// Initialize contents.
firepad.on('ready', function() {
  if (firepad.isHistoryEmpty()) {
    var f = Firepad.Formatting().fontSize(24);
    firepad.setText([
      Firepad.Text("Rich-text", f.italic(true).color('green')),
      Firepad.Text(" editing with ", f),
      Firepad.Text("Firepad!", f.color('red'))
    ]);
  }
});
*/