//(C.McGr) Used to fix screen resolution issues
if(window.outerWidth == 1366 && window.outerHeight == 768){
	document.body.style.zoom = 0.71;
}

if(window.outerWidth == 1680 && window.outerHeight == 1050)
{
	document.body.style.zoom = 0.87;
}

if(window.outerWidth == 1536 && window.outerHeight == 864)
{
	document.body.style.zoom = 0.8;
}

if(window.outerWidth == 1440 && window.outerHeight == 900)
{
	document.body.style.zoom = 0.75;
}

if(screen.width == 1680 && screen.height == 1050){
	document.body.style.zoom = 0.87;
}

if(screen.width == 1366 && screen.height == 768){
	document.body.style.zoom = 0.71;
}

if(screen.width == 1536 && screen.height == 864){
	document.body.style.zoom = 0.8;
}

if(window.outerWidth < 1920 && window.outerWidth > 1680)
{
	document.body.style.zoom = 0.91;
}

if(window.outerWidth < 1440 && window.outerWidth > 900)
{
	document.body.style.zoom = 0.75;
}