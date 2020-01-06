

  
function actionApplyer(int, arr) {
    arr.forEach(a => {
        a(int)
    })
    return int 
 }


 function actionApplyer(int, fns) {
    fns.forEach(fn => {
      int = (fn(int))
    })
  
    return int
  }



  function actionApplyer(int, arr) {
      arr.forEach(a => {
         int = (a(int)) 
      })
      return int
  }


  function actionApplyer(int, fns) {
    fns.forEach(fn => {
      int = (fn(int))
    })
  
    return int
  }