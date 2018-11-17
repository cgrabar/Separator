var sketch = require('sketch')
// documentation: https://developer.sketchapp.com/reference/api/
log(sketch.version.api)
log(sketch.version.sketch)

export default function() {
  var document = sketch.getSelectedDocument()
  var page = document.selectedPage

  var Group = sketch.Group
  var Shape = sketch.Shape
  var Rectangle = sketch.Rectangle

  // var group = new Group({
  //   parent: page,
  //   frame: new Rectangle(10, 10, 80, 1),
  //   name: 'Test',
  //   selected: true,
  // })

  var myStyle = new sketch.Style()
  myStyle.fills = ['#bb0000'];
  var rect = new Shape({
    parent: page,
    frame: new Rectangle(0, 0, 80, 1),
    style: myStyle
  })

  var selection = document.selectedLayers

  log(selection.isEmpty)
  selection.forEach(function(item) {
    log(item.name)
  })

  selection.clear()
  log(selection.isEmpty)

  rect.selected = true
  log(selection.isEmpty)

  // var outputString = sketch.UI.getStringFromUser('Test', 'default')
  // var outputSelection = sketch.UI.getSelectionFromUser('Test', ['One', 'Two'], 1)
  // sketch.UI.message('Hello mum!')
  // sketch.UI.alert('Title', 'message')
  //
  // sketch.Settings.setSettingForKey('setting-to-remember', outputString)
  // log(sketch.Settings.settingForKey('setting-to-remember'))

  sketch.UI.message("Success?")


}
