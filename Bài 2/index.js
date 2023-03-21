function numberOneTriangle(num) {
    if (num < 1 || num > 10) {
        document.write("Vui lòng nhập từ 1 đến 10");
      return;
      
    }
    
    for(let i = 1; i <= num ; i++) {
      let row = '';
      for(let j = 1; j <= i; j++) {
        row += '*';
      }
      document.write(row,"</br>")
    }
  }

  numberOneTriangle(8)
