<?php

echo "I love php";
echo "<br>";

class Test {

    public static function __callStatic($name, $arguments)
    {
        echo "You tried to call static method: '$name'<br>";
        echo "Arguments: " . implode(', ', $arguments) . "<br>";
    }

    public static function create(...$a){
        echo "yes you Create ".$a[0]. " with ".$a[1]." with ".$a[2]." hours";
    }
}


Test::create('car','BMW','2');