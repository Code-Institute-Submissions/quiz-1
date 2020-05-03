function apiValues(event) {

   var amount = $("#amount option:selected").data("amount");
   var category = $("#category option:selected").data("category");
   var difficulty = $("#difficulty option:selected").data("difficulty");
   var type = $("#type option:selected").data("type");

   console.log(amount);
   console.log(category);
   console.log(difficulty);
   console.log(type);

}
apiValues();
