<?php
header('Content-Type:text/plain');
$myfile = fopen("dict.txt", "r") or die("ERROR");
echo fread($myfile,filesize("dict.txt"));
fclose($myfile);
?>