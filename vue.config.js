const { defineConfig } = require("@vue/cli-service");
let API = process.env.VUE_APP_API
module.exports = defineConfig({
  transpileDependencies: true,
  "lintOnSave":false,
  "devServer":{
	  proxy:{
		  "/api":{
			  target:API,
			  changOrigin:true,
			  pathReWrite:{
				  "/api":""
			  }
		  }
	  }
  }
});
