<?php 
    header('Content-Type: application/json; charset=utf-8');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    if(isset($_GET['data'])) {
        echo json_encode([ "teste" => [1,2,3]]);
    }