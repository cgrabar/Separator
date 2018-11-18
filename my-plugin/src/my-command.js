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
  var y = bounds.origin.y;
  if (bounds.size.width > bounds.size.height) {
    var width = bounds.size.width;
    var height = 1;
  } else {
    var width = 1;
    var height = bounds.size.height;
  }
  //var width = bounds.size.width;
  //var height = 1;
  log("x: "+bounds.origin.x);
  log("y: "+bounds.origin.y);
  log("width: "+bounds.size.width);
  log("height: "+bounds.size.height);


selectedLayers.forEach(function (layer) {
  log("debug info")
  log(layer.frame.width)
  layer.removeFromParent();
})


  var myStyle = new sketch.Style()
  myStyle.fills = ['#767676'];
  myStyle.borders = [{
    enabled: false
    //thickness: 0
  }];

  var rect = new Shape({
    parent: page,
    frame: new Rectangle(x, y, width, height),
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




}
