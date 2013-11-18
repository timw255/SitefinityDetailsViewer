var bg = chrome.extension.getBackgroundPage(); 
var version = bg.version;
var build = bg.build;
var licensed = bg.licensed;
var edition = bg.edition;
var netVersion = bg.netVersion;
var logoReq = bg.logoReq;
var logoVis = bg.logoVis;
var element;

element = document.getElementById('version');
element.innerText = version;

element = document.getElementById('build');
element.innerText = build;

element = document.getElementById('edition');
element.innerText = edition;

element = document.getElementById('netVersion');
element.innerText = netVersion;

element = document.getElementById('licensed');
element.innerText = licensed;

if (logoReq && !logoVis)
{
	element = document.getElementById('notice');
	element.style.display = 'block';
}