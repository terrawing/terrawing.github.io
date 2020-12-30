function gotoSection(e) {
    console.clear();
    
    let dropDownItem = e.target.innerHTML.trim();
    switch(dropDownItem) {
        case "Background":
            window.location.hash = "#id_MathBackgroundSubSection";
            break;

        case "The Problem":
            window.location.hash = "#id_MathProblemSubSection";
            break;

        case "The Goal":
            window.location.hash = "#id_MathGoalSubSection";
            break;

        case "Digital Tool":
            window.location.hash = "#id_MathDToolSection";
            break;

        default:
            //do nothing
    }
}