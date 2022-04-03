function toggle(toggleObjects){
  for (const object in toggleObjects) {
    toggleObjects[object].visible = !toggleObjects[object].visible;
  }
}

function explanations() {
  resources.explanations = !resources.explanations;

  resources.definitions = new MRSStrings(resources.explanations);
  new DiagramInteractions(resources.organs, resources.definitionDisplay, resources.definitions, resources, 'organ', resources.explanationButton);
  
  resources.definitionDisplay.text = resources.definitions[resources.organ];
}