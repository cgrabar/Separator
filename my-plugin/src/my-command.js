var sketch = require('sketch')
// documentation: https://developer.sketchapp.com/reference/api/
log("debug info")
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

  log("x: "+bounds.origin.x);
  log("y: "+bounds.origin.y);
  log("width: "+bounds.size.width);
  log("height: "+bounds.size.height);

  var firstLayer = selection.firstObject();
  var container  = firstLayer;

  while (container.class() != 'MSPage' && container.class() != 'MSArtboardGroup' && container.class() != 'MSLayerGroup') {
    container = container.parentGroup();
  }


  selectedLayers.forEach(function (layer) {
  log(layer.frame.width)
  layer.removeFromParent();
  })

  var myStyle = new sketch.Style()
  myStyle.fills = ['#979797'];
  myStyle.borders = [{
    enabled: false
  }];

  var rect = new Shape({
    parent: container,
    frame: new Rectangle(x, y, width, height),
    style: myStyle
  })


  log("rect x:"+x)
  log("rect y:"+y)

  var selection = document.selectedLayers
  selection.forEach(function(item) {
  })

  selection.clear()
  rect.selected = true





}
