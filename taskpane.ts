Office.onReady(info => {
  if (info.host === Office.HostType.Word) {
    document.getElementById("run").onclick = run;
  }
});

// functions aren't just avilable globally for whatever reason
export async function run() {

    debugger;

  return Word.run(async context => {
    /**
     * Insert your Word code here
     */

    // insert a paragraph at the end of the document.
    const paragraph = context.document.body.insertParagraph("Hello World", Word.InsertLocation.end);

    // change the paragraph color to blue.
    paragraph.font.color = "blue";

    await context.sync();
  });
}

export async function doClick() {
    console.log("cows cows cows");
  debugger;
  return Word.run(async context => {
    /**
     * Insert your Word code here
     */

    // insert a paragraph at the end of the document.
    const paragraph = context.document.body.insertParagraph("Click!", Word.InsertLocation.end);

    // change the paragraph color to blue.
    paragraph.font.color = "green";

    await context.sync();
  });
}
