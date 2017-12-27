function createColorPicker( colors )
{
	var box, picker = document.getElementById( 'colorPicker' );

	//Make sure colors were provided
	if( !colors || colors.length == 0 )
	{
		alert( 'Error: The colorPicker function requires 1 or more colors in an array')
		return; // Exit out of the function
	}

	//Create a box for each of the colors in the array
	for( var i in colors )
{
	box = document.createElement('div');
	box.className = 'box';
	box.style.backgroundColor = colors[i];
	box.onclick = changeBackground;

	if( i == 0 )
		box.onclick();

	picker.appendChild( box );
}

}

function changeBackground()
{
	document.body.style.backgroundColor = this.style.backgroundColor;
}