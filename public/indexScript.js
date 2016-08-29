window.onload = function() {
    var converter = new showdown.Converter();
    var pad = document.getElementById('content');
    var markdownText = pad.innerHTML;
    html = converter.makeHtml(markdownText);
    pad.innerHTML = html;

};