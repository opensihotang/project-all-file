<?php
function sayHello($var)
{
    echo "Hello $var" . PHP_EOL;
}

sayHello("bossku");

function sum($first, $second)
{
    $total = $first + $second;
    return $total;
}
$result = sum(10, 10);
echo $result;
?>