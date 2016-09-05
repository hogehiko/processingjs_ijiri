
navigator.requestMIDIAccess().then(onMIDISuccess,onMIDIFailure);
// var width = 600;
// var height = 300;
var midi = null;
var inputs = [];
var outputs = [];

function onMIDISuccess(m){
  midi = m;
  var it = midi.inputs.values();
  for(var o = it.next(); !o.done; o = it.next()){
    inputs.push(o.value);
  }
  var ot = midi.outputs.values();
  for(var o = ot.next(); !o.done; o = ot.next()){
    outputs.push(o.value);
  }

  for(var cnt=0;cnt < inputs.length;cnt++){
    inputs[cnt].onmidimessage = onMIDIEvent;
  }
}

function onMIDIFailure(msg){
  console.log(msg);
}

var x = 100;
var y = 50;

function onMIDIEvent(e){
	console.log(e.data)
  if(e.data[0] == 144 && e.data[1] !=0){
  	var note = e.data[1];
  	var velosity = e.data[2];
    x = 600/30*(note %30);
    y = (128-velosity) * 300 / 128;
  }
}

function sendMIDINoteOn(note){
  if(outputs.length > 0){
    outputs[0].send([0x90,note,0x7f]);
  }
}