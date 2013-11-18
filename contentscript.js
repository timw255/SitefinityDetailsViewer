if (document.head) {
	var icon;
	var warning = false;

	var site = {
		edition: "Unknown",
		majorVersion: 0,
		minorVersion: 0,
		buildNumber: 0,
		revision: 0,
		servicePack: "",
		version: "Unknown",
		licensed: "Unknown",
		netVersion: "",
		logoVisible: false,
		logoRequired: false
	};

	var matches = /meta name="Generator" content="(?:(Sitefinity (\d+)\.(\d+))\.(\d+)\.(\d+)(?::([\d]))? ?((?:CE|SB|SE|PE|EE|PU|MS))? ?(Trial version)?)"/i.exec(document.head.innerHTML);

	if (matches) {
		site.majorVersion = parseInt(matches[2]);
		site.minorVersion = matches[3];
		site.buildNumber = matches[4];
		site.revision = matches[5];
		
		switch (site.majorVersion)
		{	
			case 3:
				site.netVersion = "2.0";
				
				if (parseInt(matches[6]) > 0)
				{
					site.licensed = "Yes";
				} else {
					site.licensed = "No";
					warning = true;
				}
				
				switch (site.minorVersion + "." + site.buildNumber)
				{
					case '1.1473':
						site.servicePack = "SP2";
						break;
					case '2.1526':
						site.servicePack = "SP1";
						break;
					case '2.1598':
						site.servicePack = "SP2";
						break;
					case '2.1616':
						site.servicePack = "SP2 Hotfix";
						break;
					case '5.1747':
						site.servicePack = "SP1";
						break;
					case '6.1870':
						site.servicePack = "SP1";
						break;
					case '6.1920':
						site.servicePack = "SP1";
						break;
					case '6.1927':
						site.servicePack = "SP1 Hotfix";
						break;
					case '6.1936':
						site.servicePack = "SP1";
						break;
					case '7.2022':
						site.servicePack = "SP1";
						break;
					case '7.2057':
						site.servicePack = "SP2";
						break;
					case '7.2096':
						site.servicePack = "SP3";
						break;
					case '7.2136':
						site.servicePack = "SP4";
						site.netVersion = "3.5";
						break;
					case '7.2152':
						site.servicePack = "SP4";
						site.netVersion = "4.0";
						break;
					default:
						break;
				}
				
				switch (parseInt(site.revision))
				{
					case 2:
						site.edition = "Standard Edition";
						site.logoRequired = false;
						break;
					case 3:
						site.edition = "Community Edition";
						site.logoRequired = true;
						break;
					case 5:
						site.edition = "Community Edition";
						site.logoRequired = true;
						break;
					case 140:
						site.edition = "Unreleased Edition";
						site.logoRequired = false;
						break;
					case 220:
						site.edition = "Standard Edition";
						site.logoRequired = false;
						site.netVersion = "2.0"
						break;
					case 240:
						site.edition = "Standard Edition";
						site.logoRequired = false;
						site.netVersion = "4.0";
						break;
					case 320:
						site.edition = "Community Edition";
						site.logoRequired = true;
						site.netVersion = "2.0";
						break;
					case 340:
						site.edition = "Community Edition";
						site.logoRequired = true;
						site.netVersion = "4.0";
						break;
					default:
						break;
				}
				break;
			case 4:
				switch (site.minorVersion + "." + site.buildNumber + "." + site.revision)
				{
					case '0.1210.0':
						site.servicePack = "SP1";
						break;
					case '1.1395.0':
						site.servicePack = "SP1";
						break;
					case '1.1501.0':
						site.servicePack = "SP2";
						break;
					case '1.1574.0':
						site.servicePack = "SP3";
						break;
					case '2.1733.0':
						site.servicePack = "SP1";
						break;
					case '3.1885.0':
						site.servicePack = "Hotfix 1";
						break;
					default:
						break;
				}
				
				site.netVersion = "4.0";
				break;
			case 5:
				switch (site.minorVersion + "." + site.buildNumber + "." + site.revision)
				{
					case '0.2523.0':
						site.servicePack = "Hotfix 1";
						break;
					case '0.2800.0':
						site.servicePack = "SP1";
						break;
					case '1.3270.0':
						site.servicePack = "SP1";
						break;
					case '1.3450.0':
						site.servicePack = "SP2";
						break;
					case '4.4010.0':
						site.servicePack = "Hotfix 1";
						break;
					case '4.4020.0':
						site.servicePack = "Hotfix 2";
						break;
					case '4.4040.0':
						site.servicePack = "Hotfix 3";
						break;
					default:
						break;
				}
				
				site.netVersion = "4.0";
				break;
			case 6:
				switch (site.minorVersion + "." + site.buildNumber + "." + site.revision)
				{
					case '0.4200.0':
						site.servicePack = "SP1";
						break;
					case '0.4210.0':
						site.servicePack = "Hotfix 1";
						break;
					case '1.4600.0':
						site.servicePack = "SP1";
						break;
					default:
						break;
				}
				
				site.netVersion = "4.0";
				break;
			default:
				break;
		}
		
		if (parseInt(site.majorVersion) >= 4)
		{
			switch (matches[7])
			{
				case 'CE':
					site.edition = "Community Edition";
					site.logoRequired = true;
					break;
				case 'SB':
					site.edition = "Small Business Edition";
					site.logoRequired = false;
					break;
				case 'SE':
					site.edition = "Standard Edition";
					site.logoRequired = false;
					break;
				case 'PE':
					site.edition = "Professional Edition";
					site.logoRequired = false;
					break;
				case 'EE':
					site.edition = "Enterprise Edition";
					site.logoRequired = false;
					break;
				case 'PU':
					site.edition = "Enterprise Edition";
					site.logoRequired = false;
					break;
				case 'MS':
					site.edition = "Multisite Edition";
					site.logoRequired = false;
					break;
				default:
					break;
			}
			
			if ((parseInt(site.majorVersion) >= 4 && parseInt(site.minorVersion) >= 3 && parseInt(site.buildNumber) >= 1885) || parseInt(site.majorVersion) >= 5)
			{
				if (matches[8] == 'Trial version')
				{
					site.licensed = "No";
					warning = true;
				} else {
					site.licensed = "Yes";
				}
			}
		}
		
		site.version = matches[1] + " " + site.servicePack;
		
		if (site.logoRequired)
		{
			site.logoVisible = comLogoVisibility();
		}
		
		chrome.extension.sendMessage({method: "getHighlight"}, function(response)
		{
			if (response.status == "yes")
			{
				$('.sfContentBlock').addClass('sfdvHighlight');
			}
		});
		
		if (warning)
		{
			icon = 3;
		} else {
			icon = 2;
		}
		
		var payload = {
			version: site.version,
			build: site.buildNumber,
			licensed: site.licensed,
			edition: site.edition,
			netVersion: site.netVersion,
			logoReq: site.logoRequired,
			logoVis: site.logoVisible,
			icon: icon
		 };

		chrome.extension.sendMessage(payload, function(response) {});

		chrome.extension.sendMessage({method: "getPagePreviews"}, function(previewResponse)
		{
			if (previewResponse.status == "yes")
			{
				$(document).on(
				{
				    mouseenter: function(e) {
				        $('#sfdvThumb').remove();

						var url = $(this).closest('.sfTreeTableColumn.sfFirstTreeTableColumn.sfTitleCol').siblings('.sfTreeTableColumn.sfView').find('a').attr('href');
						var xPos = e.pageX + 55;
						var yPos = e.pageY;

						var $sfdvThumb = $('<div id="sfdvThumb" style="top:' + yPos + 'px;left:' + xPos + 'px;"><div class="sfdvThumbOverlay"></div><iframe src="' + url + '" scrolling="no"></iframe><p>Preview</p><div>');

						$sfdvThumb.appendTo('.sfMain.sfClearfix').delay(500).css({'width': '288px','height': '144px'});
				    },
				    mouseleave: function() {
				        $('#sfdvThumb').remove();
				    }
				}
				, '.sf_binderCommand_editPage.rtIn.sfItemTitle.sfpublished > strong');
			}
		});
	}

	chrome.extension.sendMessage({method: "getLabelPlaceholders"}, function(labelResponse)
	{
		if (labelResponse.status == "yes")
		{
			if ($("#sfPageContainer").length > 0) {

				var overlayColor;

				chrome.extension.sendMessage({method: "getOverlayColor"}, function(overlayResponse)
				{
					if (overlayResponse.overlayColor) {
						overlayColor = hex2rgb(overlayResponse.overlayColor, .5);
					} else {
						overlayColor = "rgba(204, 17, 102, 0.5)";
					}

					$pageContainer = $('#sfPageContainer');
				
					var defaults = {
						initVisible: labelResponse.initialVisibility,
						collapseEnabled: true,
						expandOnHide: true
					},
					options = $.extend(defaults, options);
					
					$pageContainer.data('sfDV', {
						labelsVisible: true,
						initVisible: true,
						expandOnHide: true
					});
					
					data = $pageContainer.data('sfDV');

					if (options.initVisible == "0") {
						data.labelsVisible = false;
					}
					
					var classes,
						$radDockZone;

					$('#sfPageContainer div[placeholderid]').each(function () {
						
						$radDockZone = $(this);

						if (!/_Col\d{2,}$/.exec($radDockZone.attr('placeholderid'))) {
						
							$radDockZone = $(this);

							$radDockZone.data('title', $radDockZone.attr('placeholderid'));

							$radDockZone.prepend('<div class="placeholderMeta"><div class="sfdvTitle">' + $radDockZone.data('title') + '</div>');

							if (options.collapseEnabled == true) {
								$radDockZone.find('.placeholderMeta').prepend('<div class="sfdvToggle collapse"></div>').after('<div class="sfdvOverlay" style="display: none; background-color:' + overlayColor + ';"></div>');
							}

							if (options.initVisible == false) {
								$radDockZone.attr('title', $radDockZone.data('title'));
								$radDockZone.find('.placeholderMeta').hide();
							}
						}
					});
				});
			}

			if ($('.sfPageEditorWrp').length) {
				$(document).on('click', '.sfdvToggle.collapse', function() {
					var $radDockZone = $(this).closest('.RadDockZone');
					$radDockZone.data('oldHeight', $radDockZone.innerHeight());

					$radDockZone.addClass('sfdvCollapsed');
					$radDockZone.find('.sfdvOverlay').show();

					if ($radDockZone.hasClass('zeDockZoneEmpty')) {
						$radDockZone.attr('style', 'min-height:23px !important;min-width:10px')
					}

					$radDockZone.stop().animate({ height: '23px' }, 250, function () {
						$(this).find('.sfdvToggle.collapse').removeClass('collapse').addClass('collapsed');
					});
				});
				
				$(document).on('click', '.sfdvToggle.collapsed', expandSection);
				
				function expandSection() {
					var $radDockZone = $(this).closest('.RadDockZone');

					$radDockZone.stop().animate({ height: $radDockZone.data('oldHeight') }, 500, function () {
						$radDockZone.find('.sfdvOverlay').hide();
						$radDockZone.removeClass('sfdvCollapsed');

						if ($radDockZone.hasClass('zeDockZoneEmpty')) {
							$radDockZone.attr('style', 'min-height:' + $radDockZone.data('oldHeight') + 'px !important;min-width:10px;');
						}

						$(this).find('.sfdvToggle.collapsed').removeClass('collapsed').addClass('collapse');
					});
				}
				
				window.addEventListener("keydown", function(event) {
					if (event.keyCode == 90) {

						data = $('#sfPageContainer').data('sfDV');
					
						if (data.expandOnHide == true) {
							$('.sfdvToggle.collapsed').each(expandSection);
						}

						if (data.labelsVisible) {
							$('.placeholderMeta').each(function () {
								var $radDockZone = $(this).closest('.RadDockZone');

								$radDockZone.attr('title', $radDockZone.data('title'));
								$(this).hide();
							});
							data.labelsVisible = false;
						} else {
							$('.placeholderMeta').each(function () {
								var $radDockZone = $(this).closest('.RadDockZone');

								$radDockZone.attr('title', '');
								$(this).show();
							});
							data.labelsVisible = true;
						}
					}
				}, false);
			}
		}
	});

	function comLogoVisibility()
	{
		if (!$('p.poweredBySitefinityLogo').is(':visible'))
		{
			return false;
		}
		
		if ($('p.poweredBySitefinityLogo').is(':hidden'))
		{
			return false;
		}
		
		return true;
	}

	function hex2rgb(hex, opacity) {
		var rgb = hex.replace('#', '').match(/(.{2})/g);

		var i = 3;
		while (i--) {
			rgb[i] = parseInt(rgb[i], 16);
		}

		if (typeof opacity == 'undefined') {
			return 'rgb(' + rgb.join(', ') + ')';
		}

		return 'rgba(' + rgb.join(', ') + ', ' + opacity + ')';
	};
}