function gotoSection(e) {
    console.clear();
    
    let dropDownItem = e.target.innerHTML.trim();
    switch(dropDownItem) {
        case "Background":
            window.location.hash = "#id_DLBackgroundSubSection";
            break;

        case "The Problem":
            window.location.hash = "#id_DLProblemSubSection";
            break;

        case "The Goal":
            window.location.hash = "#id_DLGoalSubSection";
            break;

        case "EBook":
            window.location.hash = "#id_DLEbookSection";
            break;

        case "EBook Activity":
            window.location.hash = "#id_DLEbookActivitySection";
            break;

        case "Recording Feature":
            window.location.hash = "#id_DLRecordingFeatureSection";
            break;

        case "Reward System":
            window.location.hash = "#id_DLRewardSystemSection";
            break;

        default:
            //do nothing
    }
}