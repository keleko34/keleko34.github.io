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
