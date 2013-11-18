var version = "";
var build = "";
var licensed = "";
var edition = "";
var netVersion = "";
var logoReq = false;
var logoVis = false;

chrome.extension.onMessage.addListener(onRequest);

function onRequest(request, sender, sendResponse)
{
	switch (request.method)
	{
		case "getHighlight":
			sendResponse({status: localStorage['highlight_blocks']});
			break;
		case "getLabelPlaceholders":
			sendResponse({status: localStorage['label_placeholders'], initialVisibility: localStorage['initial_visibility']});
			break;
		case "getPagePreviews":
			sendResponse({status: localStorage['page_previews']});
			break;
		case "getOverlayColor":
			sendResponse({overlayColor: localStorage['overlay_color']});
			break;
		default:
			version = request.version;
			build = request.build;
			licensed = request.licensed;
			edition = request.edition;
			netVersion = request.netVersion;
			logoReq = request.logoReq;
			logoVis = request.logoVis;
			
			if (request.icon)
			{
				updateIcon(request.icon, sender.tab.id);
			}

			chrome.pageAction.show(sender.tab.id);

			sendResponse({});
			break;
	}
};

function updateIcon(icon, tab)
{
	chrome.pageAction.setIcon({path:"icon" + icon + ".png", tabId: tab});
}