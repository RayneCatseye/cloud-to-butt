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

	v = v.replace(/\bFarmer John\b/g, "John Peters, you know, the farmer");
	v = v.replace(/\bFarmer john\b/g, "John Peters, you know, the farmer");
	v = v.replace(/\bframer John\b/g, "John Peters, you know, the farmer");
	v = v.replace(/\bfarmer john\b/g, "John Peters, you know, the farmer");
	
	v = v.replace(/\bBessie\b/g, "his invisible corn");
	v = v.replace(/\bbessie\b/g, "his invisible corn");
	v = v.replace(/\bBessy\b/g, "his invisible corn");
	v = v.replace(/\beessy\b/g, "his invisible corn");
	v = v.replace(/\bBetsie\b/g, "his invisible corn");
	v = v.replace(/\bbetsie\b/g, "his invisible corn");
	
	textNode.nodeValue = v;
}


