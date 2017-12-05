function getClickHandler() {
    return function (info, tab) {

        // The srcUrl property is only available for image elements.
        var url = 'info.html#' + info.srcUrl;

        // Save url to photos
    };
}

/**
 * Create a context menu which will only show up for images.
 */
chrome.contextMenus.create({
    "title": "Save to Google Photos",
    "contexts": ["image"],
    "onclick": getClickHandler(),
});

