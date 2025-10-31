<?php
$arr = [
	['name'=>'jamal', 'age'=>24],
    ['name'=>'Kamal', 'age'=>24],
    ['name'=>'Kamal', 'age'=>30]
];
function arrayGroupByKey($arr, $key)
{
    //echo $key;

    $n_array = [];
    $arr_len = count($arr);
    //echo $arr_len;
    for ($i = 0; $i < $arr_len; $i++) {
        $array = $arr[$i];
        $arrayKey = $array[$key];
        //var_dump($arr[$i]);
        if (array_key_exists($key, $array)) {
            if (!array_key_exists($arrayKey, $n_array)) {
                $n_array[$arrayKey] = $array;
            } else {
                array_push($n_array[$arrayKey], $array);
            }
        }
    }
    return $n_array;
};


$result = arrayGroupByKey($arr, 'age');
var_dump($result);

// var_dump($arr);