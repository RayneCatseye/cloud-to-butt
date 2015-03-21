walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bFarmer John\b/ig, "John Peters, you know, the farmer");
	v = v.replace(/\bFJ\b/g, "John Peters, you know, the farmer");

	v = v.replace(/\bBessie\b/ig, "his invisible corn");
	v = v.replace(/\bBessy\b/ig, "his invisible corn");
	v = v.replace(/\bBetsy\b/ig, "his invisible corn");

	v = v.replace(/\bapple/\b/ig, "trans-dimensional orange");
	
	textNode.nodeValue = v;
}


