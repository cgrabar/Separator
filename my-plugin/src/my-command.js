var sketch = require('sketch')
// documentation: https://developer.sketchapp.com/reference/api/
log(sketch.version.api)
log(sketch.version.sketch)

export default function() {
  var document = sketch.getSelectedDocument()
  var page = document.selectedPage
  var doc = context.document;

  var Group = sketch.Group
  var Shape = sketch.Shape
  var Rectangle = sketch.Rectangle

  var selection = context.selection;
  var selectedLayers = context.selection;
  //var selectedLayers = doc.selectedLayers();
  var bounds= MSLayerGroup.groupBoundsForContainer(MSLayerArray.arrayWithLayers(selection));


  var x = bounds.origin.x;
  var y = bounds.origin.y
  var width = bounds.size.width;
  var height = 1;
  log("x: "+bounds.origin.x);
  log("y: "+bounds.origin.y);
  log("width: "+bounds.size.width);
  log("height: "+bounds.size.height);


  //for (var i = 0; i < selectedLayers.length(); i++) {
  //  var layer = selectedLayers[i];
  //  layer.remove(); // doesn't work
  //}

//  selection.removeFromParent()
//  selectedLayers[0].removeFromParent()
  //selection.Remove()

selectedLayers.forEach(function (layer) {
  log("debug info")
  log(layer.frame.width)
  layer.removeFromParent();
})






  //var selection = document.selectedLayers
  //log("Number of layers selected:")
  //log(selection.length)
  //log("x:")
  //log(selection[0].layers[0].frame.x)
  //log("y:")
  //log(selection[0].layers[0].frame.y)
  //log("width:")
  //log(selection[0].layers[0].frame.width)
  //log("height:")
  //log(selection[0].layers[0].frame.height)

//  for (i =0; i < selection.length; i++) {
//    log(selection[i])
//  }

  // var group = new Group({
  //   parent: page,
  //   frame: new Rectangle(10, 10, 80, 1),
  //   name: 'Test',
  //   selected: true,
  // })

  var myStyle = new sketch.Style()
  myStyle.fills = ['#767676'];
  myStyle.borders = [{
    enabled: false
    //thickness: 0
  }];
  var rect = new Shape({
    parent: page,
    frame: new Rectangle(x, y, width, 1),
    style: myStyle
  })

//  var myStyle = new sketch.Style()
//  myStyle.fills = ['#767676'];
//  myStyle.borders = [{
//    enabled: false
    //thickness: 0
//  }];
//  var rect = new Shape({
//    parent: page,
//    frame: new Rectangle(0, 0, 80, 1),
//    style: myStyle
//  })

  //log(myStyle)
  //log(rect)

//#  for (i = 0; i < rect.style.borders.length; i++) {
//#    rect.style.borders[i] = false;
//#  }

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

//  sketch.UI.message("Success?")


}
