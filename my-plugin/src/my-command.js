var sketch = require('sketch')
// documentation: https://developer.sketchapp.com/reference/api/
log("debug info")
log(sketch.version.api)
log(sketch.version.sketch)

export default function() {
  var document = sketch.getSelectedDocument()
  var page = document.selectedPage
  var doc = context.document;

  var Group = sketch.Group;
  var Shape = sketch.Shape;
  var Rectangle = sketch.Rectangle;

  var selection = context.selection;
  var selectedLayers = context.selection;
  var bounds= MSLayerGroup.groupBoundsForContainer(MSLayerArray.arrayWithLayers(selection));

if (selection.count() == 0) {
	doc.showMessage("Please select something.");
} else {
	for (var i = 0; i < selection.count(); i++) {
		var layer = context.selection[i];
		var borderColor = layer.style().firstEnabledBorder().color().immutableModelObject().hexValue();
	}
}

log("border color: "+borderColor);
var hexbordercolor = ("#" + borderColor);
log ("border color2: "+hexbordercolor);

//checking orientation of the line
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


//selecting correct parent group
  while (container.class() != 'MSPage' && container.class() != 'MSArtboardGroup' && container.class() != 'MSLayerGroup') {
    container = container.parentGroup();
  }



  selectedLayers.forEach(function (layer) {
  //  log(layer.frame.width)
    layer.removeFromParent();
  })

//setting style of rectangle fill to match line color and disabling rectangle border
  var myStyle = new sketch.Style()
  myStyle.fills = hexbordercolor ? [hexbordercolor] : ['#979797'];
  //myStyle.fills =  [hexbordercolor];
  myStyle.borders = [{
    enabled: false
  }];

  log(myStyle);

//draw rectangle
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
