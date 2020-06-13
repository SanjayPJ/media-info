// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const electron = require('electron');
const ipcRenderer = electron.ipcRenderer;

var app = new Vue({
  el: '#app',
  data: {
    message: false
  },
  mounted() {
  	ipcRenderer.on('video:metadata', (e, metadata) => {
		this.message = metadata;
	})
  },
  methods: {
  	sendIpc: (e) => {
  		const mediaFile = e.target[0].value;

  		if(mediaFile){
			ipcRenderer.send('video:submit', mediaFile);
  		}
  	}
  }
})