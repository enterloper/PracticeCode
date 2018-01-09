function SimpleAdding(num) { 
  if(num===1){
      return 1;
    }
  else { 
      return num+SimpleAdding(num-1); 
    }  
}