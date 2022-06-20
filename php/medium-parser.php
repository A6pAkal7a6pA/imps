<?php
$mediumContent = file_get_contents('https://medium.com/feed/@imptoken');
$xml = simplexml_load_string($mediumContent, null, LIBXML_NOCDATA);
$items = $xml->{"channel"}->{'item'};
$array = [];
for ($i = 0; $i < 3; $i++) {
	$doc = new DOMDocument('1.0', 'UTF-8');
	$doc->loadHTML($items[$i]->children("content", true)->encoded->__toString(), LIBXML_NOERROR);
	$xpath = new DOMXPath($doc);
	$src = $xpath->evaluate("string(//img/@src)");
		array_push($array, [
		"title" => $items[$i]->{'title'}->__toString(), 
		"link" => $items[$i]->{'link'}->__toString(), 
		"image" => $src]);
}

print json_encode($array);
