<?php

// $x = 10;
$names = ["Rudi", "Habibie", "John"];

for ($i = 0; $i < count($names); $i++) {
    echo $names[$i] . PHP_EOL;
}


foreach ($names as $name) {
    echo ($name) . PHP_EOL;
}
?>