 
var currSkillData=4;
 function preSkillClick() {
    if (currSkillData == 1)
      return;
    $('.skillDataContainerScroller').animate({ top: '+=20%' });
    $('#skillData-' + currSkillData).removeClass('skillDataSelected');
    $('#skillData-' + (currSkillData - 1)).addClass('skillDataSelected');
    currSkillData--;
    
  }
  function postSkillClick() {
    if (currSkillData == 22)
      return;
    $('.skillDataContainerScroller').animate({ top: '-=20%' });
    $('#skillData-' + currSkillData).removeClass('skillDataSelected');
    $('#skillData-' + (currSkillData + 1)).addClass('skillDataSelected');
    currSkillData++;

  }