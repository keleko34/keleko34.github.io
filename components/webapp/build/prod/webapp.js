if(!K_Components) K_Components = {};
K_Components["webapp"] = (function(){
/*********************************
 *  webapp
 *  Created by keleko34
 *  The main entry point for the konnekt web app
 ********************************/

function webapp()
{
  /* ATTRIBUTES */
  this.page = "";
  
  this.listen('page',function(value){
    this.page = value;
    console.log(value);
  });
}

/* PROTOTYPES */

webapp.prototype.k_html = "<!-- webapp Created by keleko34, The main entry point for the konnekt web app --><div class='webapp'>  <navbar></navbar>  <div class='webapp__content'>    <intro offset='62'></intro>  </div></div>";
webapp.prototype.k_css = "/********************************* *  webapp *  Created by keleko34 *  The main entry point for the konnekt web app ********************************/.webapp {}";
return webapp;
}());