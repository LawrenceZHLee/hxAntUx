import React from 'react'
import BpmnViewer from 'bpmn-js'

class bpmnView extends React.Component{
  constructor(){
    super();
    this.viewer = new BpmnViewer();
    this.generateId = 'bpmnContainer'+ Date.now();
  }
  render(){
    return <div id={this.generateId}></div>;
  }
  componentDidMount (){
    this.viewer.attachTo('#'+ this.generateId);

    // import function
    function importXML(xml,Viewer) {

      // import diagram
      Viewer.importXML(xml, function(err) {

        if (err) {
          return console.error('could not import BPMN 2.0 diagram', err);
        }

        var canvas = Viewer.get('canvas'),
          overlays = Viewer.get('overlays');


        // zoom to fit full viewport
        canvas.zoom('fit-viewport');

        // attach an overlay to a node
        overlays.add('SCAN_OK', 'note', {
          position: {
            bottom: 0,
            right: 0
          },
          html: '<div class="diagram-note">Mixed up the labels?</div>'
        });

        // add marker
        canvas.addMarker('SCAN_OK', 'needs-discussion');
      });
    }


    // a diagram to display
    //
    // see index-async.js on how to load the diagram asynchronously from a url.
    // (requires a running webserver)
    var diagramXML = this.props.bpmn;

    // import xml
    importXML(diagramXML, this.viewer);


  }
}


export default bpmnView
