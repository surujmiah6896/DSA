<?php

echo "I love php";
echo "<br>";

class Test {

    public static function __callStatic($method, $arguments)
    {
        echo "You tried to call static method: '$method'<br>";
        echo "Arguments: " . implode(', ', $arguments) . "<br>";
        return (new static)->$method(...$arguments);
    }

    public static function create(...$a){
        echo "yes you Create ".$a[0]. " with ".$a[1]." with ".$a[2]." hours";
    }

    // this call function call when call method from this class instance 
    public function __call($m, $p){
        echo $m;
        echo get_class($this);
        echo $p;
    }
}


Test::sex('car','BMW','2');