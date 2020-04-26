ngapp.run(function(workflowService) {
    workflowService.addModule({
        name: 'Blacksmith',
        label: 'Blacksmith',
        image: `${modulePath}/resources/images/Blacksmith.png`,
        games: [xelib.gmTES5, xelib.gmSSE],
        workflows: [
            'makeWeapons', 'makeArmor', 'addToLeveledLists', 'makeRecipes', 'makeTemperRecipes'
        ],
        getTheme: function(theme) {
            return `${modulePath}\\css\\${theme}`;
        }
    });
});
