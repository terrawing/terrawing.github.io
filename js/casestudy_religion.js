function gotoSection(e) {
    console.clear();
    
    let dropDownItem = e.target.innerHTML.trim();
    switch(dropDownItem) {
        case "Background":
            window.location.hash = "#id_ReBackgroundSubSection";
            break;

        case "The Problem":
            window.location.hash = "#id_ReProblemSubSection";
            break;

        case "The Goal":
            window.location.hash = "#id_ReGoalSubSection";
            break;

        case "Website":
            window.location.hash = "#id_ReWebsiteSection";
            break;

        case "EBook":
            window.location.hash = "#id_ReEbookSection";
            break;

        default:
            //do nothing
    }
}