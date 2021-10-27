export function create(element, documentName, documentBase64) {
    const options = DevExpress.RichEdit.createOptions();
    options.height = "500px";
    options.confirmOnLosingChanges.enabled = false;
    options.view.viewType = DevExpress.RichEdit.ViewType.Simple;
    options.events.documentLoaded = (richEditor) => {
        richEditor.documentName = documentName;
        richEditor.documentFormat = DevExpress.RichEdit.DocumentFormat.OpenXml;
    };
    const richEdit = DevExpress.RichEdit.create(element, options);
    openDocument(richEdit, documentName, documentBase64);
    return richEdit;
}
export function openDocument(richEdit, documentName, documentBase64) {
    if (documentBase64) {
        richEdit.openDocument(documentBase64, documentName, DevExpress.RichEdit.DocumentFormat.OpenXml);
    }
    else {
        richEdit.newDocument();
        richEdit.documentName = documentName;
        richEdit.documentFormat = DevExpress.RichEdit.DocumentFormat.OpenXml;
    }
}
export function exportToBase64(richEdit) {
    return new Promise(resolve => richEdit.exportToBase64(base64 => resolve(base64)));
}
export function dispose(richEdit) {
    richEdit.dispose();
}