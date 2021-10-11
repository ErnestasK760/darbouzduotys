<?php

require_once('Immutable.php');

final class MyImmutable extends Immutable {
    
  private $store;
  
  public function __construct(string $data = '') {
    $this->store = $data;
  }
  public function __set($name, $value) {
    throw new Exception("Can't set!");
  }
  public function getData(): string {
    return $this->store;
  }
}
