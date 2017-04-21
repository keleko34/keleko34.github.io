if(!K_Components) K_Components = {};
K_Components["navitem_link"] = (function(){
/*********************************
 *  navitem_link
 *  Created by keleko34
 *  allows linking to another page rather than switching content
 ********************************/

function navitem_link()
{
  /* ATTRIBUTES */
  var self = this;

  this.link = "";
  this.left = 0;
  this.title = "";
  this.active = false;
  
  /* Filters */
  this.filters.isActive = function(v)
  {
    return (v ? 'navitem--active' : '');
  }
  
  /* listeners */
  this.listen('navitem',function(value){
    this.active = (this.title === value);
  });
  
  /* ATTRIBUTES */
}

/* PROTOTYPES */

navitem_link.prototype.k_html = "<!-- navitem_link Created by keleko34, allows linking to another page rather than switching content --><!-- navitem Created by keleko34, a single clickable navitem for the navbar --><div class='navitem_link {{active | isActive}}'>  <a class='navitem_link_text' href='{{link}}'>{{title}}</a></div>";
navitem_link.prototype.k_css = "/********************************* *  navitem_link *  Created by keleko34 *  allows linking to another page rather than switching content ********************************/.navitem_link {}.{{local}} .navitem_link {  position: absolute;  height: 100%;  margin-left:{{left}}px}.{{local}} .navitem_link:hover {  background: #1b1a1a;  box-shadow: 0px -2px 16px -4px #000 inset;}.{{local}} .navitem_link:active {  background: #1b1a1a;  box-shadow: 0px -2px 16px -4px #000 inset;}.{{local}} .navitem_link--active {  background: #1b1a1a;  box-shadow: 0px -2px 16px -4px #000 inset;}.{{local}} .navitem_link_text {  cursor: pointer;  color: #F1F1F1;  font-size: 14px;  font-family: 'Open Sans';  text-align: center;  line-height: 60px;  padding: 0px 10px;  white-space: nowrap;  text-decoration: none;}";
return navitem_link;
}());