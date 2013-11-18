$(document).ready( function() {

	$('#placeholders').change(function () {

		if ($(this).val() == 'yes') {
			$("#labeloptions").show();
		} else {
			$("#labeloptions").hide();
		}
	
	});

    $('.minicolors').minicolors({
        control: $(this).attr('data-control') || 'hue',
        defaultValue: $(this).attr('data-default-value') || '#cc1166',
        inline: $(this).hasClass('inline'),
        letterCase: $(this).hasClass('uppercase') ? 'uppercase' : 'lowercase',
        opacity: $(this).hasClass('opacity'),
        position: $(this).attr('data-position') || 'default',
        styles: $(this).attr('data-style') || '',
        swatchPosition: $(this).attr('data-swatch-position') || 'left',
        textfield: !$(this).hasClass('no-textfield'),
        theme: $(this).attr('data-theme') || 'default'
    });
    
});

function save_options() {
	var select;

	select = document.getElementById("contentblocks");
	localStorage["highlight_blocks"] = select.children[select.selectedIndex].value;

	select = document.getElementById("pagepreviews");
	localStorage["page_previews"] = select.children[select.selectedIndex].value;

	select = document.getElementById("placeholders");
	localStorage["label_placeholders"] = select.children[select.selectedIndex].value;
	
	localStorage["initial_visibility"] = getInitialVisibility();

	localStorage["overlay_color"] = getOverlayColor();

	var status = document.getElementById("status");
	status.innerHTML = "Options Saved.";
	setTimeout(function() {
		status.innerHTML = "";
	}, 750);
}

function restore_options() {
	var select;
	var highlightBlocks = localStorage["highlight_blocks"];
	var labelPlaceholders = localStorage["label_placeholders"];
	var initialVisibility = localStorage["initial_visibility"];
	var overlayColor = localStorage["overlay_color"];
	var pagePreviews = localStorage["page_previews"];

	if (!highlightBlocks) {
		highlightBlocks = "no";
	}

	if (!labelPlaceholders) {
		labelPlaceholders = "no";
	}

	if (!initialVisibility) {
		initialVisibility = "1";
	}

	if (!overlayColor) {
		overlayColor = "#cc1166";
	}

	if (!pagePreviews) {
		overlayColor = "no";
	}

	select = document.getElementById("contentblocks");

	for (var i = 0; i < select.children.length; i++) {
		var child = select.children[i];
		if (child.value == highlightBlocks) {
		  child.selected = "true";
		  break;
		}
	}

	select = document.getElementById("pagepreviews");

	for (var i = 0; i < select.children.length; i++) {
		var child = select.children[i];
		if (child.value == pagePreviews) {
		  child.selected = "true";
		  break;
		}
	}

	select = document.getElementById("placeholders");

	for (var i = 0; i < select.children.length; i++) {
		var child = select.children[i];
		if (child.value == labelPlaceholders) {
		  child.selected = "true";
		  break;
		}
	}

	if (labelPlaceholders == "yes") {
		$("#labeloptions").show();
	}
	
	setInitialVisibility(initialVisibility);
	setOverlayColor(overlayColor);
}

function getInitialVisibility() {
	var initialVisibility = "1";
	var x = document.getElementsByName('initialvisibility');
	
	for(var k=0; k < x.length; k++) {
		if(x[k].checked) {
			initialVisibility = x[k].value;
		}
	}
	
	return initialVisibility;
}

function setInitialVisibility(savedValue) {
	var x = document.getElementsByName('initialvisibility');
	
	for(var k=0; k < x.length; k++) {
		if(x[k].value == savedValue) {
			x[k].checked = true;
		}
	}
}

function getOverlayColor() {
	
	overlayColor = $('input[name=overlaycolor]').minicolors('value');
	
	return overlayColor;
}

function setOverlayColor(savedValue) {

	$('input[name=overlaycolor]').minicolors('value', savedValue);
}

window.addEventListener('load', restore_options, false);
document.getElementById('save').addEventListener('click', save_options, false);