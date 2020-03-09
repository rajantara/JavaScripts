function spiral(params) {
    const word = [];
    const word2 = [];
    let start = 0;
    let top = 0;
    let right = params - 1;
    let bottom = params - 1;
    let left = 0;
  
    for (let i = 0; i < params; i++) {
      word[i] = []
      for (let a = 0; a < params; a++) {
        word[i][a] = start;
        start++;
        
      }
    }
    while (left <= right && top <= bottom) {
      // Top row
      for (let i = left; i <= right; i++) {
        word2.push(word[top][i]);
        
      }
      top++;
  // Right column
      for (let i = top; i <= bottom; i++) {
        word2.push(word[i][right]);
        
      }
      right--;
  // Bottom row
      for (let i = right; i >= left; i--) {
        word2.push(word[bottom][i]);
        
      }
      bottom--;
  // start column
      for (let i = bottom; i >= top; i--) {
        word2.push(word[i][left]);
       
      }
      left++;
    }
   console.log(word2);
   
    
  }
  spiral(5)
  spiral(6)
  spiral(7)
   