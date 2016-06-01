function One(text,link,sel)
{
	if (text == sel) document.write("<font color=orange>");
	else document.write("<a href=" + link + ".html>");
	document.write(text);
	if (text == sel) document.write("</font>");
	else document.write("</a>");
}

function Menu(sel)
{
	One("Home", "index", sel);
	document.write(" | ");
	One("Videos", "video", sel);
	document.write(" | ");
	One("Documentation", "doc_home", sel=="Config"?"Documentation":sel);
	document.write(" | ");
	One("Data", "data", sel);
	document.write(" | ");
	One("Contact", "contact", sel);
	document.write(" | ");
	One("Donate", "donate", sel);
}

function Two(text,link,sel)
{
	document.write("<small>");
	if (text == sel) document.write("<font color=orange>");
	else document.write("<a href=" + link + ".html>");
	document.write(text);
	if (text == sel) document.write("</font>");
	else document.write("</a>");
	document.write("</small>");
}

function DocMenu(sel)
{
	document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--")
	Two("index", "doc_home", sel);
	document.write("|");
	Two("config", "doc_config", sel);
	document.write("|");
	Two("display strings", "doc_dispstr", sel);
	document.write("|");
	Two("detail", "doc_dispstr_det", sel);
}

function oneDownload(file)
{
	document.write("<a href=data/" + file + ">" + file + "</a></li></br>");
}

function contact()
{
	document.write("<p>+------------------<br>")
	document.write("A product of Great Hill Corporation<br>")
	document.write("<a href=mailto:info@greathill.com>info@ethslurp.com</a><br>")
	document.write("+1 01 610 519-9413<br><br>")
	document.write("<a target=_blank href=\"https://github.com/Great-Hill-Corporation/ethslurp\"><img src=\"images/octocat.png\"></a> ")
	document.write("<a target=_blank href=\"https://twitter.com/Ether_Slurp\"><img src=\"images/twitter.png\"></a> ")
	//document.write("<a target=_blank href=\"\"><img src=\"images/facebook.png\"></a> ")
	document.write("<br><i><small><h6>icons by dave gandy or freepic at http://www.flaticon.com</h6></small></i>")
}
